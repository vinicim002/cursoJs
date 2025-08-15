const Login = require("../models/LoginModel");

exports.index = (req, res) => {
    res.status(200).render("login");
}

exports.register = async (req, res) => {
    const login = new Login(req.body); // cria o model com dados do form
    await login.register(); // executa validação + cadastro no banco

    if (login.errors.length > 0) {
        req.flash('erros', login.errors); // guarda mensagens na sessão
        req.session.save(function () {    // salva a sessão antes de redirecionar
            return res.redirect('back');  // volta para a página anterior
        });
        return;
    }

    res.status(200).send(login.errors); // aqui o array estará vazio se não houve erro
};
