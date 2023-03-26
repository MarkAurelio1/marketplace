
let valorDoProduto = Number(prompt("Digite o valor do produto: "))

if (valorDoProduto >= 20) {
  document.getElementById("resultado").innerHTML = "Aprovado"
}
else {
  document.getElementById("resultado").innerHTML = "Negado"
}