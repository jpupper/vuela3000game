//ooNWNcmCSWx7bdGJFnKRoqMXK8CojUdAersLbTrKktFe5T3Hkdq
// Función para iniciar la reproducción del audio
async function triggerAudio() {
  // Asegurarse de que Tone.js está listo para reproducir el audio

  const player = new Tone.Player("sounds/audio.mp3").toDestination();
  await Tone.start();
  
  // Reproducir el audio
  player.start();
}


class Pamiloparticles{
  constructor(){
    this.pamilodraws = []; //ESTOS SON LOS QUE CAEN.
    this.pamilostars = []; //ESTOS SON LOS QUE SE SPAWNEAN
    this.pamilocars = []; //ESTOS SON LOS AUTOS

    this.lastime_lifeparticle = 0 ; 
    this.duration_lifespawn = 600;
    
    this.pj1 = new pngSequence("img/personaje1",3,0);
    this.pj2 = new pngSequence("img/personaje2",3,0);
    this.pj3 = new pngSequence("img/personaje3",3,0);
    this.pj4 = new pngSequence("img/personaje4",4,0);

    this.pjs = [];
    this.pjs.push(this.pj1);
    this.pjs.push(this.pj2);
    this.pjs.push(this.pj3);
    this.pjs.push(this.pj4);

    this.autos = new pngSequence("img/autitos1",3,0);
    this.autos2 = new pngSequence("img/autitos2",3,0);

  
    this.seq_fondo = new pngSequence("img/fondo",5,0);

    this.seq_1 = new pngSequence("img/1",2,0);
    this.seq_2 = new pngSequence("img/2",4,0);
    this.seq_3 = new pngSequence("img/3",5,0);
    this.seq_4 = new pngSequence("img/4",2,0);
    this.seq_5 = new pngSequence("img/5",2,0);
    this.seq_6 = new pngSequence("img/6",5,0);
    this.seq_7 = new pngSequence("img/7",2,0);
    this.seq_8 = new pngSequence("img/8",3,0);
    this.seq_9 = new pngSequence("img/9",4,0);
    this.seq_10 = new pngSequence("img/10",4,0);
    this.seq_11 = new pngSequence("img/11",5,0);
    this.seq_12 = new pngSequence("img/12",5,0);
    this.seq_13 = new pngSequence("img/13",9,0);
    this.seq_14 = new pngSequence("img/14",3,0);
    this.seq_15 = new pngSequence("img/15",3,0);
    this.seq_16 = new pngSequence("img/16",7,0);
    this.seq_17 = new pngSequence("img/17",7,0);
    this.seq_18 = new pngSequence("img/18",6,0);
    this.seq_19 = new pngSequence("img/19",5,0);
    this.seq_20 = new pngSequence("img/20",6,0);
    this.seq_21 = new pngSequence("img/21",4,0);
    this.seq_22 = new pngSequence("img/22",6,0);
    this.seq_23 = new pngSequence("img/23",4,0);
    this.seq_24 = new pngSequence("img/24",3,0);
    this.seq_25 = new pngSequence("img/25",3,0);
    this.seq_26 = new pngSequence("img/26",4,0);

    this.seqs = [];
    
    this.seqs.push(this.autos);
    this.seqs.push(this.autos2);


    this.seqs.push(this.seq_1);
    this.seqs.push(this.seq_2);
    this.seqs.push(this.seq_3);
    this.seqs.push(this.seq_4);
    this.seqs.push(this.seq_5);
    this.seqs.push(this.seq_6);
    this.seqs.push(this.seq_7);
    this.seqs.push(this.seq_8);
    this.seqs.push(this.seq_9);
    this.seqs.push(this.seq_10);
    this.seqs.push(this.seq_11);
    this.seqs.push(this.seq_12);
    this.seqs.push(this.seq_13);
    this.seqs.push(this.seq_14);
    this.seqs.push(this.seq_15);
    this.seqs.push(this.seq_16);
    this.seqs.push(this.seq_17);
    this.seqs.push(this.seq_18);
    this.seqs.push(this.seq_18);
    this.seqs.push(this.seq_18);
    this.seqs.push(this.seq_19);
    this.seqs.push(this.seq_20);
    this.seqs.push(this.seq_21);
    this.seqs.push(this.seq_22);
    this.seqs.push(this.seq_23);
    this.seqs.push(this.seq_24);
    this.seqs.push(this.seq_25);
    this.seqs.push(this.seq_26);

    this.sonidos = new jpsonidos();
    
    /*this.sounds = [];

    for(let i=0 ; i<31; i++){
      this.sounds.push(loadSound("sound/select/"+(i+1)+".wav"));
    }*/
    this.bgdraw = false;
  }
  
