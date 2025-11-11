// function fnConverterValor() {
//     let valorDigitado = 0, total = 0
//     valorDigitado = document.getElementById("valor").value
//     total = valorDigitado * 5.29
//     document.getElementById("valorConvertido").innerText = total}

//colocar o valor no formato R$ XX,XX//
function fnConverterValor() {
    let valorDigitado = 0, total = 0
    valorDigitado = document.getElementById("valor").value
    total = valorDigitado * 5.29
    document.getElementById("valorConvertido").innerText = total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
}
//mostrar o resultado da conversão de dólar e euro//
// function fnConverterValor() {
//     let valorDigitado = 0, total = 0
//     valorDigitado = document.getElementById("valor").value
//     total = valorDigitado * 5.29
//     document.getElementById("valorConvertido").innerText = total.toLocaleString('en-US', { style: 'currency', currency: 'USD' })
// }