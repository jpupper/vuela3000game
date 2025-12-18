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


let seqStart ;

let imgsPelus =[];
let imgsPjs =[];
let debugmode = false;


let seqRati;

function preload(){
  sh = loadShader("shaders/base.vert","shaders/papel3.frag");
  seqStart = new pngSequence("img/anistart",3,0);
  for(let i=0;i<10;i++){
    imgsPjs[i] = loadImage("img/personajes/"+i+".PNG");
  }
  for(let i=0;i<12;i++){
    imgsPelus[i] = loadImage("img/pelucas/"+i+".PNG");
  }
  seqRati = new pngSequence("img/rati",2,0);
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
  durgameover = 1000;
  ltgameover = millis();
  puntomanager.puntos = 0;
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
    if(keyCode === 34 || keyCode === 33 || key === ' '){
      if(pantalla == 1){
        avion.jump();
      }
      if(pantalla == 0){
        pantalla = 1;
      }
      if(pantalla == 2 || pantalla == 3){
        restart();
      }
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
  seqStart.update();
  seqStart.speed = 0.1;
  //seqStart.display();
  imageMode(CENTER);
  if(windowWidth > windowHeight){
    image(seqStart.getActiveImg(),windowWidth/2,windowHeight/2,windowHeight,windowHeight);
  }else{
    image(seqStart.getActiveImg(),windowWidth/2,windowHeight/2,windowWidth,windowWidth);
  }
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
  
  if(puntomanager.puntos >= 3000){
    Ganar();
  }
}

function dibujarGameOver() {
  dibujarFondo();
  
  let t = millis() * 0.001;
  let centerX = width / 2;
  let centerY = height / 2;
  
  push();
  rectMode(CENTER);
  textAlign(CENTER, CENTER);
  
  let marco = min(width, height) * 0.8;
  fill(0);
  rect(centerX, centerY, marco + 40, marco + 40);
  fill(255);
  rect(centerX, centerY, marco + 20, marco + 20);
  fill(130, 117, 154);
  rect(centerX, centerY, marco, marco);
  
  let colorIndex = floor(t * 2) % 5;
  let colores = [
    color(254, 235, 44),
    color(255, 161, 8),
    color(255, 7, 78),
    color(44, 171, 254),
    color(130, 117, 154)
  ];
  
  let boxSize = marco * 0.15;
  let spacing = boxSize * 1.3;
  let startX = centerX - spacing * 2;
  let topY = centerY - marco * 0.35;
  
  for (let i = 0; i < 5; i++) {
    let col = colores[(i + colorIndex) % 5];
    fill(0);
    rect(startX + i * spacing, topY, boxSize + 10, boxSize + 10);
    fill(col);
    rect(startX + i * spacing, topY, boxSize, boxSize);
  }
  
  textSize(marco * 0.12);
  let textCol = floor(t * 3) % 2 == 0 ? color(0) : color(255);
  fill(textCol);
  text("PERDISTE", centerX, centerY - marco * 0.1);
  
  let boxW = marco * 0.5;
  let boxH = marco * 0.2;
  let boxY = centerY + marco * 0.15;
  
  fill(getPamiColor(noise(t * 0.5 + 123)));
  rect(centerX, boxY, boxW + 20, boxH + 20);
  fill(255, 7, 78);
  rect(centerX, boxY, boxW, boxH);
  fill(0);
  textSize(marco * 0.08);
  text("REINICIAR", centerX, boxY);
  
  pop();

  if(millis() - ltgameover > durgameover){
    restart();
  }
}

function dibujarVictoria() {
  dibujarFondo();
  
  let t = millis() * 0.001;
  let centerX = width / 2;
  let centerY = height / 2;
  
  push();
  rectMode(CENTER);
  textAlign(CENTER, CENTER);
  
  let marco = min(width, height) * 0.8;
  fill(0);
  rect(centerX, centerY, marco + 40, marco + 40);
  fill(255);
  rect(centerX, centerY, marco + 20, marco + 20);
  fill(130, 117, 154);
  rect(centerX, centerY, marco, marco);
  
  let colorIndex = floor(t * 3) % 5;
  let colores = [
    color(254, 235, 44),
    color(255, 161, 8),
    color(255, 7, 78),
    color(44, 171, 254),
    color(0, 255, 100)
  ];
  
  let boxSize = marco * 0.15;
  let spacing = boxSize * 1.3;
  let startX = centerX - spacing * 2;
  let topY = centerY - marco * 0.35;
  
  for (let i = 0; i < 5; i++) {
    let col = colores[(i + colorIndex) % 5];
    fill(0);
    rect(startX + i * spacing, topY, boxSize + 10, boxSize + 10);
    fill(col);
    rect(startX + i * spacing, topY, boxSize, boxSize);
  }
  
  textSize(marco * 0.12);
  let textCol = floor(t * 4) % 2 == 0 ? color(254, 235, 44) : color(255, 161, 8);
  fill(textCol);
  text("¡GANASTE!", centerX, centerY - marco * 0.1);
  
  let avionSize = marco * 0.15;
  let avionX = centerX - marco * 0.25;
  let avionY = centerY + sin(t * 3) * 20;
  
  push();
  translate(avionX, avionY);
  fill(getPamiColor2(noise(t * 2)));
  rect(0, 0, avionSize, avionSize * 0.5);
  fill(255);
  triangle(avionSize/2, -avionSize/4, avionSize/2, avionSize/4, avionSize, 0);
  pop();
  
  let boxW = marco * 0.4;
  let boxH = marco * 0.18;
  let boxX = centerX + marco * 0.15;
  let boxY = centerY + marco * 0.05;
  
  fill(getPamiColor(noise(t * 0.5)));
  rect(boxX, boxY, boxW + 20, boxH + 20);
  fill(44, 171, 254);
  rect(boxX, boxY, boxW, boxH);
  fill(254, 235, 44);
  textSize(marco * 0.1);
  text("3000", boxX, boxY);
  
  let btnY = centerY + marco * 0.3;
  fill(255, 118, 166);
  rect(centerX, btnY, boxW + 20, boxH + 20);
  fill(255);
  rect(centerX, btnY, boxW, boxH);
  fill(255, 7, 78);
  textSize(marco * 0.07);
  text("JUGAR DE NUEVO", centerX, btnY);
  
  let stars = 8;
  for(let i = 0; i < stars; i++){
    let angle = (t * 2 + i * TWO_PI / stars);
    let radius = marco * 0.35;
    let sx = centerX + cos(angle) * radius;
    let sy = centerY + sin(angle) * radius;
    let starSize = 15 + sin(t * 5 + i) * 5;
    fill(colores[i % 5]);
    rect(sx, sy, starSize, starSize);
  }
  
  pop();

  if(millis() - ltgameover > durgameover * 3){
    restart();
  }
}

function resize(){
  createCanvas(windowWidth, windowHeight);
  pg = createGraphics(windowWidth ,windowHeight,WEBGL);
  pg.translate(-windowWidth/2,-windowHeight/2)
}
function mousePressed() {
  if (pantalla == 0) {
    pantalla = 1;
  }
  if (pantalla == 2 || pantalla == 3) {
    restart();
  }
}
function touchPressed(){
  if (pantalla == 0) {
    pantalla = 1;
  }
  if (pantalla == 2 || pantalla == 3) {
    restart();
  }
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
