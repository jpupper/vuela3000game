let avion;
let pelus;
let puntos;
let puntomanager;
let pantalla;
let mflag;

let ltgameover;
let durgameover;
let lttutorial;
let durtutorial = 3000;
let vidas;

let highscore;
let tutorial;
let lastComboScore = 0;
let comboMessageTime = 0;
let showComboMessage = false;

let sh;
let pg;


let seqStart ;
let pixelFont;
let seqAnifinal;
let seqWin;

let imgsPelus =[];
let imgsPjs =[];
let debugmode = false;

let particulasRojas = [];
let particulasColores = [];

let seqRati;

function preload(){
  pixelFont = loadFont("font/pixelart.ttf");
  sh = loadShader("shaders/base.vert","shaders/randombackground.frag");
  seqStart = new pngSequence("img/anistart",3,0);
  seqAnifinal = new pngSequence("img/anifinal",5,0);
  seqWin = new pngSequence("img/win",8,0);
  for(let i=0;i<10;i++){
    imgsPjs[i] = loadImage("img/personajes/"+i+".PNG");
  }
  for(let i=0;i<12;i++){
    imgsPelus[i] = loadImage("img/pelucas/"+i+".PNG");
  }
  seqRati = new pngSequence("img/rati",2,0);
  puntomanager = new Puntaje();
  highscore = new Highscore();
  tutorial = new Tutorial();
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  avion = new Avion();
  pelus = new Pelus();
  puntomanager = new Puntaje();
  pantalla = 0;
  mflag = true;
  durgameover = 3000;
  vidas = 3;
  
  highscore = new Highscore();
  tutorial = new Tutorial();

  pg = createGraphics(windowWidth, windowHeight, WEBGL);
  pg.translate(-windowWidth/2,-windowHeight/2)
  rectMode(CENTER);
  noStroke();
  textSize(40);
  textAlign(CENTER);
  document.getElementById("loading").style.display = "none"
  
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

 // background(255,0,0);
}
function debug(){
  textAlign(CORNER)
  textSize(20 )
  fill(255)
  if(debugmode){
    text("FRAMERATE: "+frameRate().toFixed(2),100,300);
  }
}
function restart() {
  pantalla = 0;
  avion = new Avion();
  puntos = 0;
  pelus = new Pelus();
  durgameover = 3000;
  ltgameover = millis();
  puntomanager.puntos = 0;
  vidas = 3;
  lastComboScore = 0;
  showComboMessage = false;
}
function Perder(){
  pantalla = 2;
  ltgameover = millis();
}
function Ganar(){
  pantalla = 3;
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
  if (pantalla == 3) {
    dibujarVictoria();
  }
  if (pantalla == 4) {
    dibujarFondo();
    tutorial.update();
    tutorial.display();
  }
  if (pantalla == 5) {
    dibujarFondo();
    highscore.update();
    highscore.display();
  }
  if (pantalla == 6) {
    dibujarFondo();
    highscore.display();
  }
  /*background(0);
  fill(255,0,0);
  ellipse(mouseX,mouseY,80,80);*/
  if(!mouseIsPressed){
    mflag = true;
  }
 /* if(debugmode){
    debug();
  }*/
  debug();
}

function keyPressed(){
  if(key == "d"){
    debugmode = !debugmode;
  }
  
  if(key == '1') pantalla = 0;
  if(key == '2') pantalla = 1;
  if(key == '3') pantalla = 2;
  if(key == '4') pantalla = 3;
  if(key == '5') pantalla = 4;
  if(key == '6') pantalla = 5;
  
  if(keyCode === 34 || key === ' ' || key === 'b' || key === 'B'){
    handleButtonPress();
  }
  
  if(keyCode === 33){
    handlePreviousButton();
  }
}

function handleButtonPress() {
  if(pantalla == 1){
    avion.jump();
  }
  if(pantalla == 0){
    pantalla = 4;
    tutorial.start();
  }
  if(pantalla == 2){
    if(highscore.checkIfInTop10(puntomanager.puntos)) {
      pantalla = 5;
      highscore.startNameEntry(puntomanager.puntos);
    } else {
      pantalla = 6;
    }
  }
  if(pantalla == 3){
    restart();
  }
  if(pantalla == 5){
    highscore.confirmLetter();
  }
  if(pantalla == 6){
    restart();
  }
}


