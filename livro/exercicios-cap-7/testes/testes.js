// const cidade = "Pelotas";

// console.log(cidade.charAt(0));
// console.log(cidade.charAt(1));
// console.log(cidade.charAt(2));
// console.log(cidade.charAt(3));
// console.log(cidade.charAt(4));


// const anuncio = prompt("Anuncio");
// let numPalavras = 0;
// const tam = anuncio.length;
// for(let i = 0; i < tam; i++){
//     if(anuncio.charAt(i) == " "){
//         numPalavras++;
//     }
// };

// alert(`Anuncio: ${anuncio}\nNum palavras: ${numPalavras + 1}`);


// let numPalavras = 0;
// for(const letra of anuncio){
//     if(letra == " "){
//         numPalavras++;
//     };
// };


// ======================================================================

// const palavra = prompt("Palavra: ");
// const tam = palavra.length

// let inverso = palavra.charAt(tam - 1).toUpperCase();

// for(let i = tam - 2; i >= 0; i--){
//     inverso += palavra.charAt(i).toLowerCase();
// }

// alert(`Palavra: ${palavra}\nInvertida: ${inverso}`);

// ======================================================================

// const palavra = "saladas";
// const copia1 = palavra.substr(2);
// console.log(copia1);
// const copia2 = palavra.substr(2, 4);
// console.log(copia2);
// const copia3 = palavra.substr(0, palavra.length-1);
// console.log(copia3);
// const copia4 = palavra.substr(-2);
// console.log(copia4);
// const ultima1 = palavra.substr(-1);
// console.log(ultima1);
// const ultima2 = palavra.substr(palavra.length-1);
// console.log(ultima2);

// ======================================================================

// const palavra = "saladas";
// const copia1 = palavra.indexOf("a");
// console.log(copia1);
// const copia2 = palavra.lastIndexOf("a");
// console.log(copia2);
// const copia3 = palavra.indexOf("sal");
// console.log(copia3);
// const copia4 = palavra.indexOf("e");
// console.log(copia4);
// const copia5 = palavra.includes("d");
// console.log(copia5);

// ======================================================================

// const sabores = "calabresa, 4 queijos, atum, frango";
// const partes = sabores.split(",");

// console.log(partes[0]);
// console.log(partes[1]);
// console.log(partes[2]);
// console.log(partes[3]);

// ======================================================================

// const hoje = new Date();
// const amanha = new Date();
// const dia = amanha.getDate();
// amanha.setDate(dia + 1);
// console.log(`Hoje: ${hoje}\nAmanha: ${amanha}`);

// ======================================================================

const anoAtual = new Date().getFullYear();
const idade = 10;
const anoNasc = anoAtual - idade;
console.log(`Ah... Entao voce naceu em ${anoNasc}`);


