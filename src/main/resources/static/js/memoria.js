let segundos = 0;

function mostrarContadores() {
    document.getElementById("contadorNemo").innerText = localStorage.getItem("contadorNemo") || 0;
    document.getElementById("contadorDory").innerText = sessionStorage.getItem("contadorDory") || 0;
}

function sumarNemo() {
    let total = Number(localStorage.getItem("contadorNemo") || 0) + 1;
    localStorage.setItem("contadorNemo", total);
    mostrarContadores();
}

function sumarDory() {
    let total = Number(sessionStorage.getItem("contadorDory") || 0) + 1;
    sessionStorage.setItem("contadorDory", total);
    mostrarContadores();
}

function cambiarColor() {
    segundos++;
    let tono = 195 - segundos;
    if (tono < 120) {
        tono = 120;
    }

    let celdas = document.querySelectorAll("#tablero td");
    for (let i = 0; i < celdas.length; i++) {
        celdas[i].style.backgroundColor = "hsl(" + tono + ", 55%, 78%)";
    }
}

function iniciarMemoria() {
    mostrarContadores();
    setInterval(cambiarColor, 1000);
}
