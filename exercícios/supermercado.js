function calcularPromocao() {
    var inProduto = document.getElementById("inProduto");
    var inPreco = document.getElementById("inPreco");
    var outProduto = document.getElementById("outProduto");
    var outPreco = document.getElementById("outPreco");

    var produto = inProduto.value;
    var preco = inPreco.value;
    var desconto = preco / 2
    var precoPromocional = (preco * 2) + desconto;

    outProduto.textContent = produto + " - Promoção: leve 3 por R$: " + precoPromocional.toFixed(2);
    outPreco.textContent = "O 3º produto custa apenas R$: " + desconto;
}
var btCalcular = document.getElementById("btCalcular");
btCalcular.addEventListener("click", calcularPromocao);