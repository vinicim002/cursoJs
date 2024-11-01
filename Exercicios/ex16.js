const calculadora = (var1, var2, sinal) => {
    switch(sinal){
        case "+":
            console.log(`Resultado ${var1} + ${var2} = ${var1 + var2}`);
            break;
        case "-":
            console.log(`Resultado ${var1} - ${var2} = ${var1 - var2}`);
            break;
        case "*":
            console.log(`Resultado ${var1} * ${var2} = ${var1 * var2}`);
            break;
        case "/":
            console.log(`Resultado ${var1} / ${var2} = ${var1 / var2}`);
            break;
        default:
            console.log("ERRO - OPERACAO INVALIDA");
    }
}

calculadora(2, 3, "+");