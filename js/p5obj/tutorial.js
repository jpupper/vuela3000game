class Tutorial {
    constructor() {
        this.startTime = 0;
        this.duration = 3000;
        this.isActive = false;
    }
    
    start() {
        this.startTime = millis();
        this.isActive = true;
    }
    
    update() {
        if(!this.isActive) return;
        
        let elapsedTime = millis() - this.startTime;
        if(elapsedTime > this.duration) {
            this.isActive = false;
            pantalla = 1;
        }
    }
    
    display() {
        if(!this.isActive) return;
        
        let t = millis() * 0.001;
        let centerX = width / 2;
        let centerY = height / 2;
        
        let elapsedTime = millis() - this.startTime;
        let remainingTime = ceil((this.duration - elapsedTime) / 1000);

        push();
        rectMode(CENTER);
        textAlign(CENTER, CENTER);
        textFont(pixelFont);

        let marco = min(width, height) * 0.8;
        fill(0);
        rect(centerX, centerY, marco + 60, marco + 60);
        fill(255);
        rect(centerX, centerY, marco + 40, marco + 40);
        fill(130, 117, 154);
        rect(centerX, centerY, marco, marco);

        textSize(marco * 0.15);
        let contadorStr = str(remainingTime);
        for (let i = 0; i < contadorStr.length; i++) {
            let charCol = (i + floor(t * 4)) % 2 == 0 ? color(254, 235, 44) : color(255, 161, 8);
            fill(charCol);
            text(contadorStr[i], centerX + (i - contadorStr.length/2 + 0.5) * marco * 0.1, centerY - marco * 0.38);
        }

        let section1Y = centerY - marco * 0.15;
        
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
        
        if (imgsPjs && imgsPjs.length > 0 && imgsPelus && imgsPelus.length > 0) {
            let rightX = centerX + marco * 0.15;
            let charY = section1Y + sin(t * 4) * 5;
            
            let charScale = 0.25;
            let charW = imgsPjs[0].width * charScale;
            let charH = imgsPjs[0].height * charScale;
            
            imageMode(CENTER);
            image(imgsPjs[0], rightX, charY, charW, charH);
            
            let pelucaW = imgsPelus[0].width * charScale;
            let pelucaH = imgsPelus[0].height * charScale;
            let pelucaOffset = (t * 120) % 150;
            let pelucaAlpha = map(pelucaOffset, 0, 150, 255, 0);
            let pelucaStartY = charY - charH/2;
            push();
            tint(255, pelucaAlpha);
            image(imgsPelus[0], rightX, pelucaStartY - pelucaOffset, pelucaW, pelucaH);
            pop();
            imageMode(CORNER);
        }
        
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
        
        let section3Y = centerY + marco * 0.38;
        
        if (avion) {
            let planeX = centerX - marco * 0.2;
            let planeY = section3Y + sin(t * 6) * 3;
            
            push();
            translate(planeX, planeY);
            
            for(let i = 0; i < 3; i++) {
                let fireX = -30 - i * 15 + sin(t * 10 + i) * 5;
                let fireY = random(-5, 5);
                let fireSize = map(sin(t * 8 + i * 2), -1, 1, 8, 15);
                let fireColor = getPamiColor3(random(1));
                fill(fireColor);
                rectMode(CENTER);
                
                let nx = map(noise(i * 5234 + millis() * 0.0005), 0, 1, -10, 10);
                let ny = map(noise(i * 7276 + millis() * 0.0005), 0, 1, -10, 10);
                rect(fireX + nx, fireY + ny, fireSize + nx * 0.5, fireSize + ny * 0.5);
            }
            
            let tempAvion = new Avion();
            tempAvion.seed = 9999;
            tempAvion.display2(0, 0);
            
            pop();
        }
        
        textAlign(LEFT, CENTER);
        let instrX = centerX + marco * 0.05;
        
        fill(255);
        textSize(marco * 0.045);
        text("PRESIONA", instrX, section3Y - marco * 0.04);
        text("PARA VOLAR", instrX, section3Y + marco * 0.02);
        
        pop();
    }
}
