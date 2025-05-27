



//GRACIAS CHAT GPT !!!
function interpolateFrequency(note1, note2, interpolation) {
	// obtener la frecuencia de las notas
	const freq1 = Tone.Frequency(note1).toFrequency();
	const freq2 = Tone.Frequency(note2).toFrequency();
  
	// realizar la interpolación y obtener la frecuencia resultante
	//const result = Tone.Frequency.lerp(freq1, freq2, interpolation);
	const result = freq1 + (freq2 - freq1) * interpolation;
	// devolver la frecuencia resultante
	return result;
}
class jpsonidos{
    constructor(){
        
        this.setSinteDisparo();
        this.setSinteDisparoEnemigo();
        this.setSinteEscudo();
        this.setSintegrabp();
        this.setSinteDisparoJefe();
        this.setSintemovimiento();
        this.setSinteGameOver();
        this.setSinteStart();
        this.sinteexplosion = new Tone.DuoSynth({
            oscillator: {
                type: "square"
            },
            envelope: {
                attack: 0.1,
                decay : 0.9,
                release:0.9
            }
        }).toDestination();
        this.interpolationxplotion = random(1);

        this.setSinteVictoria();
    }

    setSinteVictoria(){

        this.sintegamewin  = new Tone.Synth({
            oscillator: {
                type: "fatcustom",
                partials : [0.2, 1, 0, 0.5, 0.1],
                spread : 60,
                count : 3
            },
            envelope: {
                attack: 1.0,
                decay: 1.6,
                sustain: 0.1,
                release: 0.25
            }
        });

        this.sintegamewin.volume.value = 5;
        this.sintegamewin_feedback = new Tone.FeedbackDelay("6n", 0.45);
        this.sintegamewin.connect(this.sintegamewin_feedback);
        this.sintegamewin_feedback.toDestination();
    
    }

