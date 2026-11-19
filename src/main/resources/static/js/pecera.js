function crearPecera(x) {
    if (x < 1 || x > 20) {
        alert("Ingresa un número entre 1 y 20");
        return;
    }

    let pecera = document.getElementById("pecera");
    pecera.innerHTML = "";

    let tabla = document.createElement("table");
    tabla.id = "tablero";

    for (let i = 0; i < x; i++) {
        let fila = document.createElement("tr");
        for (let j = 0; j < x; j++) {
            let celda = document.createElement("td");
            fila.appendChild(celda);
        }
        tabla.appendChild(fila);
    }

    pecera.appendChild(tabla);
}
