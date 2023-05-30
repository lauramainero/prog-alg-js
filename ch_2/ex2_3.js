function mostrarPromocao() {
    var inVeiculo = document.getElementById("inVeiculo");
    var inPreco = document.getElementById("inPreco");
    var outPromocao = document.getElementById("outPromocao");
    var outEntrada = document.getElementById("outEntrada");
    var outParcelas = document.getElementById("outParcelas");

    var veiculo = inVeiculo.value;
    var preco = Number(inPreco.value);
    var entrada = preco * 0.5;
    var parcela = entrada / 12

    outPromocao.textContent = "Promoção: " + veiculo;
    outEntrada.textContent = "Entrada de R$: " + entrada.toFixed(2);
    outParcelas.textContent = "+12x de R$: " + parcela.toFixed(2);
}
var btVerPromocao = document.getElementById("btVerPromocao");
btVerPromocao.addEventListener("click", mostrarPromocao)