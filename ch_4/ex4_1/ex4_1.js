function mostrarTabuada() {
    var inNumero = document.getElementById("inNumero");
    var outTabuada = document.getElementById("outTabuada");

    var numero = Number(inNumero.value);
    
    if (numero == 0 || inNumero.value == "" || isNaN(numero)) {
        alert("Informe um número válido.");
        inNumero.value = "";
        inNumero.focus();
        return;
    }
    
    var resposta = "";

    for (var i = 1; i <= 10; i++) {
        resposta = resposta + numero + " x " + i + " = " + numero * i + "\n";
    }

    outTabuada.textContent = resposta;
}
var btMostrar = document.getElementById("btMostrar");
btMostrar.addEventListener("click", mostrarTabuada);