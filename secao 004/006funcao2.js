//Armazenando uma funcao em uma variavel

                    //Funcao ANONIMA => Eh igual a uma funcao normal mas sem o nome da funcao
const imprimirSoma = function (a, b){
    console.log(a + b);
};

imprimirSoma(2,3);

//Armazenando uma funcao arrow em uma variavel

const soma = (a, b ) => {
    return a + b
};

console.log(soma(2,3));

//Retorno implicito
                            //retorno da funcao
const subtracao = (a, b) => a - b;

console.log(subtracao(2, 3));
