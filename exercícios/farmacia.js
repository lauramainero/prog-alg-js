function calcularPromocao () {
    var inMedicamento = document.getElementById("inMedicamento");
    var inPreco = document.getElementById("inPreco");
    var outPromocao = document.getElementById("outPromocao");
    var outPrecoPromocao = document.getElementById("outPrecoPromocao");

    var medicamento = inMedicamento.value;
    var preco = Number(Math.floor(inPreco.value) * 2);

    outPromocao.textContent = "Promoção de " + medicamento;
    outPrecoPromocao.textContent = "Leve 2 por apenas R$: " + preco
}
var btCalcular = document.getElementById("btCalcular");
btCalcular.addEventListener("click", calcularPromocao);