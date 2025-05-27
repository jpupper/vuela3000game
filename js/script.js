let avion;
let pelus;
let puntos;
let puntomanager;
let pantalla;
let mflag;

let ltgameover;
let durgameover;

let sh;
let pg;
function preload(){
  sh = loadShader("shaders/base.vert","shaders/papel2.frag");
  puntomanager = new Puntaje();
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
  noStroke();
  textSize(40);
  textAlign(CENTER);
  document.getElementById("loading").style.display = "none"
  mflag = true;
  
 
  pg = createGraphics(windowWidth ,windowHeight,WEBGL);
  pg.translate(-windowWidth/2,-windowHeight/2)
  
  restart();

}

function  drawShader(){
  sh.setUniform("resolution", [windowWidth, windowHeight]) 
  sh.setUniform("time", millis()*.001) 
  sh.setUniform("mouse", [mouseX / windowWidth, mouseY / windowHeight])
  sh.setUniform("modo",0);
  pg.background(0);
  pg.shader(sh);
  pg.rect(0,0,windowWidth,windowHeight);

  image(pg,0,0,windowWidth,windowHeight);
}


function restart() {
  pantalla = 0;
  avion = new Avion();
  puntos = 0;
  pelus = new Pelus();
  durgameover = 1000;
  ltgameover = millis();
  puntomanager.puntos = 0;
}
function Perder(){
  pantalla = 2;
  ltgameover = millis();
}
function draw() {
  if (pantalla == 0) {
    dibujarStart();
  }
  if (pantalla == 1) {
  
    dibujarJuego();

  }
  if (pantalla == 2) {
    dibujarGameOver();
  }
  /*background(0);
  fill(255,0,0);
  ellipse(mouseX,mouseY,80,80);*/
  if(!mouseIsPressed){
    mflag = true;
  }
  
}

function dibujarFondo() {
  //fill(0, 120);
  //rect(width / 2, height / 2, width, height);

  drawShader();
}

function dibujarMenuInicio() {

}
function dibujarStart(){
  dibujarFondo();
  textAlign(CENTER,CENTER);
  fill(255);
  text("START",width/2,height/2);

  if(mouseIsPressed && mflag){
    pantalla = 1;
    mflag = false;
  }
}
function dibujarJuego() {
  dibujarFondo();
  
  puntomanager.update();
  puntomanager.display2();

  avion.update();
  pelus.update();
  avion.display();
  pelus.display();

  pelus.collide(avion);
}

function dibujarGameOver() {
  dibujarFondo();
  //background(0);
  fill(0, 50);
  rect(width / 2, height / 2, width, height);
  textSize(80);
  fill(255);
  text("Game Over", width / 2, height / 2);

  if(millis() - ltgameover > durgameover){
    restart();
  }
}

function mousePressed() {
  if (pantalla == 0) {
    pantalla = 1;
  }
}
function touchPressed(){
  if (pantalla == 0) {
    pantalla = 1;
  }
}


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
          _a.pos.y + _a.w / 2 > p.pos.y) {
        if (p.type == 0) {
          puntomanager.puntos++;
        } else if (p.type == 1) {
          puntomanager.puntos--;
          Perder();
        }
        this.pls.splice(i, 1);
      }
    }
  }
}

class Peluc {
  constructor(_x, _y) {
    this.pos = createVector(_x, _y);
    this.speed = createVector(-random(3, 4), 0);
    this.accel = createVector(0, 0);
    this.w = 50;
    this.h = 50;
    this.type = random(1) > .8 ? 1 : 0;
    this.c1 = this.type == 0 ? color(random(200), 255, random(200)) : color(random(255), 0, 0);
    this.seed = random(5000);
  }

  display() {
    fill(this.c1);
    this.dibujo1();
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

  update() {
    this.speed.add(this.accel);
    this.pos.add(this.speed);
  }
}

class Avion {
  constructor() {
    this.pos = createVector(width / 4, 40);
    this.speed = createVector(0, 0);
    this.accel = createVector(0, 0);
    this.mflag = false;
    this.speedlimit = 15;
    this.gravityforce = 0.02;
    this.jumpforce = .6;
    this.w = 80;
    this.h = 35;
    this.c1 = color(random(255), random(255), random(255));
  }

