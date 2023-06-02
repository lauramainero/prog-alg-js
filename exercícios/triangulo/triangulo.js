function verificarTriangulo() {
    var inLadoA = document.getElementById("inLadoA");
    var inLadoB = document.getElementById("inLadoB");
    var inLadoC = document.getElementById("inLadoC");
    var outVerificar = document.getElementById("outVerificar");
    var outTipo = document.getElementById("outTipo");
    
    var ladoA = Number(inLadoA.value);
    var ladoB = Number(inLadoB.value);
    var ladoC = Number(inLadoC.value);

    if (inLadoA.value <= 0 || inLadoA.value == "" || isNaN(inLadoA.value)) {
        alert("Insira medidas de lado válidas.")
        inLadoA.value = "";
        inLadoA.focus();
        return;
    }
    if (inLadoB.value <= 0 || inLadoB.value == "" || isNaN(inLadoB.value)) {
        alert("Insira medidas de lado válidas.")
        inLadoB.value = "";
        inLadoB.focus();
        return;
    }
    if (inLadoC.value <= 0 || inLadoC.value == "" || isNaN(inLadoC.value)) {
        alert("Insira medidas de lado válidas.")
        inLadoC.value = "";
        inLadoC.focus();
        return;
    }

    if (ladoA > ladoB + ladoC || ladoB > ladoA + ladoC || ladoC > ladoA + ladoB ) {
        outVerificar.textContent = "Não é possível formar um triângulo. Escolha novamente as medidas dos lados."
        inLadoA.value = "";
        inLadoB.value = "";
        inLadoC.value = "";
        outTipo.textContent = "";
        return;
    } else if ((ladoA == ladoB) && (ladoB == ladoC)){
        outVerificar.textContent = "Os lados podem formar um triângulo.";
        outTipo.textContent = "Tipo: Equilátero";
    } else if (ladoA == ladoB || ladoB == ladoA || ladoC == ladoA) {
        outVerificar.textContent = "Os lados podem formar um triângulo."
        outTipo.textContent = "Tipo: Isósceles"
    } else {
        outVerificar.textContent = "Os lados podem formar um triângulo."
        outTipo.textContent = "Tipo: Escaleno"
    }
}
var btVerificar = document.getElementById("btVerificar");
btVerificar.addEventListener("click", verificarTriangulo);