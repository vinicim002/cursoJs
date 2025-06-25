let comparaComThis = function (param) {
    console.log(this === param);
}

comparaComThis(global);

const obj = {}
comparaComThis = comparaComThis.bind(obj);
comparaComThis(global);
comparaComThis(obj);

let comparaComThisArrow = param => console.log(this === param);
comparaComThisArrow(global);
comparaComThisArrow(module.exports);

//O this em arrow fuctionn nao varia de forma alguma, nem mesmo usando o bind.
//O this de uma funcao arrow eh um this associado ao contexto ao qual a funcao foi escrita.
comparaComThisArrow = comparaComThisArrow.bind(obj);
comparaComThisArrow(obj);
comparaComThisArrow(module.exports);