function rand(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAI(msg, tempo) {
    return new Promise((resolve, reject) => {
        if(typeof msg !== 'string') reject('BAD VALUE');
        setTimeout(() => {
            resolve(msg);
        }, tempo);
    });
}

esperaAI('Frase 1', rand(1, 3))
    .then(resposta => {
        console.log(resposta);
        return esperaAI(222222, rand(1, 3));
    })
    .then(resposta => {
        console.log(resposta);
        return esperaAI('Frase 3', rand(1, 3));
    })
    .then(resposta => {
        console.log(resposta);
    })
    .catch(e => {
        console.log('ERRO:', e);
    });