const promessaDoBolo = new Promise((resolve, reject) => {
    const temIngredientes = true;
    if (temIngredientes) {
        resolve("Bolo pronto!");
    } else {
        reject("Não deu pra fazer o bolo.");
    }
});

promessaDoBolo.then(mensagem => console.log(mensagem)) // "Bolo pronto!"
    .catch(erro => console.log(erro))// "Não deu pra fazer o bolo."
