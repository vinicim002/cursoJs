const numerosInteiros = []
numerosInteiros.push(10, 25, 30, 23, 41, 45, 102, 1, 3, 8, 1001);

let par = 0, impar =0

numerosInteiros.forEach((numero) => {
    if(numero % 2 === 0){
        console.log(numero);
        par++;
    } else {
        impar++
    };
});

console.log(`Quantidade de pares: ${par}\nQuantidade de impares: ${impar}`)


