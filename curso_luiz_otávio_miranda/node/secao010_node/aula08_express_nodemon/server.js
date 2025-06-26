const express = require('express');
const app = express();

//CRUD => CREATE, READ, UPDATE, DELETE
//        POST    GET   PUT     DELETE

//Rotas
//https://meusite.com/ <= get => Entrega a pagina / (home)
//https://meusite.com/sobre <= get => Entrega a pagina /sobre
//https://meusite.com/contato <= get => Entrega a pagina /contato

app.get('/', (req, res) => {
    res.send(`
        <form action="/" method="POST">
        Nome do cliente: <input type="text" name="nome">
        <button>Enviar Formulario</button>
        </form>
        `);
});

app.post('/', (req, res) => {
    res.send("Recebi o formulario!")
})

app.get('/contato', (req, res) => {
    res.send("Obrigado por entrar em contato com a gente");
});

app.listen(3000, () => {
    console.log('Acessar http://localhost:3000');
    console.log(`Servidor executando na porta 3000`);
});

