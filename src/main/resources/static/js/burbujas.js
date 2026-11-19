let numeroBurbuja = 0;
let puntosNemo = 0;
let puntosDory = 0;

function crearBurbuja() {
    let superficie = document.getElementById("superficie");
    if (superficie.children.length >= 10) {
        return;
    }

    numeroBurbuja++;
    let burbuja = document.createElement("div");
    burbuja.id = "burbuja" + numeroBurbuja;
    burbuja.draggable = true;

    if (Math.random() < 0.5) {
        burbuja.className = "burbuja naranja";
        burbuja.dataset.pez = "nemo";
    } else {
        burbuja.className = "burbuja azul";
        burbuja.dataset.pez = "dory";
    }

    let posicion = Math.floor(Math.random() * (superficie.clientWidth - 40));
    burbuja.style.left = posicion + "px";

    burbuja.addEventListener("dragstart", function (evento) {
        evento.dataTransfer.setData("text/plain", burbuja.id);
    });

    superficie.appendChild(burbuja);
}

function sumarPunto(pez) {
    if (pez == "nemo") {
        puntosNemo++;
        document.getElementById("contadorNemo").innerText = puntosNemo;
    } else {
        puntosDory++;
        document.getElementById("contadorDory").innerText = puntosDory;
    }
}

function prepararZona(idZona, pez) {
    let zona = document.getElementById(idZona);

    zona.addEventListener("dragover", function (evento) {
        evento.preventDefault();
    });

    zona.addEventListener("drop", function (evento) {
        evento.preventDefault();
        let burbuja = document.getElementById(evento.dataTransfer.getData("text/plain"));

        if (burbuja != null && burbuja.dataset.pez == pez) {
            sumarPunto(pez);
            burbuja.remove();
        }
    });
}

function iniciarBurbujas() {
    prepararZona("zonaNemo", "nemo");
    prepararZona("zonaDory", "dory");
    setInterval(crearBurbuja, 2000);
}
