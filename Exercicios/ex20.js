const separadorDeCedulas = (valor) => {

    let qtdNotaCem = 0, qtdNotaCinquenta = 0, qtdNotaDez = 0, qtdNotaCinco = 0, qtdNotaUm = 0

    let resultado = "";

    while (valor > 0 ){
        if(valor >= 100){
            qtdNotaCem += 1;
            valor -= 100;
        } else if (valor >= 50) {
            qtdNotaCiquenta += 1;
            valor -= 50;
        } else if (valor >= 10) {
            qtdNotaDez += 1;
            valor -= 10;
        } else if (valor >= 5) {
            qtdNotaCinco += 1;
            valor -= 5;
        } else {
            qtdNotaUm += 1;
            valor -= 1;
        }
    }

    if (qtdNotaCem > 0) resultado += `${qtdNotaCem} nota(s) de R$ 100\n`;
    if (qtdNotaCinquenta > 0) resultado += `${qtdNotaCinquenta} nota(s) de R$ 50\n`;
    if (qtdNotaDez > 0) resultado += `${qtdNotaDez} nota(s) de R$ 10\n`;
    if (qtdNotaCinco > 0) resultado += `${qtdNotaCinco} nota(s) de R$ 5\n`;
    if (qtdNotaUm > 0) resultado += `${qtdNotaUm} nota(s) de R$ 1\n`;

    return resultado;
};

console.log(separadorDeCedulas(18));


//Estudar dps essa forma mais simplificada q o chatgpt passou 

// const separadorDeCedulas = (valor) => {
//     let resultado = "";

//     const notas = [
//         { valor: 100, nome: "nota(s) de R$ 100" },
//         { valor: 50, nome: "nota(s) de R$ 50" },
//         { valor: 10, nome: "nota(s) de R$ 10" },
//         { valor: 5, nome: "nota(s) de R$ 5" },
//         { valor: 1, nome: "nota(s) de R$ 1" }
//     ];

//     for (let nota of notas) {
//         const quantidade = Math.floor(valor / nota.valor);
//         if (quantidade > 0) {
//             resultado += `${quantidade} ${nota.nome}\n`;
//             valor %= nota.valor; // Atualiza o valor com o restante
//         }
//     }

//     return resultado;
// };

// console.log(separadorDeCedulas(18));
