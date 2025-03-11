const frm = document.querySelector("form");
const respLista = document.querySelector("pre");

frm.addEventListener('submit', (e) => {
    e.preventDefault();

    const produto = frm.inProduto.value;

    // Verifico se existe produto no localStorage
    if (localStorage.getItem("listaProduto")) { 
        // Caso haja, pego o que já tinha e adiciono o novo
        const produtos = localStorage.getItem("listaProduto").split(";"); 

        produtos.push(produto);
        produtos.sort();

        localStorage.setItem("listaProduto", produtos.join(";"));
    } else { 
        // Caso não exista, adiciono o primeiro item sem usar join
        localStorage.setItem("listaProduto", produto);
    }

    listaProduto();
    frm.reset();
    frm.inProduto.focus();
});

// Função para listar os produtos
const listaProduto = () => {
    if (!localStorage.getItem("listaProduto")) {
        respLista.innerText = "";
        return;
    }

    const produtos = localStorage.getItem("listaProduto").split(";");
    
    // Corrigindo a referência errada de resp para respLista
    respLista.innerText = `Produtos Adicionados\n-----------------------\n${produtos.join("\n")}`;
};

window.addEventListener("load", listaProduto);

// Corrigindo a referência do botão limpar
document.querySelector("#btnLimpar").addEventListener("click", () => {
  if (localStorage.getItem("listaProduto")) {
    if (confirm("Deseja realmente excluir todos os itens da lista?")) {
      localStorage.removeItem("listaProduto");
      listaProduto();
    }
  } else {
    alert("Lista está vazia...");
  }
  frm.inProduto.focus();
});
