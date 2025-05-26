// defineProperty (uma chave) - defineProperties (varias chaves)

function Produto(nome, preco, estoque) {
  Object.defineProperty(this, "estoque", {
    enumerable: true, //Mostrar a chave
    value: estoque, // Valor
    writable: false, //Pode alterar ou nao
    configurable: false, // configuravel
  });

  Object.defineProperties(this, {
    nome: {
      enumerable: true, //Mostrar a chave
      value: nome, // Valor
      writable: true, //Pode alterar ou nao
      configurable: true, // configuravel
    },
    preco: {
      enumerable: true, //Mostrar a chave
      value: preco, // Valor
      writable: true, //Pode alterar ou nao
      configurable: true, // configuravel
    },
  });
}

const p1 = new Produto("Camiseta", 20, 3);
console.log(Object.keys(p1));
console.log(p1);
