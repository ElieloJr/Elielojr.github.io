function colisaoNivel2(evento){
    if(evento.keyCode == direita){
        if(x >= 30 && y <= 113){
            x = 30
            alertaErro()
        } else if(y >= 110 && y <=115){
            y = 120
        } else if(x == 480){
            x = 480
            alertaErro()
        }
        else{
            x += 5
        } 
    }
    if(evento.keyCode == esquerda){
        if(x <= 25){
            x = 25
            alertaErro()
        } else if(y >= 130 && y <= 350){
            x = 470
            alertaErro()
        }
        else{
            x -= 5
        }
    }
    if(evento.keyCode == cima){
        if(x >= 32 && y <= 120){
            y = 120
            alertaErro()
        } else if(y >= 360 && x <= 450){
            y = 360
            alertaErro()
        }
        else{
            y -= 5
        }
    }
    if(evento.keyCode == baixo){
        if(y >= 130 && y<= 300 && x <= 465){
            y= 130
            alertaErro()
        } else if(y >= 380){
            y = 380
            alertaErro()
        }
        else{
            y +=5
        }
        
    }
}