const dias = Number(prompt(`Qunatidade de dias:`));
const horas = Number(prompt(`Qunatidade de horas:`));
const duracao = (dias * 24) + horas;

alert(`Informacoes de viagem:\nNumero de dias: ${dias}\nNumero de horas: ${horas}\nTotal de horas: ${duracao}`);
