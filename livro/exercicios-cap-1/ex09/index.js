const nota1 = Number(prompt('Digite a primeira nota:'));
const nota2 = Number(prompt('Digite a segunda nota:'));
const media = (nota1 + nota2) / 2;

alert(`Primeira nota: ${nota1.toFixed(1)}\nSegunda nota: ${nota2.toFixed(1)}\nNedia: ${media.toFixed(1)}`);