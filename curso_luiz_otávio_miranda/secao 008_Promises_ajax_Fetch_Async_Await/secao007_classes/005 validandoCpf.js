// 705.484.450-52 070.987.720-03
/*
7x  0x 5x 4x 8x 4x 4x 5x 0x
10  9  8  7  6  5  4  3  2
70  0  40 28 48 20 16 15 0 = 237

11 - (237 % 11) = 5 (Primeiro dígito)
Se o número digito for maior que 9, consideramos 0.

7x  0x 5x 4x 8x 4x 4x 5x 0x 5x
11 10  9  8  7  6  5  4  3  2
77  0  45 32 56 24 20 20 0  10 = 284

11 - (284 % 11) = 2 (Primeiro dígito)
Se o número digito for maior que 9, consideramos 0.
*/

class ValidaCpf {
    constructor(cpfEnviado) {
        this.cpfEnviado = cpfEnviado;
    }

    get cpfLimpo() {
        return this.cpfEnviado.replace(/\D+/g, '');
    }

    isSequencia() {
        return this.cpfLimpo.split('').every(char => char === this.cpfLimpo[0]);
    }

    valida() {
        if (typeof this.cpfLimpo === 'undefined') return false;
        if (this.cpfLimpo.length !== 11) return false;
        if (this.isSequencia()) return false;

        const cpfParcial = Array.from(this.cpfLimpo).map(Number).slice(0, 9);
        const digito1 = this.criaDigito(cpfParcial);
        const digito2 = this.criaDigito([...cpfParcial, digito1]);

        const novoCpf = [...cpfParcial, digito1, digito2].join('');
        return novoCpf === this.cpfLimpo;
    }

    criaDigito(cpfParcial) {
        const pesoInicial = cpfParcial.length + 1;
        const soma = cpfParcial.reduce((total, num, indice) => {
            return total + num * (pesoInicial - indice);
        }, 0);

        const digito = 11 - (soma % 11);
        return digito > 9 ? 0 : digito;
    }
}

const cpf1 = new ValidaCpf('705.484.450-52');
console.log(cpf1.valida()); // true

const cpf2 = new ValidaCpf('123.456.789-00');
console.log(cpf2.valida()); // false

