class ControleRemoto {
    constructor(tv) {
        this.tv = tv;
        this.volume = 0;
    }
    
    //Metodo de instancia
    aumentarVolume() {
        this.volume += 2;
    }

    diminuirVolmue() {
        this.volume -= 2;
    }

    //Metodo de estatico
    static trocaPilha () {
        console.log('Ok, vou trocar.');
    }
}

const c1 = new ControleRemoto('LG');
c1.aumentarVolume();
c1.aumentarVolume();
c1.aumentarVolume();
// c1.trocaPilha();
console.log(c1);
ControleRemoto.trocaPilha();
