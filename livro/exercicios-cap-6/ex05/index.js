const frm = document.querySelector('form');
const resp = document.querySelector('pre');

const carro = [];

frm.addEventListener('submit', (e) => {
    e.preventDefault();
    const modelo = frm.inModelo.value;
    const preco = Number(frm.inPreco.value);

    //Adiciono esse novo carro ao meu vetor carro 
    carro.push({modelo, preco});

    frm.inModelo.value = "";
    frm.inPreco.value = "";
    inModelo.focus();

    frm.btLista.dispatchEvent(new Event("click"));
});

frm.btLista.addEventListener("click", () => {
    if(carro.length == 0){
        alert("Nao ha carros na lista");
        return;
    }

    const lista = carro.reduce((acumulador, carro) => 
        acumulador + carro.modelo + " - R$: " + carro.preco.toFixed(2).replace(".", ",") + "\n", "");
    resp.innerText = `Lista dos Carros Cadastrados\n${"-".repeat(40)}\n${lista}`
});

frm.btFiltrarPreco.addEventListener('click', (e) => {
    const maximo = Number(prompt("Qual o valor maximo que o cliente deseja pagar?"))

    if(maximo == 0 || isNaN(maximo)){
        return;
    }

    const carrosFilter = carro.filter(carro => carro.preco <= maximo);

    if(carrosFilter == 0){
        alert("Nao ha carros com preco inferior ou igual ao solicitado");
        return;
    }

    let lista = "";

    for(const carro of carrosFilter){
        lista += `${carro.modelo} - R$: ${carro.preco.toFixed(2).replace(".", ",")}\n`
    }

    resp.innerText = `Carros ate R$: ${maximo.toFixed(2).replace(".", ",")}\n${"-".repeat(40)}\n${lista}`;
});

frm.btSimularPreco.addEventListener('click', () => {
    const desconto = Number(prompt("Qual o percentual de desconto: "));
    if(desconto == 0 || isNaN(desconto)){
        return
    }
    const carroDesc = carro.map(aux => ({
        modelo: aux.modelo,
        preco: aux.preco - (aux.preco * desconto/100)
    }));

    let lista = "";
    for(const carro of carroDesc){
        lista += `${carro.modelo} - R$: ${carro.preco.toFixed(2).replace(".", ",")}\n`;
    }
    resp.innerText = `Carros com desconto: ${desconto}%\n${"-".repeat(40)}\n${lista}`;
});