  display() {
    fill(255, 200, 200);
    let a = map(this.speed.y, -15, 15, -PI * 4, PI * 4);
    push();
    translate(this.pos.x, this.pos.y);
    rotate(a);
    rect(0, 0, this.w, this.h, 70);
    pop();
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


class Puntaje{
  constructor(){
    this.imgs = [];
    for(let i=0; i<10; i++){
      this.imgs[i] = loadImage("img/numeros/"+(i)+".png");
    }
    this.x = windowWidth/2;
    this.y = 100;
    this.numsize = 40;
    this.puntos = 0;
  }
  display2(){
    
    //DIBUJAR NUMEROS: 
    let w = 150;
    let h = 75;
    noStroke();
    rectMode(CENTER);

    let col = lerpColor(color(255),getPamiColor(noise(millis()*0.0001+5852.)),0.3);
 
    let col2 = lerpColor(color(255),getPamiColor(noise(millis()*0.0001+895465.)),0.3);
    
    fill(col)
    rect(this.x,this.y,w*.9,h);
    fill(239,72,30)
    rect(this.x,this.y,w*.8,h*.8);
    fill(255)
    rect(this.x,this.y,w*.7,h*.6);
    
    /*let cnt = 10;
    for(let i=0; i<cnt; i++){
      if(i%2 == 0){
        _ps.fill(col)
      }else{
        _ps.fill(255,0,0);
      }
      let s = map(i,0,cnt-1,1,0);

      _ps.rect(this.x,this.y,w*.7*s,h*.6*s);
    }*/
    
    let sep = 30;

    //console.log(numeroToArray(50));
    this.dibujarNum(-sep,0,numeroToArray(this.puntos)[0]);
    this.dibujarNum(0,0,numeroToArray(this.puntos)[1]);
    this.dibujarNum(+sep,0,numeroToArray(this.puntos)[2]);

    //_ps.fill(255,0,0);
    //_ps.ellipse(this.x,this.y,50,50);
  }
  display(_ps){

    //DIBUJAR NUMEROS: 
    let w = 150;
    let h = 75;
    _ps.noStroke();
    _ps.rectMode(CENTER);

    let col = lerpColor(color(255),getPamiColor(noise(millis()*0.0001+5852.)),0.3);
 
    let col2 = lerpColor(color(255),getPamiColor(noise(millis()*0.0001+895465.)),0.3);
    
    _ps.fill(col)
    _ps.rect(this.x,this.y,w*.9,h);
    _ps.fill(col2)
    _ps.rect(this.x,this.y,w*.8,h*.8);
    _ps.fill(col)
    _ps.rect(this.x,this.y,w*.7,h*.6);
    
    /*let cnt = 10;
    for(let i=0; i<cnt; i++){
      if(i%2 == 0){
        _ps.fill(col)
      }else{
        _ps.fill(255,0,0);
      }
      let s = map(i,0,cnt-1,1,0);

      _ps.rect(this.x,this.y,w*.7*s,h*.6*s);
    }*/
    
    let sep = 30;

    //console.log(numeroToArray(50));
    this.dibujarNum(_ps,-sep,0,numeroToArray(this.puntos)[0]);
    this.dibujarNum(_ps,0,0,numeroToArray(this.puntos)[1]);
    this.dibujarNum(_ps,+sep,0,numeroToArray(this.puntos)[2]);

    //_ps.fill(255,0,0);
    //_ps.ellipse(this.x,this.y,50,50);
  }

  update(){
      
  }

  dibujarNum(_ps,xoffset,yoffset,_idx){
    _ps.imageMode(CENTER);
    _ps.image(this.imgs[_idx],this.x+xoffset,this.y+yoffset,this.numsize,this.numsize);
    _ps.imageMode(CORNER);
  }
  dibujarNum(xoffset,yoffset,_idx){
    imageMode(CENTER);
    image(this.imgs[_idx],this.x+xoffset,this.y+yoffset,this.numsize,this.numsize);
    imageMode(CORNER);
  }

}
function numeroToArray(numero) {
  // Asegurarse de que el número esté en el rango de 0 a 999
  numero = Math.min(Math.max(numero, 0), 999);
  
  // Convertir el número a una cadena
  var numeroStr = numero.toString();
  
  // Rellenar la cadena con ceros a la izquierda si es necesario
  while (numeroStr.length < 3) {
    numeroStr = "0" + numeroStr;
  }
  
  // Crear un array de tres números a partir de los dígitos de la cadena
  var array = numeroStr.split("").map(Number);
  
  return array;
}
function getPamiColor(valor) {
	// Paleta de colores
	var colores =[color(230,145,144),
		color(22,159,41),
		color(223,48,16),
		color(237,178,14),
		color(40,130,186),
		color(20,20,20)]
  
	// Asegurarse de que el valor esté en el rango [0, 1]
	valor = constrain(valor, 0, 1);
  
	// Determinar los índices de los colores base
	var index1 = floor(valor * (colores.length - 1));
	var index2 = min(index1 + 1, colores.length - 1);
  
	// Calcular el factor de interpolación entre los dos colores base
	var factor = valor * (colores.length - 1) - index1;
  
	// Obtener los colores base
	var color1 = colores[index1];
	var color2 = colores[index2];
  
	// Interpolar entre los colores base
	var colorInterpolado = lerpColor(color1, color2, factor);
  
	return colorInterpolado;
  }