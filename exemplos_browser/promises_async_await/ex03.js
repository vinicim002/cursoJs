// 🧩 3. Difícil – Trabalhando com Promise.all
// Objetivo: Criar 3 Promises que simulam pedidos diferentes (pizza, refrigerante e sobremesa). Use Promise.all para esperar todas terminarem.

// Exercício:
function pedirPizza() {
    return new Promise(resolve => setTimeout(() => resolve("🍕 Pizza pronta!"), 2000));
  }
  
  function pedirRefrigerante() {
    return new Promise(resolve => setTimeout(() => resolve("🥤 Refrigerante gelado!"), 1500));
  }
  
  function pedirSobremesa() {
    return new Promise(resolve => setTimeout(() => resolve("🍨 Sobremesa servida!"), 1000));
  }
  
  // Tarefa: Use Promise.all para mostrar quando tudo estiver pronto
  Promise.all([pedirPizza(), pedirRefrigerante(), pedirSobremesa()])
    .then((valores) => {
        console.log(valores);
    })