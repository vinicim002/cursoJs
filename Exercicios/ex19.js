const pagar = (codItem, qtdDeItem) => {
    let valorAPagar;

    switch(codItem){
        case 100:
            valorAPagar = qtdDeItem * 3.00;
            break;
        case 200:
            valorAPagar = qtdDeItem * 4.00;
            break;
        case 300:
            valorAPagar = qtdDeItem * 5.50;
            break;
        case 400:
            valorAPagar = qtdDeItem * 7.50;
            break;
        case 500:
            valorAPagar = qtdDeItem * 3.50;
            break;
        case 600:
            valorAPagar = qtdDeItem * 2.80;
            break;
        default:
            console.log("Produto não existe");
            return;
    }

    console.log(`Valor a pagar: R$ ${valorAPagar.toFixed(2).replace(".",",")}`);
};

pagar(100, 2);
