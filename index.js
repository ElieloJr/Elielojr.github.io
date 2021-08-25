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
            desenhaNivel(nivel1)
            break;
        case 2: 
            desenhaNivel(nivel2)
            break;
        case 3: 
            desenhaNivel(nivel3)
            break;
        default:
            desenhaNivel(nivel)
            break;
    }

    if(x >= 0 && x <= 25 && y >= 360 && y <= 400){
        alert(`Parabens, nivel ${nivel} completo`)
        x = 25
        y = 25
        nivel++
        limpaTela()
    }
}

function comando(evento){
    if(evento.keyCode == direita){
        x += 5
    } else if(evento.keyCode == esquerda){
        x -= 5
    } else if(evento.keyCode == cima){
        y -= 5
    } else if(evento.keyCode == baixo){
        y += 5
    }
}

setInterval(rodaJogo, 1)
document.onkeydown = comando