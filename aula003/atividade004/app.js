let filmes = ['filme01.jpg', 'filme02.jpg', 'filme03.jpg', 'marcaas.jpg', 'infinitycastle.jpg', 'chainsaw-man.webp']
 
let contador = 0
while(contador < 6){
    console.log(contador)
    document.write("<img src='imagens/" + filmes[contador] + "'>")
    contador = contador + 1
}
 
 