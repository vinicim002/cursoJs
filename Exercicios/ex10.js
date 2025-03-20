const receberPrimeiroEUltimoElemento = (array) => {
   const primeiro = array[0];
   const ultimo = array[array.length -1];

   return [primeiro, ultimo];
}

console.log(receberPrimeiroEUltimoElemento([7,14,"Ola"]));
console.log(receberPrimeiroEUltimoElemento([-100,"Aplicativo",16]));