function decrescerAte1() {
    var inNumero = document.getElementById("inNumero");
    var outDecrescer = document.getElementById("outDecrescer");

    var numero = Number(inNumero.value);

    if (numero == 0 || numero == "" || isNaN(numero)) {
        alert("Insira um número válido.")
        inNumero.value = "";
        inNumero.focus();
        return;
    }

    var resposta = "Entre " + numero + " e 1: ";

    for (var i = numero; i > 0; i = i - 1) {
        if (i == 1) {
            resposta = resposta + i + ".";
        }
        else {
            resposta = resposta + i + ", ";
        }
    }

    outDecrescer.textContent = resposta;
}
var btDecrescer = document.getElementById("btDecrescer");
btDecrescer.addEventListener("click", decrescerAte1);