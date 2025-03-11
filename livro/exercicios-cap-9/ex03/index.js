const frm = document.querySelector("form");
const respLista = document.querySelector("pre");

frm.addEventListener('submit', (e) => {
  e.preventDefault();

  const produto = frm.inProduto.value;

  //Verificando se o produto ja esta cadastrado na lista
  if(verificarProduto(produto)) {
    alert("Esse produto ja esta cadastrado!");
    frm.inProduto.focus();
    return;
  }
  
  //Verificando se exite dados salvos
  if(localStorage.getItem("listaDeProdutos")){

    const listaDeProdutos = localStorage.getItem("listaDeProdutos").split(";");

    //Adiciono o item no array e coloco em ordem alfabetica
    listaDeProdutos.push(produto);
    listaDeProdutos.sort();

    //Salvando o novo porduto na listaDeProdutos e convertendo em string
    localStorage.setItem("listaDeProdutos", listaDeProdutos.join(";"));
  } else {
    //Senao eh o primeiro item 
    localStorage.setItem("listaDeProdutos", produto);
  }

  listarProdutos();

  //Limap o input e colocar o focu nele novamente 
  frm.reset();
  frm.inProduto.focus();

});

//Funcao para verificar se um item ja consta na lista
const verificarProduto = (produto) => {

  if(localStorage.getItem("listaDeProdutos")){

    const listaDeProdutos = localStorage.getItem("listaDeProdutos").split(";");

    return listaDeProdutos.includes(produto.toString());
  } else {
    return false;
  }
}

const listarProdutos = () => {
  if(!localStorage.getItem("listaDeProdutos")) {
    respLista.innerText = "";
    return;
  } else {
    const listaDeProdutos = localStorage.getItem("listaDeProdutos").split(";");

    respLista.innerText = `Produtos Adicionados\n-----------------------\n
${listaDeProdutos.join("\n")}`;
  }
}

window.addEventListener("load", listarProdutos);

frm.btnLimpar.addEventListener("click", () => {
  if (localStorage.getItem("listaDeProdutos")) {
    if (confirm("Deseja realmente excluir todos os itens da lista?")) {
      localStorage.removeItem("listaDeProdutos")
      listarProdutos()
    }
  } else {
    alert("Lista está vazia...")
  }
  frm.inProduto.focus()
})