  draw(_ps){
   //UPDATE DE LAS PARTICULAS DE CABEZA.

   //_ps.background(0,255);

   let idx = floor(millis()*0.005 % 5);
   
   if(this.bgdraw){
    _ps.image(this.seq_fondo.imgs[idx],0,0,width,height);
   }

   for(let i=0; i<this.pamilostars.length; i++){
    this.pamilostars[i].draw(_ps);
   }
   
   this.drawSequences(_ps);


   for(let i=0; i<this.pamilocars.length; i++){
    this.pamilocars[i].update(_ps);

    //Este for me lo tiro chatgpt para alejar la movida
    for(let j = i + 1; j < this.pamilocars.length; j++) {
      let dx = this.pamilocars[i].x - this.pamilocars[j].x;
      let dy = this.pamilocars[i].y - this.pamilocars[j].y;
      let distance = Math.sqrt(dx*dx + dy*dy);

      if(distance < 50) {
          let angle = Math.atan2(dy, dx);
          let speed = 2; // Ajusta según sea necesario

          this.pamilocars[i].speedx = speed * Math.cos(angle+random(-PI/4,PI/4));
          this.pamilocars[i].speedy = speed * Math.sin(angle+random(-PI/4,PI/4));
          this.pamilocars[j].speedx = -this.pamilocars[i].speedx;
          this.pamilocars[j].speedy = -this.pamilocars[i].speedy;
      }
  }

      if(this.pamilocars[i].life < 0){
        this.pamilocars.splice(i,1);
      }

   }
   for(let i=0; i<this.pamilocars.length; i++){
     if(this.pamilocars[i].isMouseOver()){





      console.log(this.pamilocars[i].vidas)
      
        let size = map(this.pamilocars[i].vidas,0,5,200,100);
        let vidas = this.pamilocars[i].vidas+1;
       /* if(vidas < 3){
           this.addPamiloCars(this.pamilocars[i].x,this.pamilocars[i].y,size,vidas);
        }*/

        this.pamilocars.splice(i,1);

    }
   }


   for(let i=0; i<this.pamilostars.length; i++){
    this.pamilostars[i].update(_ps);
    if(this.pamilostars[i].life < 0){
      this.pamilostars.splice(i,1);

    }
   }
   
   this.updateCabezas(_ps);
   let idx2 = floor(millis()*0.005 % 5);
   //_ps.tint(255,100)
   //_ps.image(this.seq_fondo.imgs[idx2],0,0,width,height);
  
  }

  drawSequences(_ps){
    for(let i=0; i<this.pamilocars.length; i++){
      let auxidx = this.pamilocars[i].index;
      _ps.fill(255,0,0);
      this.drawSequence(this.pamilocars[i],this.seqs[this.pamilocars[i].indeximg],_ps);      
    }
  }
  drawSequence(_particle,_seq,_ps){
    //console.log(_particle);
    //console.log(_particle.index);
     if(_particle.index  > _seq.imgs.length){
           _particle.index = 0;
      }
        _ps.push();
        _ps.translate(_particle.x,_particle.y);
        let v1 = createVector(_particle.x, _particle.y);
        //_ps.rotate(v1.heading()+_particle.angle+random(10));
        _ps.rotate(millis()*_particle.angularspeed+v1.heading());
        
        _ps.translate(-_particle.r/2,-_particle.r/2);
        _ps.image(_seq.imgs[floor(_particle.index)],
            0,
            0,_particle.r,_particle.r);
        _ps.pop(); 
  }

