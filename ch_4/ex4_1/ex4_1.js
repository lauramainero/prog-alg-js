function mostrarTabuada() {
    var inNumero = document.getElementById("inNumero");
    var outTabuada = document.getElementById("outTabuada");

    var numero = Number(inNumero.value);
    var resposta = "";

    if (numero == 0 || inNumero.value == "" || isNaN(inNumero)) {
        alert("Informe um número válido.")
        inNumero.value = "";
        inNumero.focus();
        return;
    }
    
    for (var i = 1; i <= 10; i++) {
        resposta = resposta + numero + "x" + i + " = " + numero * i + "\n"; 
    }
}
var btMostrar = document.getElementById(btMostrar);
btMostrar.addEventListener("click", mostrarTabuada);