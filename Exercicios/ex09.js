const simboloMais = (num) => {
    let simbolo = "";

    for(let i=0; i<num; i++) {
        simbolo += "+";
    }
    return simbolo;
}

console.log(simboloMais(2));
console.log(simboloMais(4));