  //El de la cabeza : 
  drawSequence2(_particle,_ps){

    let _seq = this.pj2;

    if(_particle.index > _seq.imgs.length-1){
      _particle.index = 0;
    }
    let auxidx = floor(_particle.index);
    _ps.image(_seq.imgs[auxidx],
      _particle.x,
      _particle.y,_particle.r,_particle.r);
    if(_particle.isMouseOver() ){
        //  this.pamilodraws[i].life = -1;
          this.processExplosion(
            _particle.x+_particle[i].r/2,
            _particle.y+_particle[i].r/2)
            _particle.splice(i,1);
    }else if(_particle[i].life < 0){
      _particle.splice(i,1);
    }
  
  }

  updateCabezas(_ps){
    for(let i=0; i<this.pamilodraws.length;i++){
      
      this.pamilodraws[i].update();  
      //console.log(this.pamilodraws[i].indexcabezaimg);
      let _seq = this.pjs[this.pamilodraws[i].indexcabezaimg];

      if(this.pamilodraws[i].index > _seq.imgs.length-1){
        this.pamilodraws[i].index = 0;
      }
      let auxidx = floor(this.pamilodraws[i].index);
      _ps.image(_seq.imgs[auxidx],
                this.pamilodraws[i].x,
                this.pamilodraws[i].y,this.pamilodraws[i].r,this.pamilodraws[i].r);
      if(this.pamilodraws[i].isMouseOver() ){
          //  this.pamilodraws[i].life = -1;
            this.processExplosion(
              this.pamilodraws[i].x+this.pamilodraws[i].r/2,
              this.pamilodraws[i].y+this.pamilodraws[i].r/2)
              this.pamilodraws.splice(i,1);
      }else if(this.pamilodraws[i].life < 0){
        this.pamilodraws.splice(i,1);
      }

    }
  }
  update(){
    if(millis() - this.lastime_lifeparticle > this.duration_lifespawn){
      this.lastime_lifeparticle = millis();
      this.addPamiloDraw(random(width*0.5/8,width*7/8),-50,150,color(255,0,0));
    }
   
  }

  getColorPalete(){

    this.colores = [color(230,145,144),
      color(22,159,41),
      color(223,48,16),
      color(237,178,14),
      color(40,130,186),
      color(20,20,20)]

    let col = this.colores[floor(random(this.colores.length))]; 
    return col;
  }

  processExplosion(_x,_y){
   // this.sounds[floor(random(this.sounds.length))].play();
   this.sonidos.playDisparo()  
   this.addPamiloCars(_x,_y,random(50,100),0);
  }

  addPamiloCars(_x,_y,_s,_vidas){
 
    let cnt = 12;
    for(let i = 0 ; i< cnt; i++){
      let pm = new PamiloDraw(_x,_y,_s,this.getColorPalete(),_vidas);
      let rdm = 3;
      pm.speedx = random(-rdm,rdm);
      pm.speedy = random(-rdm,rdm);
      pm.lifespeed = 1;
      pm.issecond = 1;
      this.pamilocars.push(pm);
    }

  }
  addPamiloStars(_x,_y){
    /*let obj = {
      x:_x,
      y:_y,
      r:_r
    };*/
    let cnt = 1;
    for(let i = 0 ; i< cnt; i++){
      let pm = new PamiloDraw(_x,_y,10,this.getColorPalete());
      let rdm = 5;
      pm.speedx = random(-rdm,rdm);
      pm.speedy = random(-rdm,rdm);
      pm.lifespeed = 1;
      this.pamilostars.push(pm);
    }
  }
  addPamiloDraw(_x,_y,_r){
    /*let obj = {
      x:_x,
      y:_y,
      r:_r
    };*/

    let pm = new PamiloDraw(_x,_y,_r,this.getColorPalete(),0);
    this.pamilodraws.push(pm);
  }
}
//Estas son las que estan cuando explota todo digamos. 

class PamiloDraw{

