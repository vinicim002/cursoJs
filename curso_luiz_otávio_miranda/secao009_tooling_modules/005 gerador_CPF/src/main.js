//Importo o geraCPF
import GeraCPF from './modules/geradorCPF';

import './assets/css/style.css';

(function() {
    //Chamndo o meu objeto GeraCPF
    const gera = new GeraCPF();
    //Selecionando o elemento com o qual quero trabalhar do html
    const cpfGerado = document.querySelector('.cpf-gerado');
    //Gerando o cpf na tela
    cpfGerado.innerHTML = gera.geraNovoCPF();
})();