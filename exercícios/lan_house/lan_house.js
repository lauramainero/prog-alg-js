function calcularValor() {
    var inValor = document.getElementById("inValor");
    var inTempo = document.getElementById("inTempo");
    var outValor = document.getElementById("outValor");

    var valor = Number(inValor.value);
    var tempo = Number(inTempo.value);
    var tempoTotal = Math.ceil(tempo / 15);
    var valorTotal = (valor * tempoTotal).toFixed(2);

    outValor.textContent = "Valor a pagar R$: " + valorTotal;
}
var btCalcular = document.getElementById("btCalcular");
btCalcular.addEventListener("click", calcularValor);