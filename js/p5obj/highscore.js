class Highscore {
    constructor() {
        this.rankings = [];
        this.maxRankings = 10;
        this.currentName = ['A', 'A', 'A'];
        this.currentLetterIndex = 0;
        this.isEnteringName = false;
        this.lastLetterChangeTime = 0;
        this.letterCycleInterval = 3000;
        this.currentScore = 0;
        this.firstButtonPress = false;
    }
    
    update() {
        if(this.isEnteringName && this.firstButtonPress) {
            let currentTime = millis();
            if(currentTime - this.lastLetterChangeTime > this.letterCycleInterval) {
                this.advanceToNextPosition();
                this.lastLetterChangeTime = currentTime;
            }
        }
    }
    
    display() {
        push();
        textFont(pixelFont);
        textAlign(CENTER, CENTER);
        rectMode(CENTER);
        
        let marco = min(width, height) * 0.85;
        fill(0);
        rect(width/2, height/2, marco + 60, marco + 60);
        fill(255);
        rect(width/2, height/2, marco + 40, marco + 40);
        fill(130, 117, 154);
        rect(width/2, height/2, marco, marco);
        
        let t = millis() * 0.003;
        
        textSize(marco * 0.1);
        let titulo = "RANKING";
        for(let i = 0; i < titulo.length; i++) {
            let charCol = (i + floor(t * 4)) % 2 == 0 ? color(254, 235, 44) : color(255, 161, 8);
            fill(charCol);
            text(titulo[i], width/2 - (titulo.length/2 - i - 0.5) * marco * 0.06, height/2 - marco * 0.42);
        }
        
        this.loadRankings();
        
        if(!this.isEnteringName) {
            textSize(marco * 0.045);
            fill(255);
            let startY = height/2 - marco * 0.28;
            let lineHeight = marco * 0.055;
            
            for(let i = 0; i < min(this.rankings.length, this.maxRankings); i++) {
                let rank = this.rankings[i];
                let y = startY + i * lineHeight;
                
                let rankColor = i < 3 ? getPamiColor(i / 10) : color(255);
                fill(rankColor);
                
                text((i + 1) + ". " + rank.name + " - " + rank.score, width/2, y);
            }
        }
        
        if(this.isEnteringName) {
            textSize(marco * 0.07);
            let titulo = "INGRESA TU NOMBRE";
            for(let i = 0; i < titulo.length; i++) {
                let charCol = (i + floor(t * 4)) % 2 == 0 ? color(254, 235, 44) : color(255, 161, 8);
                fill(charCol);
                text(titulo[i], width/2 - (titulo.length/2 - i - 0.5) * marco * 0.04, height/2 - marco * 0.15);
            }
            
            let letterSize = marco * 0.15;
            let letterSpacing = marco * 0.12;
            let totalWidth = letterSpacing * 2;
            let startX = width/2 - totalWidth/2;
            
            for(let i = 0; i < 3; i++) {
                let x = startX + i * letterSpacing;
                let y = height/2 + marco * 0.05;
                
                if(i === this.currentLetterIndex) {
                    fill(255, 161, 8);
                    rect(x, y, letterSize * 0.9, letterSize * 0.9);
                    fill(0);
                    rect(x, y, letterSize * 0.75, letterSize * 0.75);
                    
                    let pulse = 1 + sin(t * 8) * 0.1;
                    textSize(letterSize * 0.6 * pulse);
                    fill(254, 235, 44);
                } else {
                    fill(255);
                    rect(x, y, letterSize * 0.9, letterSize * 0.9);
                    fill(130, 117, 154);
                    rect(x, y, letterSize * 0.75, letterSize * 0.75);
                    
                    textSize(letterSize * 0.6);
                    fill(255);
                }
                
                text(this.currentName[i], x, y);
            }
            
            fill(255);
            textSize(marco * 0.035);
            text("PRESIONA PARA CAMBIAR LETRA", width/2, height/2 + marco * 0.2);
            
            let timeLeft;
            if(!this.firstButtonPress) {
                timeLeft = 3;
            } else {
                timeLeft = ceil((this.letterCycleInterval - (millis() - this.lastLetterChangeTime)) / 1000);
            }
            textSize(marco * 0.06);
            fill(255, 161, 8);
            text(timeLeft + "s", width/2, height/2 + marco * 0.27);
        }
        
        pop();
    }
    
    changeLetter() {
        let charCode = this.currentName[this.currentLetterIndex].charCodeAt(0);
        charCode++;
        if(charCode > 90) charCode = 65;
        this.currentName[this.currentLetterIndex] = String.fromCharCode(charCode);
    }
    
    previousLetter() {
        let charCode = this.currentName[this.currentLetterIndex].charCodeAt(0);
        charCode--;
        if(charCode < 65) charCode = 90;
        this.currentName[this.currentLetterIndex] = String.fromCharCode(charCode);
    }
    
    advanceToNextPosition() {
        if(!this.isEnteringName) return;
        
        this.currentLetterIndex++;
        this.lastLetterChangeTime = millis();
        
        if(this.currentLetterIndex >= 3) {
            this.saveRanking();
            this.isEnteringName = false;
            setTimeout(() => { restart(); }, 2000);
        }
    }
    
    confirmLetter() {
        if(!this.isEnteringName) return;
        
        if(!this.firstButtonPress) {
            this.firstButtonPress = true;
            this.lastLetterChangeTime = millis();
        }
        
        this.changeLetter();
        this.lastLetterChangeTime = millis();
    }
    
    previousLetterInput() {
        if(!this.isEnteringName) return;
        
        if(!this.firstButtonPress) {
            this.firstButtonPress = true;
            this.lastLetterChangeTime = millis();
        }
        
        this.previousLetter();
        this.lastLetterChangeTime = millis();
    }
    
    startNameEntry(score) {
        this.currentScore = score;
        this.isEnteringName = true;
        this.currentLetterIndex = 0;
        this.currentName = ['A', 'A', 'A'];
        this.lastLetterChangeTime = millis();
        this.firstButtonPress = false;
    }
    
    checkIfInTop10(score) {
        this.loadRankings();
        if(this.rankings.length < this.maxRankings) return true;
        return score > this.rankings[this.rankings.length - 1].score;
    }
    
    saveRanking() {
        this.loadRankings();
        
        let name = this.currentName.join('');
        this.rankings.push({name: name, score: this.currentScore});
        
        this.rankings.sort((a, b) => b.score - a.score);
        
        if(this.rankings.length > this.maxRankings) {
            this.rankings = this.rankings.slice(0, this.maxRankings);
        }
        
        localStorage.setItem('vuela3000rankings', JSON.stringify(this.rankings));
    }
    
    loadRankings() {
        let stored = localStorage.getItem('vuela3000rankings');
        if(stored) {
            this.rankings = JSON.parse(stored);
        } else {
            this.rankings = [];
        }
    }
}
