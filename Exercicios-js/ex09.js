const aluno = (nome, nota) => {
    return {
        nome,
        nota 
    };
};

const Alunos = [];
Alunos.push(aluno("João", 84));
Alunos.push(aluno("Maria", 30));

const arredondamentoNota = (nota) => {
    if(nota < 38) return nota;

    const proximoMultiploDe5 = Math.ceil(nota / 5) * 5;
    const diferenca = proximoMultiploDe5 - nota;

    if(diferenca < 3) return proximoMultiploDe5;

    return nota;
}

const situacaoDoAluno = (aluno) => {
    const notaDefinitiva = arredondamentoNota(aluno.nota);
    let situacao;

    situacao = notaDefinitiva < 40 ? "Reprovado" : "Aprovado"

    return `${aluno.nome}: Nota Original ${aluno.nota}, nota arredondada ${notaDefinitiva}\nSituacao: ${situacao}`;
}

Alunos.forEach(aluno => {
    console.log(situacaoDoAluno(aluno));
});