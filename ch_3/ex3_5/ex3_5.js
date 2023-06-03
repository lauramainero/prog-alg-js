function calcularRaiz() {
    var inNumero = document.getElementById("inNumero");
    var outRaiz = document.getElementById("outRaiz");

    var numero = Number(inNumero.value);

    if (numero == 0 || isNaN(numero)) {
        alert("Informe um número válido.")
        inNumero.focus();
        return;
    }

    var raiz = Math.sqrt(numero)

    if (raiz == Math.floor(raiz)) { 
        outRaiz.textContent = "Raiz: " + raiz;
    } else {
        outRaiz.textContent = "Não há raíz exata para " + numero;
    }

}
var btCalcular = document.getElementById("btCalcular");
btCalcular.addEventListener("click", calcularRaiz);