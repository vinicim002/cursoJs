const frm = document.querySelector("form");
const dvformContainner = document.querySelector("#form-containner");


frm.addEventListener("submit", (e) => {
    e.preventDefault();

    const idade = Number(frm.inIdade.value);

    const strIdade = idade.toString();

    for (const num of strIdade) {
        const img = document.createElement("img")
        img.src = `img/${num}.jpg`
        img.alt = `Vela de ${num} anos`
        dvformContainner.appendChild(img)
      }
    
      btExibir.disabled = true

});

frm.addEventListener("reset", () => {
    location.reload()
  })