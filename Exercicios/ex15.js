let carro = "hatch";

switch(carro){
    case "hatch":
        console.log("Compra efetuada com sucesso");
        break;
    case "sedans":
    case "motocicletas":
    case "caminhonetes":
        console.log("Tem certeza que não prefere este modelo? (hatch)");
        break;
    default:
        console.log("Não trabalhamos com este tipo de automóvel aqui");
}