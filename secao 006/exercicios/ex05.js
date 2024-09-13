const dinheiro = (x) => `R$ ${x.toFixed(2).replace('.', ',')}`;

console.log(dinheiro(0.30000000000000004));