var tela = document.querySelector("canvas")
var pincel = tela.getContext("2d")

pincel.fillStyle = "lightgrey"
pincel.fillRect(0, 0, 600, 400)

var nivelProgresso = 1

var x = 25
var y = 25

var direita = 39;
var esquerda = 37;
var cima = 38;
var baixo = 40;

var nivel1 = getCaixasNivel1()
var nivel2 = getCaixasNivel2()
var nivel3 = getCaixasNivel3()

function rodaJogo(){
    limpaTela()

    switch(nivelProgresso){
        case 1:
            desenhaNivel(nivel1, nivelProgresso)
            break;
        case 2: 
            desenhaNivel(nivel2, nivelProgresso)
            break;
        case 3: 
            desenhaNivel(nivel3, nivelProgresso)
            break;
        default:
            desenhaNivel(nivel1, nivelProgresso)
            nivelProgresso = 1
            break;
    }

    if(x >= 0 && x <= 25 && y >= 360 && y <= 400){
        alert(`Parabens, nivel ${nivelProgresso} completo`)
        x = 25
        y = 25
        nivelProgresso++
        limpaTela()
    }
}

function comando(evento){
    switch (nivelProgresso){
        case 1: 
            colisaoNivel1(evento)
            break;
        case 2: 
            colisaoNivel2(evento)
            break;
        case 3: 
            colisaoNivel3(evento)
            break;
        default:
            colisaoNivel1(evento)
            break;

    }
}

setInterval(rodaJogo, 1)
document.onkeydown = comando