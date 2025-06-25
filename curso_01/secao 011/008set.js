// nao aceita repeticao/nao indexada
const times = new Set();
times.add('Vasco');
times.add('Sao Paulo').add('Palmeiras').add('Corinthians');
times.add('Flamengo');
times.add('Vasco'); // não aceita repetição

console.log(times); // Set(5) { 'Vasco', 'Sao Paulo', 'Palmeiras', 'Corinthians', 'Flamengo' }
console.log(times.size); // 5
console.log(times.has('vasco')); // false
console.log(times.has('Vasco')); // true
times.delete('Flamengo'); // remove o elemento Flamengo
console.log(times.has('Flamengo')); // false

const nomes = ['Raquel', 'Lucas', 'Ana', 'Julia'];
const nomesSet = new Set(nomes);
console.log(nomesSet); // Set(4) { 'Raquel', 'Lucas', 'Ana', 'Julia' }