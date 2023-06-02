function verificarNumero() {
    var inNumero = document.getElementById("inNumero");
    var outResposta = document.getElementById("outResposta");

    var numero = Number(inNumero.value);

    if ((numero <= 0 || numero == "") || isNaN(numero)) { 
        alert("Por favor, insira um número positivo válido.")
        inNumero.focus();
        return;
    } else if (numero % 2 !== 0) {
        outResposta.textContent = "O número " + numero + " é ímpar."
    } else {
        outResposta.textContent = "O número " + numero + " é par."
    }
}
var btVerificar = document.getElementById("btVerificar");
btVerificar.addEventListener("click", verificarNumero);