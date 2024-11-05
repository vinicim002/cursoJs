//Triangulo -> Equilatero: 3 lados iguais; Isósceles 2 lados iguais; Escaleno: Todos lados diferentes;

const triangulo = (x, y, z) => {
    if (x === y && y === z) {
        console.log("Triangulo Equilatero");
    } else if (x !== y && x !== z && y !== z) {
        console.log("Triangulo Escaleno");
    } else {
        console.log("Triangulo Isósceles");
    }
}

triangulo(3,3,3);