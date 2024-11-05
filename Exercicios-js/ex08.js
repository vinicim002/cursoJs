const progresso = (pontuacoes) => {
    const transformaStringArray = pontuacoes.split(" "); // método split() divide uma String em uma lista ordenada de substrings, coloca essas substrings em um array e retorna o array.
    const ArrayConvertido = transformaStringArray.map(ponto => parseInt(ponto));

    let max = ArrayConvertido[0];
    let min = ArrayConvertido[0];
    let recorde = 0;
    let piorJogo = 0;
    let index = 0;

    for(const ponto of ArrayConvertido){
        //Como o primeiro numero nao deve ser contado como novo recorde, preciso pular ele.
        if(index != 0){
            if(ponto > max){
                max = ponto;
                recorde++;
            }
            if(ponto < min){
                min = ponto;
                piorJogo = index;
            }
        }
        index++;
    }

    return [recorde, piorJogo+1];
};

console.log(progresso("10 20 20 8 25 3 0 30 1"));
