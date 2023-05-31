function calcularMedia() {
    var inNome = document.getElementById("inNome");
    var inNota1 = document.getElementById("inNota1");
    var inNota2 = document.getElementById("inNota2");
    var outMedia = document.getElementById("outMedia");
    var outSituacao = document.getElementById("outSituacao");

    var nome = inNome.value;
    var nota1 = Number(inNota1.value);
    var nota2 = Number(inNota2.value);

    var media = (nota1 + nota2) / 2;

    outMedia.textContent = "Média das notas: " + media.toFixed(1);

    if (media >= 6) {
        outSituacao.textContent = "Parabéns, " + nome + "! Você foi aprovado(a)";
        outSituacao.style.color = "blue";
    } else {
        outSituacao.textContent = "Ops, " + nome + "... Você foi reprovado(a)";
        outSituacao.style.color = "red";
    }
}
var btExibir = document.getElementById("btExibir");
btExibir.addEventListener("click", calcularMedia);