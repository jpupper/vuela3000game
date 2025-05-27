class Fuego{
    constructor(_x,_y){
        this.pos = createVector(_x,_y);
        this.c1 = getPamiColor3(random(1));
        this.s = 10;
        this.life = 255;
        this.lifespeed = 2.5;
        this.speed = createVector(-3,0);    
        this.seed = random(99999);
    }
    update(){   
        this.pos.add(this.speed);
        this.life -= this.lifespeed;
        this.s = map(this.life,255,0,15,0);
        
    }
    display(){
        fill(this.c1);
        
        let nx = map(noise(this.seed*5234.+millis()*0.0005),0,1,-15,15);
        let ny = map(noise(this.seed*7276433.+millis()*0.0005),0,1,-15,15);
        rectMode(CENTER);
        rect(this.pos.x+nx,this.pos.y,this.s+nx,this.s+ny);



    }
}

class FuegoManager{
    constructor(){
        this.fuegos = [];
    }
    update(){
        for(let i=0;i<this.fuegos.length;i++){
            this.fuegos[i].update();
            if(this.fuegos[i].life < 0 || this.fuegos[i].pos.x < 0){
                this.fuegos.splice(i,1);
            }
        }
    }
    display(){
        for(let i=0;i<this.fuegos.length;i++){
            this.fuegos[i].display();
        }
    }
    addFuego(_x,_y){
        this.fuegos.push(new Fuego(_x,_y));
    }
}

class Avion {
    constructor() {
      this.pos = createVector(width / 4, 180);
      this.speed = createVector(0, 0);
      this.accel = createVector(0, 0);
      this.mflag = false;
      this.speedlimit = 15;
      this.gravityforce = 0.02;
      this.jumpforce = .6;
      this.w = 100;
      this.h = 80;
      this.c1 = getPamiColor(0.0);
      this.seed = random(9999);
      this.fuegomanager = new FuegoManager();
      this.lt = millis();
      this.dur = 200;
    }
  
    display() {
        if(millis() - this.lt > this.dur){
            this.fuegomanager.addFuego(this.pos.x-this.w/4,this.pos.y);
            this.lt = millis();
        }
      this.fuegomanager.update();
      this.fuegomanager.display();
      fill(255, 200, 200);
      let a = map(this.speed.y, -15, 15, -PI /4, PI /4);
      push();
      translate(this.pos.x, this.pos.y);
      rotate(a);
      //rect(0, 0, this.w, this.h, 70);
      this.display2(0,0);
    
      pop();
    }

    
    display2(_x,_y){
        //TOPO EL DI
        // Main body of the plane (fuselage)

        let cadicional = getPamiColor(noise(this.seed+5167553));

        //CUERPO
        fill(getPamiColor2(noise(this.seed+1625)));
        //fill(getPamiColor2(0));
        rect(_x, _y, this.w, this.h/2);
        let altoala =   50;
        let posxala = lerp(_x-this.w/2,_x+this.w/2,0.7);
        let anchoala = 10;
        let anchoala2= 30;
        let altoala2 = 15;
        rect(posxala, _y-altoala/2, anchoala, altoala);
        rect(posxala-anchoala2/2, _y-altoala+altoala2/2, anchoala2, altoala2) 
        //ALA2
        rect(posxala, _y+altoala/2, anchoala, altoala);
        rect(posxala-anchoala2/2, _y+altoala-altoala2/2, anchoala2, altoala2) 
       
       
        fill(cadicional);
        fill(255);
        triangle(
            _x + this.w/2, _y - this.h/4,  // top right
            _x + this.w/2, _y + this.h/4,  // bottom right
            _x + this.w/2+this.w/4, _y    // front point
        );

        
        let cntdib= 2;
        for(let i=0;i<cntdib;i++){
            let tipo = floor(noise(this.seed+41523+i)*2);
            tipo = cntdib-i-1

            let xx = map(i,0,cntdib-1,_x-this.w*.15,_x+this.w*.15);
            let yy = _y;
            
            if(tipo == 0){
                //DIBUJO 1
                fill(255);
                rect(xx, yy, this.h*.4,  this.h*.4);
                
                fill(cadicional);
                rect(xx, yy, this.h*.20,  this.h*.20);
            }else if(tipo == 1){
                //DIBUJO 2
                fill(255);
                rect(xx-5, yy, 5,  this.h*.5);
                
                fill(255);
                rect(xx+5, yy,5,  this.h*.5);
            }

        }
        fill(cadicional);
        rect(_x-this.w/2,_y,10,this.h/2)
        fill(cadicional);
        rect(_x+this.w/2-10,_y,10,this.h/2)


    }


    update() {
      if (mouseIsPressed && !this.mflag) {
        this.mflag = true;
        this.accel.mult(0);
        this.accel.add(createVector(0, -this.jumpforce));
      }
      if (!mouseIsPressed) {
        this.mflag = false;
      }
      this.accel.add(createVector(0, this.gravityforce));
      this.accel.limit(2);
      this.speed.add(this.accel);
      this.speed.y = constrain(this.speed.y, -this.speedlimit, this.speedlimit);
      this.pos.add(this.speed);
      if (this.pos.y > height + 100) {
        Perder()
      }
    }
  }