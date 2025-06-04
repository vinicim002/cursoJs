function rand(min, max) {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
}

function esperaAI(msg, tempo) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof msg !== "string") {
        reject("CAI NO ERRO");
        return;
      }
      resolve(msg.toUpperCase() + " - Passei na promise");
    }, tempo);
  });
}

// function baixaPAgina() {
//     const emCache = false;

//     if(emCache) {
//         return Promise.resolve('Pagina em cache');
//     } else {
//         return esperaAI('Baixei a pagina', 3000);
//     }
// }

function baixaPAgina() {
    const emCache = true;

    if(emCache) {
        return Promise.reject('Pagina em cache');
    } else {
        return esperaAI('Baixei a pagina', 3000);
    }
}

baixaPAgina()
    .then(dadosPagina => {
        console.log(dadosPagina);
    })
    .catch(e => console.log('ERRO', e));


//Promise.all Promise.race Promise.resolve Primise.reject

// const primises = [
//   esperaAI("Promise 1", 3000),
//   esperaAI("Promise 2", 500),
//   esperaAI("Promise 3", 1000),
//   esperaAI(1000, 1000),
// ];

// Promise.all(primises)
//     .then(function(valor){
//         console.log(valor);
//     })
//     .catch(function(erro) {
//         console.log(erro);
//     });

// Promise.race(primises)
//   .then(function (valor) {
//     console.log(valor);
//   })
//   .catch(function (erro) {
//     console.log(erro);
//   });