    setSinteDisparo(){
		const lowPass = new Tone.Filter({
			type: 'lowpass',
			frequency: 3500
		});
		
		const autoWah = new Tone.AutoWah(10, 6, -50);
		this.sintedisparo = new Tone.MembraneSynth({
			pitchDecay: 2.01,
			octaves: Math.floor(8), // Aumenta las octavas para un sonido más agudo
			oscillator: {
				type: "sine"
			},
			envelope: {
				attack: 0.8,
				decay: 0.3,
				sustain: random(0.01,0.08),
				release: 4,
				attackCurve: "exponential"
			}
		});
		
		this.sintedisparo.connect(lowPass);
		lowPass.connect(autoWah);
		const reverb = new Tone.Reverb({
			decay: 2.5,
			wet: 0.1
		}).toDestination();
		autoWah.connect(reverb);
		const volume = new Tone.Volume(8);
		reverb.connect(volume);
		volume.toDestination();
	
		this.interpolationpj = random(1);
		
	
    }
    setSinteDisparoEnemigo(){
         this.sintedisparoenemigo = new Tone.MembraneSynth({
                  pitchDecay : 0.3 ,
                  octaves : 10 ,
                  oscillator : {
                  type : "sine"
                  } ,
                  envelope : {
                      attack : 0.1 ,
                      decay : 0.4 ,
                      sustain : 0.01 ,
                      release : 1.4 ,
                      attackCurve : "exponential"
                  }
              }).toDestination();

        this.interpolationenemy = random(1);
    }
    setSinteDisparoJefe(){
        this.sintedisparojefe = new Tone.MembraneSynth({
                 pitchDecay : 0.3 ,
                 octaves : 3 ,
                 oscillator : {
                 type : "sine"
                 } ,
                 envelope : {
                     attack : 0.1 ,
                     decay : 0.4 ,
                     sustain : 0.01 ,
                     release : 1.4 ,
                     attackCurve : "exponential"
                 }
             }).toDestination();
    }
    setSinteEscudo(){
         this.sinteescudo = new Tone.AMSynth({
             harmonicity : 8 ,
             detune : 4 ,
             oscillator : {
                 type : "sine"
             },
             envelope : {
                 attack : 1.01 ,
                 decay : 0.01 ,
                 sustain : 1 ,
                 release : 0.5
             },
             modulation : {
                 type : "sine"
             },
             modulationEnvelope : {
                 attack : 1.0 ,
                 decay : 0 ,
                 sustain : 1 ,
                 release : 0.1
             }
         });
         this.escudowa = new Tone.AutoWah({
             baseFrequency : "A1" ,
             octaves : 8 ,
             sensitivity : 1 ,
             Q : 30 ,
             gain : 10 ,
             follower : {
                 attack : 0.2 ,
                 release : 0.9
             }
         });
         this.escudovol = new Tone.Volume(20);
         this.sinteescudo.connect(this.escudowa);
         this.escudowa.connect(this.escudovol);
         this.escudovol.toDestination();
    }
    setSintegrabp(){
        this.sintegrap = new Tone.Synth({
            oscillator: {
                type: "fatcustom",
                partials : [0.2, 1, 0, 0.5, 0.1],
                spread : 60,
                count : 3
            },
            envelope: {
                attack: 0.0,
                decay: 1.6,
                sustain: 0.8,
                release: 0.25
            }
        });

        this.sintegrap_feedback = new Tone.FeedbackDelay("8n", 0.65);
        this.sintegrap.connect(this.sintegrap_feedback);
        this.sintegrap_feedback.toDestination();
    }
    setSinteGameOver(){
        this.sintegameover = new Tone.Synth({
            oscillator: {
                type: "fatcustom",
                partials : [0.2, 1, 0, 0.5, 0.1],
                spread : 60,
                count : 3
            },
            envelope: {
                attack: 0.0,
                decay: 1.6,
                sustain: 0.4,
                release: 0.45
            }
        });

        this.sintegameover_feedback = new Tone.FeedbackDelay("8n", 0.65);
        this.sintegameover.connect(this.sintegameover_feedback);
        this.sintegameover_feedback.toDestination();
    }
    setSintemovimiento(){
        this.sintemov = new Tone.AMSynth({
            harmonicity : 8 ,
            detune : 4 ,
            oscillator : {
                type : "sine",
                frequency: 10
            },
            envelope : {
                attack : 1.01 ,
                decay : 0.3 ,
                sustain : 1 ,
                release : 1.1
            },
            modulation : {
                type : "sine"
            },
            modulationEnvelope : {
                attack : 1.0 ,
                decay : 0.2 ,
                sustain : 1 ,
                release : 1.1
            }
        });

        this.movvol = new Tone.Volume(-80);
        this.movvol.volume.value =20;
     
        this.freeverb = new Tone.Freeverb();
        this.freeverb.dampening = 100;
        this.fb = new Tone.FeedbackDelay("8n", 0.6);
        //this.fb.wet = 500;
        this.mov_pitchShift = new Tone.PitchShift();
       // this.sintemov.connect( this.mov_pitchShift);

        this.sintemov.connect(this.freeverb);
        this.freeverb.connect(this.fb);
        this.fb.connect(this.mov_pitchShift);

        this.mov_pitchShift.connect(this.movvol);
        this.movvol.toDestination();
      //  this.movdist.connect(this.movvol);

       // this.movdist.connect(this.mov_pitchShift);
        //this.movwa.connect(this.movvol);
        //this.movvol.toDestination();
    }
    setSinteStart(){
        this.sintestart = new Tone.Synth({
            oscillator: {
                type: "fatcustom",
                partials : [0.8, 1, 0.2, 0.1, 0.1],
                spread : 60,
                count : 4
            },
            envelope: {
                attack: 0.2,
                decay: 1.6,
                sustain: 0.4,
                release: 0.45
            }
        });

       this.sintestart_feedback = new Tone.FeedbackDelay("8n", 0.35);
       this.sintestart.connect(this.sintestart_feedback);
       this.sintestart_feedback.toDestination();
       //this.sintestart.toDestination();
    }
    playStart(){
        console.log("PLAY START");
        if(first_click){
            try{
            this.sintestart.triggerAttackRelease("E3", "12n",Tone.now());
            this.sintestart.triggerAttackRelease("C3", "12n",Tone.now()+.025);
            this.sintestart.triggerAttackRelease("B3", "12n",Tone.now()+.05);
            this.sintestart.triggerAttackRelease("A3", "12n",Tone.now()+.075);
            }catch(e){
                console.log(e);
            }
        }
    }
    playMovimiento(_pj){
        if(first_click){
           //if(Tone.now() > 2.0){
            try{
                this.sintemov.triggerAttackRelease("A2", "32n",Tone.now());   
                let spprom = (abs(_pj.sp.x)+abs(_pj.sp.y))/2; //PROMEDIO DE LA VELOCIDAD.
                this.mov_pitchShift.pitch = map(spprom,0,_pj.speedlimit,0,20);
                this.movvol.volume.value = map(spprom,0,_pj.speedlimit,-30,30);
            }catch(e){
                console.log(e);
            }
 
        }

    }
    playDisparo(){
		console.log("TRIGGER SOUND");
        if(first_click){
            try{
				this.sintedisparo.triggerAttackRelease("A0", "24n",Tone.now());	
				//this.sintedisparo.triggerAttackRelease(interpolateFrequency("A0","A1",0.1), "24n",Tone.now());
            }catch(e){
                console.log(e);
            }
        }

    }
    playDisparoEnemigo(){
        if(first_click){
            try{
                this.sintedisparoenemigo.triggerAttackRelease(interpolateFrequency("B1","B2",this.interpolationpj), "24n",Tone.now());
            }catch(e){
                console.log(e)
            }
            
        }
    }
	 
