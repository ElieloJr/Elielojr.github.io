function colisaoNivel1(evento){
    if(evento.keyCode == direita){
        if(x == 330){
            x = 330
        } else{
            x += 5
        }
    }
    if(evento.keyCode == esquerda){
        if(x == 25){
            x = 25
        } else if(y <= 350 && y >= 30 && x >= 320){
            x = 320
        }else{
            x -= 5
        }
    }
    if(evento.keyCode == cima){
        if(y == 20){
            y = 20
        } else if(y > 30 && y <= 360 && x <= 315){
            
        }else{
            y -=5
        }
    }
    if(evento.keyCode == baixo){
        if(y == 380){
            y = 380
        } else if(y == 30 && x <= 310){
            y = 30
        }else{
            y += 5
        }
    }
}