const frm = document.querySelector('form');
const respErro = document.querySelector('#outErro');
const respChances = document.querySelector('#outChances');
const respDica = document.querySelector('#outDica');

const erros = [];
const numSorteado = parseInt(Math.random() * 100) + 1;
const chances = 6;

frm.addEventListener('submit', (e) => {
    e.preventDefault();

    const numero = parseInt(frm.inNumero.value); // Convertendo para número

    if (numero === numSorteado) {
        respDica.innerText = `Parabéns! Número Sorteado: ${numSorteado}`;
        frm.btSubmit.disabled = true;
        frm.btNovo.style.display = 'block'; // Mostrando o botão "Novo Jogo"
    } else {
        if (erros.includes(numero)) {
            alert(`Você já apostou o número: ${numero}. Tente outro...`);
        } else {
            erros.push(numero);
            const numErros = erros.length;
            const numChances = chances - numErros;
            respErro.innerText = `${numErros} (${erros.join(", ")})`;
            respChances.innerText = numChances;

            if (numChances == 0) {
                alert("Suas chances acabaram...");
                frm.btSubmit.disabled = true;
                frm.btNovo.style.display = 'block'; // Mostrando o botão "Novo Jogo"
                respDica.innerText = `Game over! Número Sorteado: ${numSorteado}`;
            } else {
                const dica = numero < numSorteado ? "maior" : "menor";
                respDica.innerText = `Dica: Tente um número ${dica} que ${numero}`;
            }
        }
    }

    frm.inNumero.value = "";
    frm.inNumero.focus();

    frm.btNovo.addEventListener('click', (e) => {
        location.reload(); //Recarrega a pagina 
    })
});
