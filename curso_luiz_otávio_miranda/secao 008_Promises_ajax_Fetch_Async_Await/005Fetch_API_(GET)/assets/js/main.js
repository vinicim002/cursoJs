// Quando clicamos em algo na página...
document.addEventListener("click", (e) => {
  const el = e.target; // Pegamos o que clicamos
  const tag = el.tagName.toLowerCase(); // Descobrimos se é um link

  if (tag === "a") {
    // Se clicamos em um link...
    e.preventDefault(); // Impedimos que ele vá para outra página
    carregaPagina(el); // E chamamos uma função para carregar o conteúdo daquele link
  }
});

// Esta função carrega a página do link sem sair da página atual
async function carregaPagina(el) {
  try {
    const href = el.getAttribute("href");
    const response = await fetch(href);

    if (response.status !== 200) throw new Error("ERRO 404!");

    const html = await response.text();
    carregaResultado(html);
  } catch (e) {
    console.log(e);
  }
}

// Aqui pegamos um lugar da tela com a classe 'resultado' e colocamos o conteúdo lá
function carregaResultado(response) {
  const resultado = document.querySelector(".resultado"); // Procuramos a caixinha onde vamos mostrar
  resultado.innerHTML = response; // Colocamos o conteúdo lá dentro
}
