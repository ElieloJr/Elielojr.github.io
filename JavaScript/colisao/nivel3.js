function colisaoNivel3(evento){
    if(evento.keyCode == direita){
        if(x >= 80 && x <= 100 && y <= 213){
            x = 80
        } else if(y <= 230 && y >= 83 && x >= 230 && x <= 500){
            x = 230
        } else if(x >= 530 && y >=0 && y <= 400){
            x = 530
        }
        else{
            x += 5
        }
    }
    if(evento.keyCode == esquerda){
        if(x <= 20){
            x = 20
        }
        else if(x <= 70 && y >= 50 && y <= 350){
            x = 70
        } else if(x >= 110 && x <= 480 && y >= 0 && y <= 215){
            x = 220
        } else if(y >= 100 && y <= 355 && x >= 520){
            x = 520
        }
        else{
            x -= 5
        }
    }
    if(evento.keyCode == cima){
        if(y <= 20){
            y = 20
        } else if(x >= 90 && x <= 215 && y<= 220){
            y = 220
        } else if(y <= 70 && x >= 200){
            y = 70
        } else if(y <= 360 && y >= 250 && x <= 520){
            y = 360
        }
        else{
            y -= 5
        }
    }
    if(evento.keyCode == baixo){
        if(y == 30 && x <= 65){
            y = 30
        } else if(y == 230 && x <= 250){
            y = 230
        } else if(x >= 235 && x <= 510){
            y = 80
        } else if(y >= 380){
            y = 380
        }
        else{
            y +=5
        }
    }
}