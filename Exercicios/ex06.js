const inverso = (valor) => {
    if(typeof valor === "boolean" && valor === true){
        return false;
    }else if(typeof valor === "boolean" && valor === false){
        return true;
    }else if(typeof valor === "number" && valor > 0) {
        return "-"+valor;
    }else if(typeof valor === "number" && valor < 0) {
        return Math.abs(valor);
    } else {
        return `booleano ou numeros esperado, mas o parametro e do tipo ${typeof valor}`;
    }
}
    

console.log(inverso(true));
console.log(inverso("6"));
console.log(inverso(-2000));
console.log(inverso("Programacao"));