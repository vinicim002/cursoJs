// const vect = ["Arroz", "Feijao", "Batata"];
// console.log(vect);
// const idade = [];
// idade[0] = 22;
// idade[1] = 23;
// console.log(idade);

// const cidade = ["Pelotas"];
// cidade.push ("Rio de Janeiro"); //Adiciona o elemento ao final do arrray
// console.log(cidade);
// cidade.unshift("Recife"); //Adiciona o elemento ao inicio do arrray
// console.log(cidade); 
// cidade.pop(); //Exclui o ultimo elemento do vetor;
// console.log(cidade); 
// cidade.shift(); //Exclui o primeiro elemento do vetor;
// console.log(cidade); 

// const letras = ['A', 'B', 'C', 'D'];
// console.log(letras);
// const letras2 = letras.slice(-2); //Obtem os dois ultimos elementos do meu array;
// console.log(letras2);
// const letras3 = letras.slice(0, -1); //Obtem os valores do inicio ate o final exceto o ultimo elemento
// console.log(letras3);

// const retira = letras.splice(2, 1); //Remove a partir do elemento 2 X elementos nesse caso 1 elemento 
// console.log(letras);
// console.log(retira);

// const cidades = ["Pelotas", "Rio de Janeiro", "Sao Paulo"];

// for (let i=0; i<cidades.length; i++) {
//     console.log(cidades[i]);
// }

// console.log("-".repeat(40));
// console.log(cidades.toString()); //toString e join sao basicamente a mesma coisa, porem no join eu posso "setar o sinal de separacao"
// console.log(cidades.join(" - ")) //toString e join sao basicamente a mesma coisa, porem no join eu posso "setar o sinal de separacao"
// console.log("-".repeat(40));

// for(const qualquerNome of cidades) {
//     console.log(qualquerNome);
// }

// console.log("-".repeat(40));

// cidades.forEach((cidade, i) => {
//     console.log(`${i+1}a Cidade: ${cidade}`);
// })

// const idades = [5, 6, 8, 3, 6, 9];

// console.log(idades.indexOf(6)); //Retorna a posicao onde foi encontrado o elemento
// console.log(idades.indexOf(7)); //Retorna -1, pois nao existe esse elemento
// console.log(idades.lastIndexOf(6)); //Retorna a posicao onde foi encontrado 
// console.log(idades.lastIndexOf(11)); //Retorna -1 se nao tiver o elemento
// console.log(idades.includes(3)); //Retorna true se tiver o elemento
// console.log(idades.includes(10)); //Retorna false se nao tiver o elemento

const carros = [];
carros.push({modelo: "Sandero", preco: 46500});
carros.push({modelo: "Palio", preco: 37800});

for(const carro of carros) {
    console.log(`${carro.modelo} - R$: ${carro.preco}`);
}