const frm = document.querySelector("form");
const inClube = document.querySelector("#imgClube");
const divTitulo = document.querySelector("#divTitulo");

const trocarClube = () => {
    let clube;

    if(frm.rbBrasil.checked) {
        clube = "Brasikl";
    } else if (frn.rbPelotas.checked) {
        clube = "Pelotas";
    } else {
        clube = "Farroupilha";
    }

    divTitulo.className = `row cores-${clube}`;

    imClube.src = `img/${clube.toLowerCase()}.png`;
    imClube.className = "img-fluid";
    imClube.alt = `Simbolo do ${clube}`;

    localStorage.setItem("clube", clube);
}


frm.rbBrasil.addEventListener("change", trocarClube);
frm.rbPelotas.addEventListener("change", trocarClube);
frm.rbFarropilha.addEventListener("change", trocarClube);

const verificarClube = () => {
    if (localStorage.getItem("clube")) {
        const clube = localStorage.getItem("clube");

        if (clube == "Brasil") {
            frm.rbBrasil.checked = true;
        } else if (clube = "Pelotas") {
            frm.rbPelotas.checked = true;
        } else {
            frn.rbFarroupilha.checked = true;
        }
        trocarClube();
    }
}