function handlePreviousButton() {
  if(pantalla == 1){
    avion.jump();
  }
  if(pantalla == 0){
    pantalla = 4;
    tutorial.start();
  }
  if(pantalla == 2){
    if(highscore.checkIfInTop10(puntomanager.puntos)) {
      pantalla = 5;
      highscore.startNameEntry(puntomanager.puntos);
    } else {
      pantalla = 6;
    }
  }
  if(pantalla == 3){
    restart();
  }
  if(pantalla == 5){
    highscore.previousLetterInput();
  }
  if(pantalla == 6){
    restart();
  }
}

function mousePressed() {
  handleButtonPress();
}

function touchPressed(){
  handleButtonPress();
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
  seqStart.update();
  seqStart.speed = 0.1;
  //seqStart.display();
  imageMode(CENTER);
  image(seqStart.getActiveImg(),windowWidth/2,windowHeight/2,windowHeight,windowHeight);
  
  imageMode(CORNER);
  textAlign(CENTER,CENTER);
  fill(255);
  //text("START",width/2,height/2);
imageMode(CORNER)
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
  
  actualizarParticulas();
  dibujarParticulas();
  
  dibujarVidas();
  
  // CAMBIAR AQUI EL VALOR 3000 PARA MODIFICAR CADA CUANTOS PUNTOS SALE EL COMBO
  let currentCombo = floor(puntomanager.puntos / 3000);
  if(currentCombo > lastComboScore && puntomanager.puntos >= 3000) {
    lastComboScore = currentCombo;
    vidas = min(vidas + 1, 5);
    showComboMessage = true;
    comboMessageTime = millis();
  }
  
  if(showComboMessage && millis() - comboMessageTime < 2000) {
    push();
    textFont(pixelFont);
    textAlign(CENTER, CENTER);
    let t = millis() * 0.003;
    let pulse = 1 + sin(t * 8) * 0.15;
    textSize(70 * pulse);
    
    let comboText = "COMBO " + (lastComboScore * 3000);
    for(let i = 0; i < comboText.length; i++) {
      let charCol = (i + floor(t * 6)) % 2 == 0 ? color(254, 235, 44) : color(255, 161, 8);
      fill(charCol);
      text(comboText[i], width/2 - (comboText.length * 20) + i * 40, height/2 - 100);
    }
    
    textSize(40);
    fill(255);
    text("+1 VIDA", width/2, height/2 - 30);
    pop();
  } else if(millis() - comboMessageTime >= 2000) {
    showComboMessage = false;
  }
}

function mostrarMensajeGanador() {
}

function dibujarGameOver() {
  dibujarFondo();
  
  seqAnifinal.update();
  seqAnifinal.speed = 0.1;
  
  imageMode(CENTER);
  let size;
  if(windowWidth > windowHeight){
    size = windowHeight ;
  }else{
    size = windowWidth ;
  }
  
  image(seqAnifinal.getActiveImg(), width/2, height/2, size, size);
  imageMode(CORNER);
  
  push();
  textFont(pixelFont);
  textAlign(CENTER, CENTER);
  fill(255);
  textSize(40);
  text("PRESIONA PARA CONTINUAR", width/2, height - 100);
  pop();
}

function dibujarVictoria() {
  dibujarFondo();
  
  seqWin.update();
  seqWin.speed = 0.1;
  
  imageMode(CENTER);
  let size;
  if(windowWidth > windowHeight){
    size = windowHeight / 2;
  }else{
    size = windowWidth / 2;
  }
  
  image(seqWin.getActiveImg(), width/2, height/2, size, size);
  imageMode(CORNER);
}

function resize(){
  createCanvas(windowWidth, windowHeight);
  pg = createGraphics(windowWidth ,windowHeight,WEBGL);
  pg.translate(-windowWidth/2,-windowHeight/2)
}

