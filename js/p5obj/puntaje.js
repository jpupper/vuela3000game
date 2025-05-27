

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
 