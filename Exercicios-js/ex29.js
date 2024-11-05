const numeros = [5, 10, 15, 20, 25, 30, 8, 18, 12, 21, 7, 19, 3, 11, 22];
let foraDoIntervalo = 0, dentroDoIntervalo = 0;
const numerosDentroDoIntervalo = []
const numerosForaDoIntervalo = [];

numeros.forEach((numero) => {
    if(numero >= 10 && numero <= 20){
        numerosDentroDoIntervalo.push(numero);
        dentroDoIntervalo++;
    } else {
        numerosForaDoIntervalo.push(numero);
        foraDoIntervalo++;
    };
})

console.log(`Números dentro do intervalo [10, 20]: ${numerosDentroDoIntervalo}`);
console.log(`Quantidade dentro do intervalo: ${dentroDoIntervalo}`);
console.log(`Números fora do intervalo: ${numerosForaDoIntervalo}`);
console.log(`Quantidade fora do intervalo: ${foraDoIntervalo}`);