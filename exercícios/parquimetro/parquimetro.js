function parquimetro() {
    var inValor = document.getElementById("inValor");
    var outTempo = document.getElementById("outTempo");
    var outTroco = document.getElementById("outTroco");

    var valor = Number(inValor.value).toFixed(2);
    var troco30Min = (valor - 1).toFixed(2);
    var troco60Min = (valor - 1.75).toFixed(2);
    var troco120Min = (valor - 3).toFixed(2);
    
    if (inValor.value <= 0 || inValor.value == "" || isNaN(valor)) {
        alert("Insira um valor válido.")
        inValor.value = "";
        inValor.focus();
        return;
    }

    if (valor < 1) {
        outTempo.textContent = "Valor insuficiente.";
        inValor.value = "";
        inValor.focus();
        return;
    } else if (valor >= 1 && valor < 1.75) {
        outTempo.textContent = "Tempo: 30 min";
        outTroco.textContent = "Troco R$: " + (troco30Min); 
    } else if (valor >= 1.75 && valor < 3) {
        outTempo.textContent = "Tempo: 60 min";
        outTroco.textContent = "Troco R$: " + troco60Min; 
    } else {
        outTempo.textContent = "Tempo: 120 min";
        outTroco.textContent = "Troco R$: " + troco120Min;
    }

}
var btConfirmar = document.getElementById("btConfirmar");
btConfirmar.addEventListener("click", parquimetro);