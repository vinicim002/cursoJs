const frm = document.querySelector("form");
const resp = document.querySelector("pre");

const classifica = (anoFab) => {
    const anoAtual = new Date().getFullYear();
    const resultado = anoAtual - anoFab;
    let classif

    if(resultado === 0){
        classif = "Novo";
    } else if(resultado === 1 || resultado === 2){
        classif = "Seminovo";
    } else {
        classif = "Usado";
    }

    return classif;
}

const calcularEntrada = (preco, classificacao) => 
    classificacao === "Novo" ? 0.50 * preco : 0.30 * preco;

frm.addEventListener("submit", (e) => {
    e.preventDefault();

    const modelo = frm.inModelo.value;
    const anoFab = Number(frm.inAnoFab.value);
    const preco = Number(frm.inPreco.value);

    const classificacao = classifica(anoFab);
    const entrada = calcularEntrada(preco, classificacao)
    const parcela =(preco - entrada) / 10;

    resp.innerText = `${modelo} - ${classificacao}\nEntrada R$: ${entrada.toFixed(2).replace(".", ",")}\n+10x de R$: ${parcela.toFixed(2).replace(".", ",")}`
})