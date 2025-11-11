// function fnJogo() {
//     let chute = 0, numeroMagico = 3
//     chute = document.getElementById("valor").value

//     if (chute == 0, numeroMagico) {
//         document.getElementById("resultado").innerText = "Acertou 😊"
//     } else {
//         document.getElementById("resultado").innerText = "Errou 😓"
//     }   
// }

//deixar o número mágico aleatório
function fnJogo() {
    let chute = 0, numeroMagico = Math.floor(Math.random() * 11);
    chute = document.getElementById("valor").value

    if (chute == numeroMagico) {
        document.getElementById("resultado").innerText = "Acertou 😊"
    } else {
        document.getElementById("resultado").innerText = "Errou 😓"
    }   
}