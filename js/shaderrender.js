function updateNONglobalUniforms() {
	//Pasar buffers por defecto 

	if (RM.objts.length > 0) {
		for (var i = 1; i < RM.objts.length; i++) {
			if (RM.objts[i] != null && RM.shorojb[i] == 0) {
				RM.objts[i].sh.setUniform("tx", RM.pgs[i - 1]);
			}
		}
	}
	
	
	//HARDCODING PARA FXHASH : 

	//No se que tan bien esta que esto lo haga todos los frames pero bueno. 
	for (let j = 0; j < RM.objts.length; j++) {
		if (RM.objts[j] != null) {
			for (let i = 0; i < RM.objts[j].localUniformsNames.length; i++) {
				for (let k = 0; k < Object.keys(uniforms_fxhash).length; k++) {
					if (RM.objts[j].localUniformsNames[i] == Object.keys(uniforms_fxhash)[k]) {
						RM.objts[j].sh.setUniform(RM.objts[j].localUniformsNames[i], Object.values(uniforms_fxhash)[k]);
					}

					for (let u = 0; u < interface.sliders.length; u++) {
						if (interface.sliders[u].name == Object.keys(uniforms_fxhash)[k] || 
						interface.sliders[u].name == "autoposx" || 
						interface.sliders[u].name == "autoposy" || 
						interface.sliders[u].name == "lerpm") {
							interface.sliders[u].isFxHashControlled = true;
							interface.sliders[u].value = Object.values(uniforms_fxhash)[k];
						}
					}
				}
			}
		}
	}
	
	if(mouseIsPressed){
		lerpmouse+=0.01;
	}else{
		lerpmouse-=0.01;
	}
	lerpmouse = constrain(lerpmouse,0.0,1.0);

}
function updateInterfazTeclas(chr){
	//	console.log("BUTTON PRESSED" + chr);

	if(chr == 'r'){
		//location.reload();
	}
	if (chr == 'b') {
	
	}
     if (chr =='s') {
    const elem = document.getElementById('defaultCanvas0');
    const saveBlob = (function() {
      const a = document.createElement('a');
      document.body.appendChild(a);
      a.style.display = 'none';
      return function saveData(blob, fileName) {
        const url = window.URL.createObjectURL(blob);
        a.href = url;
        a.download = fileName;
        a.click();
        w = windowWidth; h = windowHeight;
        resizeCanvas(w, h);
        gfx.resizeCanvas(w, h);
        elem.style.visibility = "visible";
        };
    }());
    elem.style.visibility = "hidden";
    w = 1920 * 2; h = 1080 * 2;
    resizeCanvas(w, h);
    gfx.resizeCanvas(w, h);
    draw();
    canvas.toBlob((blob) => {
      saveBlob(blob, `pointless-structure-${canvas.width}x${canvas.height}.png`);
    });
  };
	if (!disableDrawInterface) {


		if (chr == 'y') {
			grilla.generate = true;
		}
		if (chr == 'r') {
			//interface.randomizeValues();

		}
		if (chr == 'o') {
			saveToJson();
		}
		if (chr == 'l') {

		}
		if (chr == 'a') {
			//console.log("A");
			//RM.addShader('shaders/generative/circulotest.frag', 0);
		}
		if (chr == 'd' && !disableDrawInterface) {
			interface.drawActive = !interface.drawActive;
		}

		if (chr == 'c') {
			//InstaFractal.rdmColors();
			//fifulim.randomizeValues();
		}

		if (chr == 'b') {
			RM.pgs[0].background(0);

			//RM.clean();
			RM.activeRender = -1;
			interface.cleanSliders();
			background(0);

		}
		//mw = constrain(mw, -0.002, 0.002);

		//console.log("SIZ " + RM.objts.length);

		for (var i = 0; i < 9; i++) {
			if (chr == str(i) && i <= RM.objts.length && i > 0) {
				RM.activeRender = i - 1;
//				console.log("Render active" + chr);
				interface.generateSliders();

				interface.drawActive = true;

			}
		}
	}
	for (var i = 0; i < 9; i++) {
		if (chr == str(i) && i <= RM.objts.length && i > 0) {
			RM.activeRender = i - 1;
		}
	}
}
function highlight() {
	//console.log("HIGHLIGHT");
}
function unhighlight() {
	//console.log("UNHIGHLIGHT");
}
function processFile(file) {
	console.log("processfile");
	console.log(file.name);
	if (file.name.includes(".frag")) {
		/*if (RM.objts.length == 0) {
			RM.addShader(file.data, RM.activeRender + 1);
		} else {
		}*/
		interface.drawActive = false;
		interface.cleanSliders();
		console.log(file.data);
		RM.addShader(file.data, RM.activeRender + 1, file.name);

	} else if (file.name.includes(".json")) {
		loadJSONjp(file.data);
	}
}

