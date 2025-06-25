function getInteiroAleatorioEntre(min, max){
    const valor = Math.random() * (max - min) + min;
    return Math.floor(valor);
}

let opcao = 0;


//Usar essa opcao quando eu observar que a minha estrutura de repeticao precisa eplo menos executar uma vez sem verficar nada 
do{
    opcao = getInteiroAleatorioEntre(-1, 10);
    console.log(`Opcao escolhida foi ${opcao}`);
}while (opcao != -1)

console.log('Ate a proxima');