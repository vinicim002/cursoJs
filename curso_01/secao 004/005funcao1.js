//Funcao sem retorno 

function imprimirSoma(a, b){
                //Parametro
    console.log(a + b);
}
            //Argumento
imprimirSoma(2, 3);
imprimirSoma(2);
            //Soma os dois primeiros e o resto ignora
imprimirSoma(2, 3, 7, 8, 10)

//Funcao com retorno
function soma(a, b = 0){
    return a + b;
}

console.log(soma(2,3));
console.log(soma(2));