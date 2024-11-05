const aluno = (codigo, nome, notas) => {
    return {
        codigo,
        nome,
        notas
    };
};

// Função para calcular a média ponderada
const calcularMediaPonderada = (notas) => {
    // Ordena as notas em ordem decrescente
    const [maior, segunda, terceira] = notas.sort((a, b) => b - a);

    // Calcula a média ponderada com peso 4 para a maior e 3 para as outras duas
    const media = (maior * 4 + segunda * 3 + terceira * 3) / 10;
    return media;
};

// Função para exibir o resultado dos alunos
const mostrarResultados = (alunos) => {
    alunos.forEach(aluno => {
        const media = calcularMediaPonderada(aluno.notas);
        const status = media >= 5 ? "APROVADO" : "REPROVADO";

        console.log(`Código: ${aluno.codigo}, Nome: ${aluno.nome}`);
        console.log(`Notas: ${aluno.notas.join(", ")}`);
        console.log(`Média Ponderada: ${media.toFixed(2)}`);
        console.log(`Status: ${status}`);
        console.log("-----");
    });
};

// Lista de alunos
const Alunos = [];
Alunos.push(aluno(123, "Joao", [9.5, 5.5, 10.0]));
Alunos.push(aluno(234, "Matia", [10.0, 9.5, 10.0]));
Alunos.push(aluno(345, "Yasuo", [7.0, 3.2, 8.5]));

// Exibe os resultados
mostrarResultados(Alunos);
