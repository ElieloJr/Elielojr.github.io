// --> Desenha as formas
function desenhaQuadrado(x, y, largura, altura, cor){
    pincel.fillStyle = cor
    pincel.fillRect(x, y, largura, altura)
}

function desenhaCirculo(x, y,){
    pincel.fillStyle = "blue"
    pincel.beginPath()
    pincel.arc(x, y, 20, 0, 2 * Math.PI)
    pincel.fill()
}

// --> Limpa a tela
function limpaTela(){
    pincel.clearRect(0, 0, 600, 400)
    pincel.fillStyle = "lightgrey"
    pincel.fillRect(0, 0, 600, 400)
}
 
// --> Chegada
function desenhaFinal() {
    desenhaQuadrado(0, 340, 50, 60, "red")
}

// --> Desenha o nível
function desenhaNivel(caixasDoNivel, nivel) {
    
    caixasDoNivel.forEach(caixa => {
        desenhaQuadrado(caixa.x, caixa.y, caixa.largura, caixa.altura, caixa.color)
    });
    desenhaFinal()
    desenhaCirculo(x, y)
    escreveNivel(nivel)
}

// --> Nível em que o jogador se encontra

function escreveNivel(nivel){
    document.querySelector("h2").innerText = `Nível: ${nivel}`
}