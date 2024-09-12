let dobro = function (a){
    return 2 * a;
}


//Na arrow function sempre sera preciso declara uma variavel para ela, pois essa eh a unica forma de chamar ela em outra parte do programa
dobro = (a) => {
    return 2 * a;
}

//Use esse tipo quando a funcao so tiver um trabalho ou uma linha (o retunr e implicitamente chamado)
dobro = a => 2 * a;
console.log(dobro(Math.PI));

let ola = function () {
    return 'Ola';
}

//Sem parametro arrow function
ola = () => 'Ola';
ola = _ => 'Ola'; //Possui um param, mas na hora de chamar posso ignorar esse param
console.log(ola());