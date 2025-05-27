//ooNWNcmCSWx7bdGJFnKRoqMXK8CojUdAersLbTrKktFe5T3Hkdq

class GenerativeFlap{

	constructor(){
		this.cosos = [];
		this.name = "GenerativeFlap";
		this.dir = "Pamilo";
		this.duration = 700;
		this.lasttime = 0;
    this.pamilodraws = [];
  
    this.pamiloparticles = new Pamiloparticles();
		this.localUniformsNames = [];
		this.localUniformsValues = [];
        this.loaded = false;
        this.generate = true;
        
    
        /*this.RM = new RenderManager();
        this.RM.addShader('shaders/generative/papel2.frag', 0, "papel2.frag");

        this.RM2 = new RenderManager();
        this.RM2.addShader('shaders/generative/noisify1.frag', 0, "noisify.frag");
        */
        this.backgroundimage = loadImage("img/background.png");
        this.p5pfp = createGraphics(windowWidth,windowHeight);
        this.p5pg = createGraphics(windowWidth, windowHeight);

       
        this.noisy = createGraphics(windowWidth,windowHeight);
    }

    setup() {

    }
    resize(){
     // this.p5pfp.resizeCanvas(windowWidth,windowHeight);
      this.p5pg.resizeCanvas(windowWidth,windowHeight);
      //console.log("resizeaaaaaaa");
    }
    draw(_ps) {		
		  if(!this.loaded){				
            this.RM.update();
            this.RM.updateDrawOnBuffers();
            this.updateNoise(this.noisy);
            this.loaded = true;
            document.getElementById("loading").style.visibility = "hidden";
            this.RM2.update();
            this.RM2.updateDrawOnBuffers();
      }
      this.pamiloparticles.draw(this.p5pg);
      this.pamiloparticles.update();
      _ps.image(this.p5pg,0,0,width,height);
      if(this.pamiloparticles.bgdraw){
        _ps.image(this.RM2.pgs[0],0,0,width,height);
      }
      _ps.fill(255,0,0);
      _ps.ellipse(mouseX,mouseY,30,30);
      
    }
    update() {
       
    }
}
