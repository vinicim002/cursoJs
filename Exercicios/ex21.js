const planoDeSaude = (idade) => {

    let valorPlanoSaude;

    if(idade < 10){
        valorPlanoSaude = 100 + 80;
    } else if (idade >= 10 && idade <= 30) {
        valorPlanoSaude = 100 + 50;
    } else if (idade > 30 && idade <= 60){
        valorPlanoSaude = 100 + 95;
    } else {
        valorPlanoSaude = 100 + 130;
    };

    return valorPlanoSaude;
}

console.log(`Valor do plano: R$ ${planoDeSaude(102).toFixed(2).replace(".",",")}`);