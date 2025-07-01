// const HomeModel = require('../models/HomeModel');

// HomeModel.create({
//   titulo: 'Outra coisa qualquer',
//   descricao: 'Outra descricao'
// })
//   .then(dados => console.log(dados))
//   .catch(e => console.log(e));

// HomeModel.find()
//   .then(dados => console.log(dados))
//   .catch(e => console.log(e));

exports.paginaInicial = (req, res) => {
  // console.log(req.flash('error'), req.flash('success'), req.flash('info'));
  res.render('index', {
    titulo: 'Este sera o titulo da pagina',
    numeros: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  });
  return;
};

exports.trataPost = (req, res) => {
    res.send(req.body);
    return;
}