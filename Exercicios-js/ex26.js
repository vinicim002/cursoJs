console.log("Numeros pares!");
for(let i = 1; i <= 100; i++){
    if(i % 2 === 0){
        console.log(i);
    }
}

//Solucao do chatgpt (Muito mais eficiente)

// console.log("Números pares!");
// for (let i = 2; i <= 100; i += 2) {
//     console.log(i);
// }

//Nesse codigo o i ja inicia em 2 e pecorre de 2 em 2, ou seja, pegando apenas o pares sem precisar fazer uma verificacao com if
