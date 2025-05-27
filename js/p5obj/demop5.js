
class Demop5 {
    constructor() {

        this.name = "Demop5";
        this.dir = "Demop5";
        this.localUniformsNames = [];
        this.localUniformsValues = [];
        this.loaded = false;
        this.generate = true;

    }
    setup() {
      
       
    }
   
    draw(_ps) {
		_ps.fill(genR(255),genR(255),genR(255));
		
		_ps.ellipse(genR(windowWidth),genR(windowHeight),genR(100),genR(100));
    }
    update() {
       
    
    }
    
}


