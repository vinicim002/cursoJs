class Dev {
    constructor(nome, idade, principalLinguagem, tipoDeDev) {
        this.nome = nome;
        this.idade = idade;
        this.principalLinguagem = principalLinguagem;
        this.tipoDeDev = tipoDeDev;
    }

    saudacao() {
        console.log(`Oi! Sou dev ${this.tipoDeDev}, trabalho com ${this.principalLinguagem} e me chamo ${this.nome} \n\n`);
    }
}

class FrontendDev extends Dev{
    constructor(nome, idade, principalLinguagem, tipoDeDev, framework) {
        super(nome, idade, principalLinguagem, tipoDeDev);
        this.framework = framework;
    }
}

class BackendDev extends Dev {
    constructor(nome, idade, principalLinguagem, tipoDeDev, bancoDeDados) {
        super(nome, idade, principalLinguagem, tipoDeDev);
        this.bancoDeDados = bancoDeDados;
    }
}

const frontend1 = new FrontendDev("Pedro", "35", "JavaScript", "Frontend", "React");
const backend1 = new BackendDev("Joao", "25", "Java", "Backend", "JDB");

console.log(frontend1);
frontend1.saudacao();

console.log(backend1);
backend1.saudacao();