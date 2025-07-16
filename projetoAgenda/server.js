require('dotenv').config();

const express = require("express");
const app = express();
const mongoose = require("mongoose");

// Conecta ao banco de dados MongoDB
mongoose.connect(process.env.CONNECTIONSTRING)
  .then(() => {
    app.emit("pronto"); // Emite um evento quando a conexão com o DB estiver pronta
  })
  .catch((e) => console.log(e));

const session = require('express-session');
// Importa o connect-mongo. Ele retorna um objeto com o método .create()
const MongoStore = require('connect-mongo');
const flash = require('connect-flash');

const routes = require("./routes");
const path = require("path");
const helmet = require('helmet');
const csrf = require('csurf');
const { middlewareGlobal, checkCsrfError, csrfMiddleware } = require(`./src/middlewares/middleware`);

app.use(helmet());
// Configura o Express para lidar com dados de formulário (URL-encoded)
app.use(express.urlencoded({ extended: true }));

// Configura o Express para servir arquivos estáticos da pasta 'public'
app.use(express.static(path.resolve(__dirname, "public")));

// Configura o armazenamento de sessão para usar o MongoDB
// Usamos MongoStore.create() e passamos a URL de conexão do MongoDB
const sessionOptions = session({
  secret: 'asdsadasdfefwfewfasd asfdasfdeef asfdasf afdd asfee afsa fa()', // Chave secreta para assinar o cookie de sessão
  store: MongoStore.create({ mongoUrl: process.env.CONNECTIONSTRING }), // Usa o método create() e passa a string de conexão
  resave: false, // Não salva a sessão se não houver modificações
  saveUninitialized: false, // Não salva sessões não inicializadas
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 7, // Tempo de vida do cookie (7 dias)
    httpOnly: true // O cookie só pode ser acessado pelo servidor (não por JavaScript no navegador)
  }
});

// Aplica as opções de sessão ao Express
app.use(sessionOptions);
// Habilita o uso de mensagens flash (mensagens temporárias)
app.use(flash());

// Define o diretório onde os arquivos de visualização (views) estão localizados
app.set("views", path.resolve(__dirname, "src", "views"));
// Define o motor de template a ser usado (EJS neste caso)
app.set("view engine", "ejs");

app.use(csrf());
// Aplica os nossos próprios middlewares globais
app.use(middlewareGlobal);
app.use(checkCsrfError);
app.use(csrfMiddleware);
// Aplica as rotas da aplicação
app.use(routes);

// Quando a conexão com o banco de dados estiver pronta, inicia o servidor
app.on("pronto", () => {
  app.listen(3000, () => {
    console.log("Acessar http://localhost:3000");
    console.log(`Servidor executando na porta 3000`);
  });
});
