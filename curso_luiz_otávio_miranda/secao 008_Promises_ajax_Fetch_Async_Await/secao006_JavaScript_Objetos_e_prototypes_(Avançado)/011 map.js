const pessoas = [
    {id: 3, nome: 'vinicius'},
    {id: 2, nome: 'Alice'},
    {id: 1, nome: 'Felipy'},
];

// const novasPessoas = {};

// for (const pessoa of pessoas) {
//     const { id } = pessoa;
//     novasPessoas[id] = { ...pessoa };
// }

const novasPessoas = new Map();
for (const pessoa of pessoas) {
    const { id } = pessoa;
    novasPessoas.set(id, { ...pessoa });
}

for (const pessoa of novasPessoas) {
    //[identifier, {id, nome}]
    // console.log(identifier, id, nome);
    console.log(pessoa);
}



