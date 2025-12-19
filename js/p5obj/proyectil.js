class Proyectil {
    constructor(_x, _y) {
        this.pos = createVector(_x, _y);
        this.speed = createVector(8, 0);
        this.w = 20;
        this.h = 10;
        this.active = true;
        this.c1 = color(254, 235, 44);
    }
    
    update() {
        this.pos.add(this.speed);
        if(this.pos.x > width) {
            this.active = false;
        }
    }
    
    display() {
        push();
        fill(this.c1);
        rectMode(CENTER);
        rect(this.pos.x, this.pos.y, this.w, this.h);
        
        fill(255, 161, 8);
        rect(this.pos.x + 5, this.pos.y, this.w * 0.5, this.h * 0.5);
        pop();
    }
    
    collidesWith(peluc) {
        let d = dist(this.pos.x, this.pos.y, peluc.pos.x, peluc.pos.y);
        return d < (this.w + peluc.w) / 2;
    }
}

class ProyectilManager {
    constructor() {
        this.proyectiles = [];
    }
    
    update() {
        for(let i = this.proyectiles.length - 1; i >= 0; i--) {
            this.proyectiles[i].update();
            if(!this.proyectiles[i].active) {
                this.proyectiles.splice(i, 1);
            }
        }
    }
    
    display() {
        for(let p of this.proyectiles) {
            p.display();
        }
    }
    
    shoot(_x, _y) {
        this.proyectiles.push(new Proyectil(_x, _y));
    }
    
    checkCollisions(pelus) {
        for(let i = this.proyectiles.length - 1; i >= 0; i--) {
            let proyectil = this.proyectiles[i];
            
            for(let j = pelus.pls.length - 1; j >= 0; j--) {
                let peluc = pelus.pls[j];
                
                if(proyectil.collidesWith(peluc) && peluc.modopeluca == 0) {
                    if(peluc.type == 0) {
                        puntomanager.puntos += 10;
                        peluc.modopeluca = 1;
                        peluc.glitchActive = true;
                        peluc.glitchStartTime = millis();
                        crearParticulasColores(peluc.pos.x, peluc.pos.y - peluc.h/2, 20);
                    }
                    
                    this.proyectiles.splice(i, 1);
                    break;
                }
            }
        }
    }
}