	constructor(_x,_y,_r,_c1,_vidas){
      this.x = _x;
      this.y = _y;
      this.r = _r;
      this.origr = _r;
      this.rdm = 4;
      this.speedx = random(-this.rdm,this.rdm); 
      this.speedx = 0;
      this.speedy = random(2,4);
      this.life = 255;
      this.lifespeed = 1;
      this.c1 = _c1;

      //this.vidas = _vidas;

      this.vidas = 0;
      this.indeximg = floor(random(26));
      this.indexcabezaimg = floor(random(4));
      //ESTO PARA INTERACTUAR CON EL PNG SEQUENCE : 
      this.index = 0;   
      this.indexSpeed = 0.08;
      this.a = random(TWO_PI);
      this.angularspeed = random(-0.005,0.005);
      this.issecond = 0;
      this.speedlimit = 2;
      //this.img1 = new imgManager(this.x,this.y, "img/cabeza/", 3, this.r,this.r, 0);

      this.polystats = {
        puntas:floor(random(20)*2.),
        puntas2:floor(random(2,4)*2.),
        framp: random(10),
        cnt:floor(random(3,6)),
        colorseed:random(100)
      }


    }

    setup() {

    }
    draw(_ps) {		
     /* if(this.isMouseOver()){
        _ps.fill(255,0,0);
      }else{
        _ps.fill(getColorPalete());
      }*/
      this.polyAdvance(_ps)
    }
    polyAdvance(_ps){

      for(let i=0; i<this.polystats.cnt; i++){

        let rr = map(i,0,this.polystats.cnt,this.r,0);
        _ps.fill(this.getColorPalete2(i*50.));
        _ps.noStroke();
        _ps.push();
        _ps.translate(this.x,this.y);
        _ps.scale(3);
        _ps.rotate(millis()*this.angularspeed+ this.a);
         this.poly3(_ps,0,0,rr);
        _ps.pop();
      }
     
    }
    poly3(_ps,_x,_y,_size){
      let _puntas = this.polystats.puntas;
      let _puntas2 = this.polystats.puntas2;
      let fr = 2; //FUERZA random
      _ps.beginShape();
      let framp = this.polystats.framp;
      for(let i=0; i<_puntas; i++){
        let angulo = map(i,0,_puntas-1,0,TWO_PI);
        let amp2 = _size+sin(angulo*_puntas2)*framp;
        let x = _x + sin(angulo)*amp2;
        let y = _y + cos(angulo)*amp2;
        _ps.vertex(x,y);
      } 
      _ps.endShape(CLOSE);

    }
    update() {
       this.life-=this.lifespeed;
       this.x+=this.speedx;
       this.y+=this.speedy;
       
       this.speedx = constrain(this.speedx,-this.speedlimit,this.speedlimit);
       this.speedy = constrain(this.speedy,-this.speedlimit,this.speedlimit);
       
       if(this.issecond){
        let strn = 0.25;
        this.speedx+=map(noise(this.a*424.+millis()*0.002+6825),0,1,-strn,strn);
        this.speedy+=map(noise(this.a*5234.+millis()*0.002+98952),0,1,-strn,strn);

        this.r = map(noise(millis()*0.001+this.a*152312.),0,1,this.origr*.25,this.origr*1.5) 
        * constrain(map(this.life,255,200,0,1),0,1);

       }
       //.speedx+=noise(this.a*424.+millis()*0.001+6825)*0.1;
       //this.speedx+=noise(this.a*542.+millis()*0.001+98752)*0.1;
       //Asesinamos a la particula
       if(this.y > width ){
        this.life = 0;
       }
       this.index+=this.indexSpeed;
    }
    isMouseOver(){
      if(mouseX > this.x  && 
        mouseX < this.x+this.r && 
        mouseY > this.y && 
        mouseY < this.y+this.r  ){
        return true;
      }else{
        return false;
      }
    }
  
    getColorPalete(){

      this.colores = [color(230,145,144),
        color(22,159,41),
        color(223,48,16),
        color(237,178,14),
        color(40,130,186),
        color(20,20,20),
        color(237,177,185)]

      let col = this.colores[floor(random(this.colores.length))]; 
      return col;
    }

    getColorPalete2(_s){

      this.colores = [
        color(223,48,16),
        color(237,178,14),
        color(40,130,186),
        color(20,20,20)
      ];
            
      let idx = floor(random(this.colores.length));
      idx = floor(noise(millis()*0.001+_s*100.+this.polystats.colorseed*1000.)*this.colores.length);
      idx = floor(constrain(idx,0,this.colores.length-1));
      
      let col = this.colores[idx]; 
      return col;
    
    }
}


