const removerPropiedade = (obj, nomePropiedade) => {
    delete obj[nomePropiedade]; // Modifica diretamente o objeto original
    return obj; // Retorna o próprio objeto modificado
};

const objeto = { id: 20, nome: "caneta", descricao: "Nao preenchido" };

console.log(removerPropiedade(objeto, "descricao")); // Saída: { id: 20, nome: "caneta" }

// Comparando o objeto original com o resultado da remoção
console.log(Object.is(objeto, removerPropiedade(objeto, "descricao"))); // Saída: true
