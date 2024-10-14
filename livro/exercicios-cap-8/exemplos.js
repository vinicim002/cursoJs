// const  mostrarHora = () => {
//     const data = new Date();
//     const hora = data.getHours();
//     const min = data.getMinutes();
//     const seg = data.getSeconds();
//     console.log(`Atencao para o horario: ${hora}:${min}:${seg}`); 
// }

// setInterval(mostrarHora, 5000);


//ULTILIZANDO FUNCTION ANONIMAS

setInterval(() => {
    const data = new Date();
    const hora = data.getHours();
    const min = data.getMinutes();
    const seg = data.getSeconds();
    console.log(`Atencao para o horario: ${hora}:${min}:${seg}`); 
},5000);