const removerPropiedade = (obj, nomePropiedade) => {
    const copyObj = { ...obj }; // Cópia do objeto

    delete copyObj[nomePropiedade]; // Remove a propriedade desejada
    
    return copyObj; // Retorna a cópia modificada
};

console.log(removerPropiedade({a: 1, b: 2}, "a"));
console.log(removerPropiedade({
    id: 20,
    nome: "caneta",
    descricao: "Nao preenchido"
}, "descricao"));

