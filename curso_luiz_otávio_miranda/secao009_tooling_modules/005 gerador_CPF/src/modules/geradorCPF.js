//Importando a classe ValidaCPF
import ValidaCPF from './ValidaCPF';

//Exportando a class GeraCPF para que ela possa ser usada em outros lugares
export default class GeraCPF {
    //Criando um metodo que gera 9 nemuros aleatorios entre 100000000 e 999999999
    rand(min = 100000000, max = 999999999) {
        return String(Math.floor(Math.random() * (max - min) + min));
    }

    //Criando um metodo para formartar o meu cpf ja que sem essa formatacao ele fica = "91322345611"
    formatado(cpf) {
        return (
            cpf.slice(0, 3) + '.' +
            cpf.slice(3, 6) + '.' +
            cpf.slice(6, 9) + '-' +
            cpf.slice(9, 11)
        );
    }

    //Metodo que gera o cpf completo
    geraNovoCPF() {
        //Chamndo os numeros gerando no rand
        const cpfSemDigito = this.rand();
        //Chamo o ValidaCPF onde chamo o metdo geraDigito que eh resposanvel por gerar os numeros que verifica se o cpf eh valido
        const digito1 = ValidaCPF.geraDigito(cpfSemDigito);
        //Chamo o ValidaCPF novamnete onde chamo o metdo geraDigito que eh resposanvel por gerar os numeros que verifica se o cpf eh valido
        const digito2 = ValidaCPF.geraDigito(cpfSemDigito + digito1);
        //Concateno todos os resutlados ja que eles estao em formato de string
        const novoCpf = cpfSemDigito + digito1 + digito2;
        //Chamo o meu metodo formatado e jogo o cpf concatenado para que ele siga a formatacao adequada 
        return this.formatado(novoCpf);
    }
}