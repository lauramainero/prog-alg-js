function calcularPeso() {
    var inNome = document.getElementById("inNome");
    var rbMasc = document.getElementById("rbMasc");
    var rbFem = document.getElementById("rbFem");
    var inAltura = document.getElementById("inAltura");
    var outPesoIdeal = document.getElementById("outPesoIdeal");

    var nome = inNome.value;
    var masc = rbMasc.checked;
    var fem = rbFem.checked;
    var altura = Number(inAltura.value);

    if (nome == "" || (masc == false && fem == false)) {
        alert("Por favor, informe o nome e selecione o sexo.");
        inNome.focus();
        return;
    }
    if (altura == 0 || isNaN(altura)) {
        alert("Por favor, informe a altura corretamente.");
        inAltura.focus();
        return;
    }
    if (masc) {
        var peso = 22 * Math.pow(altura, 2)
    }
    else {
        var peso = 21 * Math.pow(altura, 2)
    }

    outPesoIdeal.textContent = nome + ": seu peso ideal é " + peso.toFixed(3) + " kg.";
}
var btCalcular = document.getElementById("btCalcular");
btCalcular.addEventListener("click", calcularPeso);

function limparCampos() {
document.getElementById("inNome").value = "";
document.getElementById("rbMasc").checked = false;
document.getElementById("rbFem").checked = false;
document.getElementById("inAltura").value = "";
document.getElementById("outResposta").textContent = "";

document.getElementById("inNome").focus();
}
var btLimpar = document.getElementById("btLimpar");
btLimpar.addEventListener("click", limparCampos);