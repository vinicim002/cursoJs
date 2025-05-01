// ✅ 1. Fácil – Simulando um pedido simples com Promise
// Objetivo: Criar uma Promise que resolve após 2 segundos com uma mensagem de sucesso.

let contagem = 0;

function pedirPizza() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Pizza entregue! 🍕");
    }, 10000);
  });
}

// Começa a contagem enquanto espera
const timer = setInterval(() => {
  console.log(contagem++);
}, 1000); // a cada segundo (mais visual)

pedirPizza()
  .then(result => {
    clearInterval(timer); // para a contagem
    console.log(result);
  })
  .catch(e => console.log(e));
