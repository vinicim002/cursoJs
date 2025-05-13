const main = document.querySelector(".main");
const containerDireita = document.querySelector(".container-direita");
const btnSubmit = document.querySelector(".btn-add");
const btnMostrarTabela = document.querySelector(".btn-montar-tabela");
const btnNovosClubes = document.querySelector(".btn-novos-clubes");

btnSubmit.addEventListener("click", (e) => {
  e.preventDefault();

  const input = document.querySelector("#inClube");
  const nomeClube = input.value.trim();

  if (nomeClube === "") return;

  mostrarClubes(nomeClube);

  input.value = "";
  input.focus();
});

// Adicionar os clubes na página
const mostrarClubes = (clube) => {
  // Verifica se já existe a div.clubes
  let divClubes = document.querySelector(".clubes");

  // Se não existir, cria
  if (!divClubes) {
    divClubes = document.createElement("div");
    divClubes.classList.add("clubes");

    containerDireita.appendChild(divClubes);
  }

  // Cria o novo <h5> com o nome do clube
  const h5 = document.createElement("h5");
  h5.textContent = clube;

  // Adiciona o <h5> dentro da div.clubes
  divClubes.appendChild(h5);
};

btnMostrarTabela.addEventListener("click", () => {
  const clubes = document.querySelectorAll("h5");

  //Verificando se o numero de tags e par ou impar se for impar lanca um alert
  if (clubes.length % 2 !== 0 || clubes.length === 0) {
    alert("Erro na criacao da tabela!");
    return;
  }

  let divTabela = document.querySelector(".tabela");
  let tbody;

  // Se a tabela não existir, cria uma nova
  if (!divTabela) {
    divTabela = document.createElement("div");
    divTabela.classList.add("tabela");
    containerDireita.appendChild(divTabela);

    const tabela = document.createElement("table");
    divTabela.appendChild(tabela);

    const caption = document.createElement("caption");
    caption.textContent = "Tabela de Jogos";
    tabela.appendChild(caption);

    tbody = document.createElement("tbody");
    tabela.appendChild(tbody);
  } else {
    // Se já existir, pega o tbody existente
    tbody = divTabela.querySelector("tbody");
    tbody.innerHTML = ""; // limpa conteúdo anterior (opcional)
  }

  // Percorre os clubes dois a dois e cria as linhas da tabela
  for (let i = 0; i < clubes.length; i += 2) {
    const tr = document.createElement("tr");
    const td1 = document.createElement("td");
    const td2 = document.createElement("td");

    td1.textContent = clubes[i]?.textContent || "";
    td2.textContent = clubes[i + 1]?.textContent || "";

    tr.appendChild(td1);
    tr.appendChild(td2);
    tbody.appendChild(tr);
  }

  btnSubmit.disabled = true;
  btnMostrarTabela.disabled = true;
});

btnNovosClubes.addEventListener('click', () => {
  // Remove a div com os clubes
  const divClubes = document.querySelector('.clubes');
  if (divClubes) {
    divClubes.remove();
  }

  // Remove a tabela se existir
  const divTabela = document.querySelector('.tabela');
  if (divTabela) {
    divTabela.remove();
  }

  // Reativa os botões
  btnSubmit.disabled = false;
  btnMostrarTabela.disabled = false;

  // Limpa o campo de input
  const input = document.querySelector('#inClube');
  input.value = '';
  input.focus();
});
