const pessoa = {
    saudacao: 'Bom dia!',
    falar(){
        console.log(this.saudacao)
    }
};

pessoa.falar();
const falar = pessoa.falar;
falar(); //Conflito entre paradigma: Funcional e OO

const falarDePessoa = pessoa.falar.bind(pessoa); //Bind eh um metodo que eh responsavel por amarrar um determinado objeto
                                                 //pra ele ser o dono da execucao daqauele metodo sempre que metodo for chamado 
falarDePessoa();