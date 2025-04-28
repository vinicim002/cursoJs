function real(string, ...valores){
    const resultado = [];
    valores.forEach((valor, indice) => {
        valor = isNaN(valor) ? valor : `R$${valor.toFixed(2)}`;
        resultado.push(string[indice], valor);
    });
    return resultado.join('');
}

const preco = 29.9;
const precoParcela = 11;
console.log(real`1x de ${preco} ou 3x de ${precoParcela}`); // 1x de R$29.90 ou 3x de R$11.00