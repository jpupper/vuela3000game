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

let sh;
let pg;


let seqStart ;
let pixelFont;

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
  durgameover = 3000; // 3 segundos obligatorio
  ltgameover = millis();
  puntomanager.puntos = 0;
  vidas = 3;
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
    dibujarTutorial();
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
        pantalla = 4; // Ir a tutorial
        lttutorial = millis();
      }
      if(pantalla == 2 || pantalla == 3){
        if (millis() - ltgameover > durgameover) {
            restart();
        }
      }
    }
}

function mousePressed() {
  if (pantalla == 0) {
    pantalla = 4; // Ir a tutorial
    lttutorial = millis();
  }
  if (pantalla == 2 || pantalla == 3) {
    if (millis() - ltgameover > durgameover) {
        restart();
    }
  }
}

function touchPressed(){
  if (pantalla == 0) {
    pantalla = 4; // Ir a tutorial
    lttutorial = millis();
  }
  if (pantalla == 2 || pantalla == 3) {
    if (millis() - ltgameover > durgameover) {
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
  
  actualizarParticulas();
  dibujarParticulas();
  
  dibujarVidas();

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
  // Marco exterior NEGRO
  fill(0);
  rect(centerX, centerY, marco + 60, marco + 60);
  // Marco medio BLANCO
  fill(255);
  rect(centerX, centerY, marco + 40, marco + 40);
  // Marco interior COLOR (morado)
  fill(130, 117, 154);
  rect(centerX, centerY, marco, marco);
  
  // Formas geométricas variadas en diferentes vértices
  let colorIndex = floor(t * 2) % 5;
  let colores = [
    color(254, 235, 44),
    color(255, 161, 8),
    color(255, 7, 78),
    color(44, 171, 254),
    color(130, 117, 154)
  ];
  
  let boxSize = marco * 0.08;
  
  // Esquina superior izquierda - cuadrados rotados
  for (let i = 0; i < 3; i++) {
    push();
    translate(centerX - marco * 0.35 + i * boxSize * 1.5, centerY - marco * 0.4);
    rotate(t + i * 0.5);
    fill(colores[(i + colorIndex) % 5]);
    rect(0, 0, boxSize, boxSize);
    pop();
  }
  
  // Esquina superior derecha - triángulos
  for (let i = 0; i < 3; i++) {
    let x = centerX + marco * 0.25 + i * boxSize * 1.2;
    let y = centerY - marco * 0.4;
    fill(colores[(i + colorIndex + 2) % 5]);
    triangle(x, y - boxSize/2, x - boxSize/2, y + boxSize/2, x + boxSize/2, y + boxSize/2);
  }
  
  // Esquina inferior izquierda - círculos pixelados
  for (let i = 0; i < 3; i++) {
    let x = centerX - marco * 0.35 + i * boxSize * 1.5;
    let y = centerY + marco * 0.35;
    fill(colores[(i + colorIndex + 3) % 5]);
    let p = boxSize / 4;
    rect(x - p, y - p, p, p);
    rect(x, y - p, p, p);
    rect(x + p, y - p, p, p);
    rect(x - p, y, p, p);
    rect(x + p, y, p, p);
    rect(x - p, y + p, p, p);
    rect(x, y + p, p, p);
    rect(x + p, y + p, p, p);
  }
  
  // Esquina inferior derecha - rectángulos verticales
  for (let i = 0; i < 3; i++) {
    let x = centerX + marco * 0.25 + i * boxSize * 1.2;
    let y = centerY + marco * 0.35;
    fill(colores[(i + colorIndex + 1) % 5]);
    rect(x, y, boxSize * 0.6, boxSize * 1.5);
  }
  
  // Título VUELAPELUCAS 3000
  textFont(pixelFont);
  textAlign(CENTER, CENTER);
  textSize(marco * 0.045);
  fill(254, 235, 44);
  text("VUELAPELUCAS", centerX, centerY - marco * 0.45);
  fill(255, 161, 8);
  text("3000", centerX, centerY - marco * 0.38);
  
  // Contenedor para texto PERDISTE
  let containerW = marco * 0.85;
  let containerH = marco * 0.28;
  let containerY = centerY - marco * 0.15;
  
  // Contenedor animado con colores
  let containerColorIndex = floor(t * 2) % 5;
  fill(colores[containerColorIndex]);
  rect(centerX, containerY, containerW + 20, containerH + 20);
  fill(255);
  rect(centerX, containerY, containerW + 10, containerH + 10);
  fill(0);
  rect(centerX, containerY, containerW, containerH);
  
  // Texto PERDISTE con letras alternando blanco/negro
  textFont(pixelFont);
  textAlign(CENTER, CENTER);
  let palabra = "PERDISTE";
  textSize(marco * 0.08);
  
  // Dibujar cada letra con color alternado
  let totalWidth = textWidth(palabra);
  let startX = centerX - totalWidth / 2;
  let currentX = startX;
  
  for (let i = 0; i < palabra.length; i++) {
    let charCol = (i + floor(t * 3)) % 2 == 0 ? color(255) : color(254, 235, 44);
    fill(charCol);
    let charW = textWidth(palabra[i]);
    text(palabra[i], currentX + charW/2, containerY);
    currentX += charW;
  }
  
  // Mostrar solo el número del puntaje (sin la palabra PUNTOS)
  textFont(pixelFont);
  let puntajeStr = str(puntomanager.puntos);
  textSize(marco * 0.06);
  let puntajeCharWidth = marco * 0.07;
  let startPuntajeX = centerX - (puntajeStr.length * puntajeCharWidth) / 2;
  let puntajeY = centerY + marco * 0.05;
  
  for (let i = 0; i < puntajeStr.length; i++) {
    let charCol = (i + floor(t * 4)) % 2 == 0 ? color(255, 161, 8) : color(254, 235, 44);
    fill(charCol);
    text(puntajeStr[i], startPuntajeX + i * puntajeCharWidth, puntajeY);
  }

  let elapsedTime = millis() - ltgameover;
  let waitTime = durgameover;

  let boxY = centerY + marco * 0.25;
  
  if (elapsedTime > waitTime) {
    // Contenedor para REINICIAR
    let btnW = marco * 0.5;
    let btnH = marco * 0.15;
    let btnColorIndex = floor(t * 3) % 5;
    
    fill(colores[btnColorIndex]);
    rect(centerX, boxY, btnW + 20, btnH + 20);
    fill(255);
    rect(centerX, boxY, btnW + 10, btnH + 10);
    fill(255, 7, 78);
    rect(centerX, boxY, btnW, btnH);
    
    textFont(pixelFont);
    textAlign(CENTER, CENTER);
    let reiniciarText = "REINICIAR";
    textSize(marco * 0.045);
    
    let totalWidthReiniciar = textWidth(reiniciarText);
    let startXReiniciar = centerX - totalWidthReiniciar / 2;
    let currentXReiniciar = startXReiniciar;
    
    for (let i = 0; i < reiniciarText.length; i++) {
      let charCol = (i + floor(t * 5)) % 2 == 0 ? color(0) : color(255);
      fill(charCol);
      let charW = textWidth(reiniciarText[i]);
      text(reiniciarText[i], currentXReiniciar + charW/2, boxY);
      currentXReiniciar += charW;
    }
  } else {
    fill(100);
    textSize(marco * 0.06);
    text("ESPERA " + ceil((waitTime - elapsedTime)/1000), centerX, boxY);
  }
  
  pop();
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
  // Marco exterior NEGRO
  fill(0);
  rect(centerX, centerY, marco + 60, marco + 60);
  // Marco medio BLANCO
  fill(255);
  rect(centerX, centerY, marco + 40, marco + 40);
  // Marco interior COLOR (morado)
  fill(130, 117, 154);
  rect(centerX, centerY, marco, marco);
  
  // Formas geométricas variadas en diferentes vértices
  let colorIndex = floor(t * 3) % 5;
  let colores = [
    color(254, 235, 44),
    color(255, 161, 8),
    color(255, 7, 78),
    color(44, 171, 254),
    color(0, 255, 100)
  ];
  
  let boxSize = marco * 0.08;
  
  // Esquina superior izquierda - estrellas pixeladas
  for (let i = 0; i < 3; i++) {
    let x = centerX - marco * 0.35 + i * boxSize * 1.5;
    let y = centerY - marco * 0.4;
    fill(colores[(i + colorIndex) % 5]);
    let p = boxSize / 5;
    rect(x, y - p*2, p, p);
    rect(x - p, y - p, p, p);
    rect(x, y - p, p, p);
    rect(x + p, y - p, p, p);
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
  
  // Esquina superior derecha - diamantes
  for (let i = 0; i < 3; i++) {
    let x = centerX + marco * 0.25 + i * boxSize * 1.2;
    let y = centerY - marco * 0.4;
    fill(colores[(i + colorIndex + 2) % 5]);
    let p = boxSize / 4;
    rect(x, y - p*2, p, p);
    rect(x - p, y - p, p, p);
    rect(x, y - p, p, p);
    rect(x + p, y - p, p, p);
    rect(x - p*2, y, p, p);
    rect(x + p*2, y, p, p);
    rect(x - p, y + p, p, p);
    rect(x, y + p, p, p);
    rect(x + p, y + p, p, p);
    rect(x, y + p*2, p, p);
  }
  
  // Esquina inferior izquierda - cuadrados con rotación
  for (let i = 0; i < 3; i++) {
    push();
    translate(centerX - marco * 0.35 + i * boxSize * 1.5, centerY + marco * 0.35);
    rotate(t * 2 + i * 0.7);
    fill(colores[(i + colorIndex + 3) % 5]);
    rect(0, 0, boxSize, boxSize);
    pop();
  }
  
  // Esquina inferior derecha - triángulos invertidos
  for (let i = 0; i < 3; i++) {
    let x = centerX + marco * 0.25 + i * boxSize * 1.2;
    let y = centerY + marco * 0.35;
    fill(colores[(i + colorIndex + 1) % 5]);
    triangle(x, y + boxSize/2, x - boxSize/2, y - boxSize/2, x + boxSize/2, y - boxSize/2);
  }
  
  // Título VUELAPELUCAS 3000
  textFont(pixelFont);
  textAlign(CENTER, CENTER);
  textSize(marco * 0.045);
  fill(44, 171, 254);
  text("VUELAPELUCAS", centerX, centerY - marco * 0.45);
  fill(0, 255, 100);
  text("3000", centerX, centerY - marco * 0.38);
  
  // Contenedor para texto GANASTE
  let containerW = marco * 0.7;
  let containerH = marco * 0.2;
  let containerY = centerY - marco * 0.15;
  
  // Contenedor animado con colores
  let containerColorIndex = floor(t * 3) % 5;
  fill(colores[containerColorIndex]);
  rect(centerX, containerY, containerW + 20, containerH + 20);
  fill(255);
  rect(centerX, containerY, containerW + 10, containerH + 10);
  fill(0);
  rect(centerX, containerY, containerW, containerH);
  
  // Texto GANASTE con letras alternando colores
  textFont(pixelFont);
  textAlign(CENTER, CENTER);
  let palabra = "GANASTE";
  textSize(marco * 0.08);
  
  let totalWidthGanaste = textWidth(palabra);
  let startXGanaste = centerX - totalWidthGanaste / 2;
  let currentXGanaste = startXGanaste;
  
  for (let i = 0; i < palabra.length; i++) {
    let charCol = (i + floor(t * 4)) % 2 == 0 ? color(254, 235, 44) : color(255, 161, 8);
    fill(charCol);
    let charW = textWidth(palabra[i]);
    text(palabra[i], currentXGanaste + charW/2, containerY);
    currentXGanaste += charW;
  }
  
  // Mostrar solo el número 3000 con animación
  textFont(pixelFont);
  let puntajeStr = "3000";
  textSize(marco * 0.06);
  let puntajeCharWidth = marco * 0.07;
  let startPuntajeX = centerX - (puntajeStr.length * puntajeCharWidth) / 2;
  let puntajeY = centerY + marco * 0.05;
  
  for (let i = 0; i < puntajeStr.length; i++) {
    let charCol = (i + floor(t * 5)) % 2 == 0 ? color(44, 171, 254) : color(0, 255, 100);
    fill(charCol);
    text(puntajeStr[i], startPuntajeX + i * puntajeCharWidth, puntajeY);
  }
  
  // Contenedor para botón JUGAR DE NUEVO
  let btnY = centerY + marco * 0.25;
  let btnW = marco * 0.65;
  let btnH = marco * 0.15;
  let btnColorIndex = floor(t * 4) % 5;
  
  fill(colores[btnColorIndex]);
  rect(centerX, btnY, btnW + 20, btnH + 20);
  fill(255);
  rect(centerX, btnY, btnW + 10, btnH + 10);
  fill(0, 255, 100);
  rect(centerX, btnY, btnW, btnH);
  
  textFont(pixelFont);
  fill(255);
  textSize(marco * 0.04);
  text("JUGAR DE NUEVO", centerX, btnY);
  
  let btnText = "JUGAR DE NUEVO";
  textSize(marco * 0.06);
  
  let totalWidthBtn = textWidth(btnText);
  let startXBtn = centerX - totalWidthBtn / 2;
  let currentXBtn = startXBtn;
  
  for (let i = 0; i < btnText.length; i++) {
    let charCol = (i + floor(t * 6)) % 2 == 0 ? color(255) : color(0);
    fill(charCol);
    let charW = textWidth(btnText[i]);
    text(btnText[i], currentXBtn + charW/2, btnY);
    currentXBtn += charW;
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

function dibujarTutorial() {
    dibujarFondo();
    
    let t = millis() * 0.001;
    let centerX = width / 2;
    let centerY = height / 2;
    
    let elapsedTime = millis() - lttutorial;
    let remainingTime = ceil((durtutorial - elapsedTime) / 1000);
    
    if (elapsedTime > durtutorial) {
        pantalla = 1;
        return;
    }

    push();
    rectMode(CENTER);
    textAlign(CENTER, CENTER);
    textFont(pixelFont);

    let marco = min(width, height) * 0.8;
    // Marco exterior NEGRO
    fill(0);
    rect(centerX, centerY, marco + 60, marco + 60);
    // Marco medio BLANCO
    fill(255);
    rect(centerX, centerY, marco + 40, marco + 40);
    // Marco interior COLOR (morado)
    fill(130, 117, 154);
    rect(centerX, centerY, marco, marco);

    // Contador en la parte superior
    textSize(marco * 0.15);
    let contadorStr = str(remainingTime);
    for (let i = 0; i < contadorStr.length; i++) {
        let charCol = (i + floor(t * 4)) % 2 == 0 ? color(254, 235, 44) : color(255, 161, 8);
        fill(charCol);
        text(contadorStr[i], centerX + (i - contadorStr.length/2 + 0.5) * marco * 0.1, centerY - marco * 0.38);
    }

    // Sección 1: PERSONAJE BUENO (arriba)
    let section1Y = centerY - marco * 0.15;
    
    // Texto a la izquierda
    textAlign(LEFT, CENTER);
    let leftX = centerX - marco * 0.35;
    
    let texto1 = "PERSONAJE";
    textSize(marco * 0.07);
    let charWidth1 = marco * 0.045;
    for (let i = 0; i < texto1.length; i++) {
        let charCol = (i + floor(t * 3)) % 2 == 0 ? color(255) : color(254, 235, 44);
        fill(charCol);
        text(texto1[i], leftX + i * charWidth1, section1Y - marco * 0.05);
    }
    
    let texto2 = "BUENO";
    for (let i = 0; i < texto2.length; i++) {
        let charCol = (i + floor(t * 3)) % 2 == 0 ? color(255) : color(254, 235, 44);
        fill(charCol);
        text(texto2[i], leftX + i * charWidth1, section1Y + marco * 0.02);
    }
    
    fill(255);
    textSize(marco * 0.045);
    text("(SACARLE", leftX, section1Y + marco * 0.08);
    text("LA PELUCA)", leftX, section1Y + marco * 0.12);
    
    // PNG a la derecha - Personaje con peluca (tipo 0)
    if (imgsPjs && imgsPjs.length > 0 && imgsPelus && imgsPelus.length > 0) {
        let rightX = centerX + marco * 0.15;
        let charY = section1Y + sin(t * 4) * 5;
        
        let charScale = 0.25;
        let charW = imgsPjs[0].width * charScale;
        let charH = imgsPjs[0].height * charScale;
        
        imageMode(CENTER);
        image(imgsPjs[0], rightX, charY, charW, charH);
        
        // Dibujar peluca volando hacia arriba con animación
        let pelucaW = imgsPelus[0].width * charScale;
        let pelucaH = imgsPelus[0].height * charScale;
        // Animación: la peluca sube y se desvanece
        let pelucaOffset = (t * 50) % 150; // Sube 150 píxeles y se reinicia
        let pelucaAlpha = map(pelucaOffset, 0, 150, 255, 0); // Se desvanece mientras sube
        push();
        tint(255, pelucaAlpha);
        image(imgsPelus[0], rightX, charY - charH/2 - pelucaOffset, pelucaW, pelucaH);
        pop();
        imageMode(CORNER);
    }
    
    // Sección 2: ESQUIVAR POLICIA (abajo izquierda)
    let section2Y = centerY + marco * 0.15;
    
    textAlign(LEFT, CENTER);
    
    let texto3 = "ESQUIVAR";
    textSize(marco * 0.07);
    let charWidth2 = marco * 0.045;
    for (let i = 0; i < texto3.length; i++) {
        let charCol = (i + floor(t * 3.5)) % 2 == 0 ? color(255) : color(255, 7, 78);
        fill(charCol);
        text(texto3[i], leftX + i * charWidth2, section2Y - marco * 0.05);
    }
    
    let texto4 = "POLICIA";
    for (let i = 0; i < texto4.length; i++) {
        let charCol = (i + floor(t * 3.5)) % 2 == 0 ? color(255) : color(255, 7, 78);
        fill(charCol);
        text(texto4[i], leftX + i * charWidth2, section2Y + marco * 0.02);
    }
    
    // PNG a la derecha - Policía (seqRati)
    if (seqRati) {
        let rightX = centerX + marco * 0.15;
        let ratiY = section2Y + sin(t * 5) * 5;
        
        let ratiScale = 0.25; 
        let ratiW = seqRati.getW() * ratiScale;
        let ratiH = seqRati.getH() * ratiScale;
        
        seqRati.update(); 
        
        imageMode(CENTER);
        image(seqRati.getActiveImg(), rightX, ratiY, ratiW, ratiH);
        imageMode(CORNER);
    }
    
    // Sección 3: NAVE Y CONTROLES (centro abajo)
    let section3Y = centerY + marco * 0.38;
    
    // Dibujar la nave
    if (avion) {
        let planeX = centerX - marco * 0.2;
        let planeY = section3Y + sin(t * 6) * 3;
        
        push();
        translate(planeX, planeY);
        
        // Dibujar nave simplificada usando el método display2 del avión
        let tempAvion = new Avion();
        tempAvion.display2(0, 0);
        
        pop();
    }
    
    // Texto instrucciones a la derecha
    textAlign(LEFT, CENTER);
    let instrX = centerX + marco * 0.05;
    
    fill(255);
    textSize(marco * 0.045);
    text("PRESIONA", instrX, section3Y - marco * 0.04);
    text("PARA VOLAR", instrX, section3Y + marco * 0.02);
    
    pop();
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
