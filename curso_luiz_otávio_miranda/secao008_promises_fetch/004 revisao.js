// Uma Promise é um objeto que representa a eventual conclusão (ou falha) de uma operação assíncrona e seu valor resultante.

// Ela tem três estados:

// pending: a promise está em andamento.

// fulfilled: a promise foi concluída com sucesso.

// rejected: a promise foi rejeitada (houve erro).

// const minhaPromise = new Promise((resolve, reject) => {
//   // alguma operação assíncrona
//   if (/* deu certo */) {
//     resolve('Sucesso!');
//   } else {
//     reject('Erro!');
//   }
// });

// Depois, usamos .then() para lidar com o sucesso e .catch() para lidar com o erro:

// minhaPromise
//   .then(resultado => {
//     console.log('Deu certo:', resultado);
//   })
//   .catch(erro => {
//     console.error('Deu errado:', erro);
//   });
