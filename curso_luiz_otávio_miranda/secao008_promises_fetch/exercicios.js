// 🧪 Exercício 1: Criar uma Promise que resolva após 3 segundos
// Crie uma função esperarTresSegundos() que retorna uma Promise que resolve com a string "Resolvido após 3s" depois de 3 segundos. Use .then() para imprimir o resultado.

// Função que retorna uma Promise e simula uma espera assíncrona
// const esperarTresSegundos = (ms, msg) => {
//   return new Promise((resolve, reject) => {
//     // setTimeout simula um atraso, como se fosse uma operação demorada (ex: requisição a uma API)
//     setTimeout(() => {
//       // Quando o tempo passar, a Promise será resolvida com a mensagem fornecida
//       resolve(msg);

//       // Caso quisesse simular um erro, poderíamos usar reject('Erro aqui') em vez de resolve
//     }, ms); // Tempo de espera em milissegundos
//   });
// };

// // Chamando a função e lidando com o resultado usando .then() e .catch()
// esperarTresSegundos(3000, "Resolvido após 3s")
//   .then(resposta => {
//     // Se a Promise for resolvida com sucesso, essa função será chamada
//     console.log(resposta); // Esperado: "Resolvido após 3s"
//   })
//   .catch(e => {
//     // Se a Promise for rejeitada por algum motivo, essa função será chamada
//     console.log("Erro:", e);
//   });


//=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

// 🔁 Exercício 2: Encadear duas operações assíncronas
// Crie uma função multiplicaPorDois(numero) que retorna uma Promise que resolve com o dobro do número após 1 segundo. Depois, use .then() para dobrar duas vezes seguidas um número inicial.

const multiplicaPorDois = (num) => {
    return new Promise((resolve, reject) => {
        if(typeof num !== 'number') reject("O valor informado nao eh do tipo 'Number'");
        setTimeout(() => {
            resolve (2 * num);
        }, 1000);
    });
};

multiplicaPorDois(2)
    .then(resultado => {
        console.log(resultado);
        return multiplicaPorDois(resultado);
    })
    .then(resultado => {
        console.log(resultado);
    })
    .catch(e => {
        console.log("ERRO: " + e);
    });