function getPamiColor(valor) {
  // Paleta de colores
  var colores = [
    color(254,235,44),    // verde
    color(255,161,8),   // naranja
    color(255,7,78),
    color(239,72,30),           // negro
    color(255,0,0)      // rojo
  ];

  // Asegurarse de que el valor esté en el rango [0, 1]
  valor = constrain(valor, 0, 1);
  
  // Si el valor es exactamente 1, devolver el último color directamente
  if (valor === 1) return colores[colores.length - 1];

  // Determinar los índices de los colores base
  var index1 = floor(valor * (colores.length - 1));
  var index2 = index1 + 1;

  // Calcular el factor de interpolación entre los dos colores base
  var factor = (valor * (colores.length - 1)) - index1;

  // Obtener los colores base
  var color1 = colores[index1];
  var color2 = colores[index2];

  // Interpolar entre los colores base
  return lerpColor(color1, color2, factor);
}


function getPamiColor2(valor) {
  // Paleta de colores
  var colores =[color(44,171,254),color(130,117,154),color(255,118,166)]

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

function getPamiColor3(valor) {
  // Paleta de colores
  var colores = [
    color(254,235,44),    // verde
    color(255,161,8),   // naranja
    color(255,7,78),
    color(239,72,30),           // negro
    color(255,0,0),
    color(44,171,254),
    color(130,117,154),
    color(255,118,166)      // rojo
  ];

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


function dibujarVidas() {
    let heartSize = 25;
    let startX = 40;
    let startY = 80; 
    
    push();
    for (let i = 0; i < vidas; i++) {
        let x = startX + i * (heartSize + 10);
        let y = startY;
        
        noStroke();
        fill(255, 0, 0); 
        
        let p = heartSize / 5;
        
        rect(x - p, y - p*2, p, p);
        rect(x + p, y - p*2, p, p);
        
        rect(x - p*2, y - p, p, p);
        rect(x - p, y - p, p, p);
        rect(x, y - p, p, p);
        rect(x + p, y - p, p, p);
        rect(x + p*2, y - p, p, p);
        
        rect(x - p*2, y, p, p);
        rect(x - p, y, p, p);
        rect(x, y, p, p);
        rect(x + p, y, p, p);
        rect(x + p*2, y, p, p);

        rect(x - p, y + p, p, p);
        rect(x, y + p, p, p);
        rect(x + p, y + p, p, p);
        
        rect(x, y + p*2, p, p);
    }
    pop();
}

// Sistema de partículas
class Particula {
    constructor(_x, _y, _color, _isRed = false) {
        this.pos = createVector(_x, _y);
        this.vel = createVector(random(-8, 8), random(-8, 8));
        this.life = 255;
        this.lifespeed = random(1.5, 2.5); // Reducido para más vida
        this.size = random(15, 25); // Aumentado el tamaño
        this.color = _color;
        this.isRed = _isRed;
    }
    
    update() {
        this.pos.add(this.vel);
        this.life -= this.lifespeed;
        this.size = map(this.life, 255, 0, this.isRed ? 25 : 22, 0); // Tamaño máximo aumentado
    }
    
    display() {
        push();
        noStroke();
        fill(red(this.color), green(this.color), blue(this.color), this.life);
        rectMode(CENTER);
        rect(this.pos.x, this.pos.y, this.size, this.size);
        pop();
    }
    
    isDead() {
        return this.life <= 0;
    }
}

function crearParticulasRojas(_x, _y, cantidad = 15) {
    for (let i = 0; i < cantidad; i++) {
        let c = color(255, random(0, 50), 0);
        particulasRojas.push(new Particula(_x, _y, c, true));
    }
}

function crearParticulasColores(_x, _y, cantidad = 20) {
    for (let i = 0; i < cantidad; i++) {
        let c = getPamiColor3(random(1));
        particulasColores.push(new Particula(_x, _y, c, false));
    }
}

function actualizarParticulas() {
    for (let i = particulasRojas.length - 1; i >= 0; i--) {
        particulasRojas[i].update();
        if (particulasRojas[i].isDead()) {
            particulasRojas.splice(i, 1);
        }
    }
    
    for (let i = particulasColores.length - 1; i >= 0; i--) {
        particulasColores[i].update();
        if (particulasColores[i].isDead()) {
            particulasColores.splice(i, 1);
        }
    }
}

function dibujarParticulas() {
    for (let p of particulasRojas) {
        p.display();
    }
    for (let p of particulasColores) {
        p.display();
    }
}