function loadJSONjp(filedata) {

	RM.clean();
	let k = 0;

	let GlocalNames = [];
	let GlocalValues = [];

	for (let key in filedata) {
		if (filedata.hasOwnProperty(key)) {
			RM.addShader(filedata[key].dir, k, filedata[key].name);
			let localNames = [];
			let localValues = [];
			let l = 0;
			for (let [key2, value] of Object.entries(filedata[key])) {
				if (l != 0) {
					localNames.push(key2);
					localValues.push(value);
				}
				l++;
			}
			setTimeout(() => {
				if (!disableDrawInterface) {
					interface.cleanSliders();
				}
				for (let i = 0; i < RM.objts.length; i++) {
					for (let o = 0; o < RM.objts[i].localUniformsNames.length; o++) {

						RM.objts[i].localUniformsNames[o] = GlocalNames[i][o + 1];
						//Le pongo el +1 para que no me tome el name como uno de los parametros del shader.
						RM.objts[i].localUniformsValues[o] = GlocalValues[i][o + 1];
					}
				}
				console.log("TERMINO DE SETEAR LOS ARCHIVOS ")
				RM.activeRender = RM.objts.length - 1;
				cargoArchivo = true;
			}, 500);
			GlocalNames.push(localNames);
			GlocalValues.push(localValues);
		}
		k++;
	}
}
function loadJSONonStart(filedata) {
	let coso = loadJSON(filedata, () => {
		loadJSONjp(coso);
	});
}
function loadSaveFile(data) {
	console.log(data);
}
function saveToJson() {
	let json = {}
	for (var k = 0; k < RM.objts.length; k++) {
		json["box" + k] = {};
		json["box" + k].dir = RM.objts[k].dir;
		json["box" + k].name = RM.objts[k].name;
		for (var i = 0; i < RM.objts[k].localUniformsNames.length; i++) {
			json["box" + k][RM.objts[k].localUniformsNames[i]] = RM.objts[k].localUniformsValues[i];
		}
		if (json["box" + k]["data"]) {
			delete json["box" + k]["data"];
		}
	}
	saveJSON(json, 'savefile1.json');
}
function touchStarted() {
	return false;
}
function touchEnded() {
	return false;
}

class RenderManager{
	//var cosos = [];
	
	constructor(){
		this.pgs = [];//ARRAY DE LOS PGRAPHICS
		this.objts = [];//ARRAY DE LOS OBJETOS
		this.shorojb = []; //ESTO ES PARA QUE SEPA SI TIPO TIENE QUE O ACTUALIZAR EL SHADER O EL OBJETO.
		this.activeRender = 0;
	}
	
	clean() {
		this.pgs = [];//ARRAY DE LOS PGRAPHICS
		this.objts = [];//ARRAY DE LOS OBJETOS
		this.shorojb = []; //Array que determina si el objeto es un shader o no (?)
	}

