function calcularValor() {
    var inBuffet = document.getElementById("inBuffet");
    var inConsumo = document.getElementById("inConsumo");
    var outValor = document.getElementById("outValor");
    
    var buffet = Number(inBuffet.value);
    var consumo = Number(inConsumo.value);

    var valor = (buffet / 1000) * consumo;

    outValor.textContent = "Valor a pagar R$: " + valor.toFixed(2);
}
var btCalcular = document.getElementById("btCalcular");
btCalcular.addEventListener("click", calcularValor);