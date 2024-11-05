const crianca = (altura, taxa) => {
    return { altura, taxa };
};

const Criancas = [];
Criancas.push(crianca(120, 5));
Criancas.push(crianca(130, 3));

const calcularUltrapassagem = (criancas) => {
    let [crianca1, crianca2] = criancas;

    // Identifica qual é a menor e qual é a maior
    let menor = crianca1.altura < crianca2.altura ? crianca1 : crianca2;
    let maior = crianca1.altura < crianca2.altura ? crianca2 : crianca1;

    // Variáveis para armazenar as alturas atuais e os anos
    let anos = 0;

    // Loop para simular o crescimento anual
    while (menor.altura <= maior.altura) {
        menor.altura += menor.taxa;
        maior.altura += maior.taxa;
        anos++;

        // Evita loop infinito, caso nunca ultrapasse
        if (anos > 100) {
            return "A criança menor não ultrapassará a maior em altura.";
        }
    }

    return `A criança menor ultrapassará a maior em ${anos} anos.`;
};

// Executa o cálculo
console.log(calcularUltrapassagem(Criancas));