	addShader(dir,index,_name){
		this.objts[index] = new ShaderManager(dir);
		this.objts[index].name = _name;

		let auxpg;
		if (QUADCANVAS) {
			auxpg = createGraphics(windowHeight, windowHeight, WEBGL);
		} else {
			auxpg = createGraphics(windowWidth, windowHeight, WEBGL);
        }
		

		this.pgs.push(auxpg);	
		this.shorojb[index] = 0;

		if (index > this.activeRender) {
			this.activeRender = index;
		}
		
	}	
	addP5draw(obj,index){
		
		if (WEBGL_ON) {
			if (QUADCANVAS) {
				this.pgs[index] = createGraphics(windowHeight, windowHeight, WEBGL);
			} else {
				this.pgs[index] = createGraphics(windowWidth, windowHeight, WEBGL);
			}
		} else {
			if (QUADCANVAS) {
				this.pgs[index] = createGraphics(windowHeight, windowHeight);
			} else {
				this.pgs[index] = createGraphics(windowWidth, windowHeight);
			}
		}

		this.objts[index] = obj;
		this.shorojb[index] = 1;

		if (index > this.activeRender) {
			this.activeRender = index;
		}
	
	}
	resizePG(w, h, index) {
		this.pgs[index].resizeCanvas(w,h);
    }
	resize(){
		for (var i =0; i<this.pgs.length; i++){
			//console.log("RISIZ "+i);
			this.pgs[i].resizeCanvas(windowWidth,windowHeight);
		}
	}

	
	draw(_x,_y,_w,_h){	

		let w = windowWidth;
		let h = windowHeight; 

		if (_w) {
			w = _w;
		}

		if (_h) {
			h = _h;
		}

		let x = 0; 
		let y = 0;

		if (_x) {
			x = _x;
		}

		if (_y) {
			y = _y;
		}
		this.updateDrawOnBuffers();
		if (this.pgs.length > 0 && this.pgs[this.activeRender] != null) {
			image(this.pgs[this.activeRender], x, y, w, h); 	
		}	
	}
	updateDrawOnBuffers() {
		for (var i = 0; i < this.pgs.length; i++) {
			if (this.shorojb[i] == 1) {
				if (this.objts[i] != null) {
					this.objts[i].draw(this.pgs[i]);
				}
			} else if (this.shorojb[i] == 0) {
				if (this.objts[i].loaded) {
					this.pgs[i].shader(this.objts[i].sh);
				}
				this.pgs[i].rect(windowWidth, windowHeight, 0, 0);
			}
		}
    }
	update(){
		for (var i =0; i<this.objts.length; i++){		
			if (this.shorojb[i] == 1) {
				if (this.objts[i] != null) {
					this.objts[i].update();
				}
			}else if(this.shorojb[i] == 0){
				this.objts[i].update(this.pgs[i]);
			}
		}
	}
	
	//Bueno que lea todos los nombres y que setee a todos los nombres que coindicen con eso ya fue
	setValue(name,val,gui){		
		//No se que tan bien esta que esto lo haga todos los frames pero bueno. 
		for (let j = 0; j < this.objts.length; j++) {
			if (this.objts[j] != null) {
				for (let i = 0; i < this.objts[j].localUniformsNames.length; i++) {
					if (this.objts[j].localUniformsNames[i] == name) {
						//RM.objts[j].sh.setUniform(RM.objts[j].localUniformsNames[i], Object.values(uniforms_fxhash)[k]);
						this.objts[j].localUniformsValues[i] = val;
						this.objts[i].sh.setUniform(name,val);
					}
					/*if(!gui){
						for (let u = 0; u < interface.sliders.length; u++) {
							if (interface.sliders[u].name == name) {
								interface.sliders[u].isFxHashControlled = true;
								interface.sliders[u].value = val;
							}
						}							
					}*/
				}
			}
		}
	}
}