	 notaAleatoria() {
		const notas = ["C0", "D0", "E0", "F0", "G0", "A0", "B0",
					   "C1", "D1", "E1", "F1", "G1", "A1", "B1",
					   "C2", "D2", "E2", "F2", "G2", "A2", "B2"];
	
		const indiceAleatorio = Math.floor(Math.random() * notas.length);
		return notas[indiceAleatorio];
	}

    playDisparoBoss(){
        if(first_click){
            try{
                this.sintedisparojefe.triggerAttackRelease("A1", "64n",Tone.now());
            }catch(e){
                console.log(e)
            }
        }
    }
    playExplosion(){
        if(first_click){
            try{
                this.sinteexplosion.triggerAttackRelease(interpolateFrequency("A1","A2",this.interpolationxplotion), "16n",Tone.now());
            }catch(e){
                console.log(e)
            }
        }
    }
    playShield(){
        //NO ENTIENDO MUY BIEN PORQUE NO CRASHEA PERO PARECE FUNCIONAR : 
        if(first_click && Tone.now() > 0.3){
            try{
            this.sinteescudo.triggerAttackRelease("A1","16n",Tone.now());
            }catch(e){
                console.log(e);
            }
            //console.log("SONIDO ESCUDO");
            //this.sintedisparo.triggerAttackRelease("E2", "16n");
        }
    }
    playGrabp(){
         if(first_click){
            try{
                this.sintegrap.triggerAttackRelease("A3", "16n");
            }catch(e){
                console.log(e)
            }
        }
        //console.log("GRAP");
    }
    playGameover(){
        if(first_click){
            try{
            this.sintegameover.triggerAttackRelease("E1", "16n",Tone.now());
            this.sintegameover.triggerAttackRelease("C1", "16n",Tone.now()+.5);
            this.sintegameover.triggerAttackRelease("B1", "16n",Tone.now()+1.);
            this.sintegameover.triggerAttackRelease("A1", "16n",Tone.now()+1.5);
            }catch(e){
                console.log(e);
            }
        }
    }
    playVictoria(){
        
        if(first_click){
            try{
        /*    this.sintegamewin.triggerAttackRelease("A3", "8n",Tone.now());
            this.sintegamewin.triggerAttackRelease("B3", "8n",Tone.now()+0.25);
            this.sintegamewin.triggerAttackRelease("C3", "8n",Tone.now()+0.5);
            this.sintegamewin.triggerAttackRelease("E3", "8n",Tone.now()+0.75);
*/
            this.sintegamewin.triggerAttackRelease("C3", "8n", Tone.now());
            this.sintegamewin.triggerAttackRelease("D3", "8n", Tone.now() + 0.25);
            this.sintegamewin.triggerAttackRelease("E3", "8n", Tone.now() + 0.5);
            this.sintegamewin.triggerAttackRelease("G3", "8n", Tone.now() + 0.75);
            this.sintegamewin.triggerAttackRelease("A3", "8n", Tone.now() + 1);
            }catch(e){
                console.log(e);
            }
        }
       
    }
    disposeAll(){
        this.sintedisparo.dispose();
        this.sintestart.dispose();
        this.sintemov.dispose();
        this.sintedisparo.dispose();
        this.sintedisparoenemigo.dispose();
        this.sinteexplosion.dispose();
        this.sintegrap.dispose();
        this.sintegameover.dispose();
       // console.log("DISPOSE SOUNDS")
    }

}