const novoSalario = (plano, salarioAtual) => {
    let novoSalario;
    switch(plano){
        case "A":
           novoSalario = salarioAtual + (salarioAtual * (10/100));
           console.log(`Novo Salario = ${novoSalario}`);
           break;
        case "B":
            novoSalario = salarioAtual + (salarioAtual * (15/100));
            console.log(`Novo Salario = ${novoSalario}`);
            break;
        case "C":
            novoSalario = salarioAtual + (salarioAtual * (20/100));
            console.log(`Novo Salario = ${novoSalario}`);
            break;
        default:
            console.log("Plano é inválido");
    }
}

novoSalario("C", 1200);