class ShaderManager{
	constructor(dir) {
		this.loaded = false;
		this.reservedWords = ["feedback","resolution","time",
							 "mouse","tx","tx2","tx3","let","mousePressed",
		"tp1","tp2","tp3","tp4","tp5","touchesCount","mousebutton","lerpm"];
		
		
		if (!this.loaded) {
			this.localUniformsNames = [];
			this.localUniformsValues = [];
			this.dir = dir;
			
			this.lerpm = 0.0;
           

			this.name = dir;
			//pasarAarray();
			loadStrings(dir, (result) => {
				let localUniformsValues = [];
				let localUniformsNames = [];
				for (let i = 0; i < result.length; i++) {
					let nombreUniform;
					let words = result[i].split(' ');
					//localUniformsNames.push(words[2]);
					//localUniformsValues.push(genR(1));
					
					let noReservedWord = false;
					for(let k=0; k<this.reservedWords.length; k++){
						if(words[2] == this.reservedWords[k]){
							noReservedWord = true;
						}
					}
					if (result[i].includes("uniform") && !noReservedWord){
						localUniformsNames.push(words[2]);
						localUniformsValues.push(0.5);
					}
				}
				//console.log("TERMINO EL CALLBACK");
				this.localUniformsNames = localUniformsNames;
				this.localUniformsValues = localUniformsValues;
			});0
			this.sh = loadShader('shaders/base.vert', this.dir, () => {
				this.loaded = true;
			});
		}
	}
	setup(){
		this.loadAllVariables();
	}

	loadAllVariables(dir) {
		if (!this.loaded) {
			this.localUniformsNames = [];
			this.localUniformsValues = [];
			this.dir = dir;

			this.name = dir;
			//pasarAarray();
			loadStrings(dir, (result) => {
				let localUniformsValues = [];
				let localUniformsNames = [];
				for (let i = 0; i < result.length; i++) {
					let nombreUniform;
					let words = result[i].split(' ');
					//localUniformsNames.push(words[2]);
					//localUniformsValues.push(genR(1));
					
					let noReservedWord = false;
					for(let k=0; k<this.reservedWords.length; k++){
						if(words[2] == this.reservedWords[k]){
							noReservedWord = true;
						}
					}
					if (result[i].includes("uniform") && !noReservedWord){
						localUniformsNames.push(words[2]);
						localUniformsValues.push(0.5);
					}
				}
				this.localUniformsNames = localUniformsNames;
				this.localUniformsValues = localUniformsValues;
			});
			this.sh = loadShader('shaders/base.vert', this.dir, () => {
				this.loaded = true;
			});
		}	
	}






	update(_pg) {
		//This are the global uniforms. The ones for all shaders
		//Estas son los uniforms globales, las que entran en todos los shaders
		if (this.loaded) {
			this.sh.setUniform("feedback",_pg) 
			this.sh.setUniform("resolution", [width, height]) 
			this.sh.setUniform("time", millis()*.001) 
			this.sh.setUniform("mouse", [mouseX / width, mouseY / height])
			if (touches.length > 0) {
				this.sh.setUniform("tp1", [touches[0].x / width, touches[0].y / height]);
			}
			if (touches.length > 1) {
				this.sh.setUniform("tp2", [touches[1].x / width, touches[1].y / height]);
			}
			if (touches.length > 2) {
				this.sh.setUniform("tp3", [touches[2].x / width, touches[2].y / height]);
			}
			if (touches.length > 3) {
				this.sh.setUniform("tp4", [touches[3].x / width, touches[3].y / height]);
			}
			if (touches.length > 4) {
				this.sh.setUniform("tp5", [touches[4].x / width, touches[4].y / height]);
			}
			this.sh.setUniform("touchesCount", touches.length);
			if(mouseIsPressed){
				this.sh.setUniform("mousePressed", 1);
			}else{
				this.sh.setUniform("mousePressed", 0);
			}

			if(mouseIsPressed){
				this.sh.setUniform("mousePressed", 1);

				/*
				if (mouseButton === LEFT) {
					this.sh.setUniform("mouseButton", 0.0);
					console.log("LEFT");
				}else if(mouseButton === CENTER){
					this.sh.setUniform("mouseButton", 1.0);
					console.log("CENTER");
				}*/
			}else{
				this.sh.setUniform("mousePressed", 0);
			}
		
			
			if (mouseIsPressed) {
                this.lerpm += 0.01;
            } else {
                this.lerpm -= 0.03;
            }
			this.lerpm = constrain(this.lerpm,0.0,1.0);
			this.sh.setUniform("lerpm", this.lerpm);
			for (var i = 0; i < this.localUniformsNames.length; i++) {
				this.sh.setUniform(this.localUniformsNames[i],
								   this.localUniformsValues[i]);
			}
		}
	}
}
