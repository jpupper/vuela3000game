
class Pelus {
    constructor() {
      this.pls = [];
      this.lasttime = 0;
      this.duration = 1000;
    }
  
    display() {
      for (let i = this.pls.length - 1; i >= 0; i--) {
        this.pls[i].display();
      }
    }
  
    update() {
      for (let i = this.pls.length - 1; i >= 0; i--) {
        this.pls[i].update();
        if(this.pls[i].pos.x < 0){
          this.pls.splice(i,1);
        }
      }
      if (millis() - this.lasttime > this.duration) {
        this.lasttime = millis();
        this.addParticle(width + 100, random(height));
      }
    }
  
    addParticle(_x, _y) {
      this.pls.push(new Peluc(_x, _y));
    }
  
    collide(_a) {
      for (let i = this.pls.length - 1; i >= 0; i--) {
        let p = this.pls[i];
        if (_a.pos.x - _a.w / 2 < p.pos.x &&
            _a.pos.x + _a.w / 2 > p.pos.x &&
            _a.pos.y - _a.w / 2 < p.pos.y &&
            _a.pos.y + _a.w / 2 > p.pos.y &&
            p.modopeluca == 0) {
          if (p.type == 0) {
            puntomanager.puntos++;
            p.modopeluca = 1;
          } else if (p.type == 1) {
            puntomanager.puntos--;
            Perder();
          }
          //this.pls.splice(i, 1);
        }
      }
    }
  }

  class Peluc {
    constructor(_x, _y) {
      this.pos = createVector(_x, _y);
      this.speed = createVector(-random(3, 4), 0);
      this.accel = createVector(0, 0);
      this.w = 120;
      this.h = 100;
      this.type = random(1) > .8 ? 1 : 0;
      this.c1 = this.type == 0 ? color(random(200), 255, random(200)) : color(random(255), 0, 0);
      this.seed = random(5000);


      let stvel = 0.5;
      this.pospeluc = createVector(_x,_y);
      this.velpeluc2 = createVector(random(50,10),-random(0,5));
      this.modopeluca = 0;

      this.pjindex = floor(random(imgsPjs.length));
      this.plindex = floor(random(imgsPelus.length));

     let imgsc = 0.2;
        if(this.type == 0){
            this.w = imgsPjs[this.pjindex].width*imgsc;
            this.h = imgsPjs[this.pjindex].height*imgsc;
        }else{
            this.w = seqRati.getW()*imgsc;
            this.h = seqRati.getH()*imgsc;
        }
        this.wpeluca = imgsPelus[this.plindex].width*imgsc;
        this.hpeluca = imgsPelus[this.plindex].height*imgsc;

    }
  
    display() {
      fill(this.c1);
      this.dibujo2();
    }
  
    dibujo1() {
      let cnt = 40;
      let s = 40;
      for (let i = 0; i < cnt; i++) {
        let idx = i * 403;
        let x = this.pos.x + map(noise(this.seed + idx + millis() * 0.001), 0, 1, -s, s);
        let y = this.pos.y + map(noise(this.seed + idx + millis() * 0.001 + 329482), 0, 1, -s, s);
        let cf = lerpColor(this.c1, color(255), noise(this.seed + idx + millis() * 0.001 + 95382));
        fill(cf);
        ellipse(x, y, 10, 10);
      }
    }
    dibujo2(){
      

       // fill(255,255,0);
        //rect(this.pospeluc.x,this.pospeluc.y-this.h,this.w,this.h);
        
         //DIBUJAMOS EL PERSONAJE : 
         /*if(this.type == 0){
            fill(0,255,0);
          }else{
            fill(255,0,0);
          }
        rect(this.pos.x,this.pos.y,this.w,this.h);*/

      //  imgsPjs[this.type].display(this.pos.x,this.pos.y);

      
      fill(255,10);
      //RECTANGULO DE COLISION 
      rect(this.pos.x,this.pos.y,this.w,this.h);

      let scimg = 0.2;
      if(this.type == 0){
      imageMode(CENTER);
      /*  image(imgsPjs[this.pjindex],
            this.pos.x,
            this.pos.y,
            imgsPjs[this.pjindex].width*scimg,
            imgsPjs[this.pjindex].height*scimg);
        image(imgsPelus[this.plindex],
            this.pospeluc.x,
            this.pospeluc.y-imgsPjs[this.pjindex].height*scimg,
            imgsPelus[this.plindex].width*scimg,
            imgsPelus[this.plindex].height*scimg)
        imageMode(CORNER);*/

        image(imgsPjs[this.pjindex],
            this.pos.x,
            this.pos.y,
            this.w,
            this.h);
        image(imgsPelus[this.plindex],
            this.pospeluc.x,
            this.pospeluc.y - this.h,
            this.wpeluca,
            this.hpeluca)
    }else{
        //DIBUJAMOS EL PERSONAJE : 
       /*  if(this.type == 0){
            fill(0,255,0);
          }else{
            fill(255,0,0);
          }
        rect(this.pos.x,this.pos.y,this.w,this.h);*/
        seqRati.update();
        imageMode(CENTER);
        image(seqRati.getActiveImg(),this.pos.x,this.pos.y,this.w,this.h);
        
    }
    imageMode(CORNER);

    }

    update() {
      this.speed.add(this.accel);
      this.pos.add(this.speed);

      if(this.modopeluca == 0){
        this.pospeluc.x = this.pos.x;
        this.pospeluc.y = this.pos.y;   
      }else if(this.modopeluca == 1){
        this.pospeluc.x+= this.velpeluc2.x;
        this.pospeluc.y+= this.velpeluc2.y;
      }
    }
  }