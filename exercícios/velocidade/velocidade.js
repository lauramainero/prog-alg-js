function verificarVelocidade() {
    var inPermitida = document.getElementById("inPermitida");
    var inCondutor = document.getElementById("inCondutor");
    var outSituacao = document.getElementById("outSituacao");

    var permitida = Number(inPermitida.value);
    var condutor = Number(inCondutor.value); 
    var vintePorcento = (0.2 * permitida) + permitida;

    if (permitida <= 0 || isNaN(permitida) || permitida == "") {
        alert("Insira um valor válido para a velocidade permitida.")
        inPermitida.value = "";
        inPermitida.focus();
        return;
    }
    if (condutor <= 0 || isNaN(condutor) || condutor == "") {
        alert("Insira um valor válido para a velocidade do condutor.")
        inCondutor.value = "";
        inCondutor.focus();
        return;
    }
    if (condutor <= permitida) {
        outSituacao.textContent = "Situação: Sem multa."
    } else if (condutor >= vintePorcento) {
        outSituacao.textContent = "Situação: Multa grave."
    } else {
        outSituacao.textContent = "Situação: Multa leve."
    }
}
var btVerificar = document.getElementById("btVerificar");
btVerificar.addEventListener("click", verificarVelocidade);