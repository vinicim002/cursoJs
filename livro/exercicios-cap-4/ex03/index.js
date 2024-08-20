const bairro = prompt("Bairro de Entrega:");
let taxaEntrega;

switch(bairro){
    case "Centro":
        taxaEntrega = 5.60
        break
    case "Flamengo":
    case "Botafogo":
        taxaEntrega = 7.00
        break
    case "Laranjeiras":
        taxaEntrega = 10.00
        break
    default:
        taxaEntrega = 12.00
}

alert(`Taxa R$: ${taxaEntrega.toFixed(2)}`);