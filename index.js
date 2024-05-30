const mouse = {
	xpos : 0,
	ypos : 0
}

const keyboard = {
	a : false,
	b : false,
	c : false,
	d : false,
	e : false,
	f : false,
	g : false,
	h : false,
	i : false,
	j : false,
	k : false,
	l : false,
	m : false,
	n : false,
	o : false,
	p : false,
	q : false,
	r : false,
	s : false,
	t : false,
	u : false,
	v : false,
	w : false,
	x : false,
	y : false,
	z : false,
	" " : false,
	ArrowUp : false,
	ArrowDown : false,
	ArrowRight : false,
	ArrowLeft : false,
	";" : false,
	"," : false,
	"." : false,
	"/" : false
}

const defaultLayout = [
	["q", 80, 400], ["w", 140, 400], ["e", 200, 400], ["r", 260, 400], ["t", 320, 400], ["y", 380, 400], ["u", 440, 400], ["i", 500, 400], ["o", 560, 400], ["p", 620, 400],
	["a", 100, 460], ["s", 160, 460], ["d", 220, 460], ["f", 280, 460], ["g", 340, 460], ["h", 400, 460], ["j", 460, 460], ["k", 520, 460], ["l", 580, 460], [";", 640, 460], 
	["z", 130, 520], ["x", 190, 520], ["c", 250, 520], ["v", 310, 520], ["b", 370, 520], ["n", 430, 520], ["m", 490, 520], [",", 550, 520], [".", 610, 520], ["/", 670, 520], 
	[" ", 250, 580], 
	["ArrowUp", 960, 460], 
	["ArrowLeft", 900, 520], ["ArrowDown", 960, 520], ["ArrowRight", 1020, 520]
];

const defaultSettings = {
	color1 : "#FF0000",
	speed : 0.7,
	color2 : "#FF0000",
	colorStyle : "horizontalGradient",
	textColor : "#FFFFFF", 
	strokeColor : "#FFFFFF", 
	glowColor : "#FFDDDD",
	anticipateChar : true,
	anticipateKey : false,
};

const songs = { //a Song object is a list of a series of keys, each with a specified [character, duration, *color1, *color2, *speed,]
	"linnea" : [
		['m', 600, '#0000FF', 'blue'], 
		['.', 1800, 'blue', 'blue'], 
		['j', 600], 
		['l', 1800], 
		['u', 600, '#00FF00', '#00FF00'], 
		['o', 4200, '#00FF00', '#00FF00'],
		
		['z', 600, 'blue', 'blue'], 
		['c', 1800, 'blue', 'blue'], 
		['a', 600], 
		['d', 1800], 
		['q', 600, '#00FF00', '#00FF00'], 
		['e', 4200, '#00FF00', '#00FF00'],
		
		['z', 0, 'blue', 'blue'], ['m', 600, 'blue', 'blue'], 
		['c', 0, 'blue', 'blue'], ['.', 600, 'blue', 'blue'], 
		['v', 1200, 'blue', 'blue'], 
		['a', 0], ['j', 600], 
		['d', 0], ['l', 600], 
		['f', 1200], 
		['q', 0, '#00FF00', '#00FF00'], ['u', 600, '#00FF00', '#00FF00'], 
		['e', 0, '#00FF00', '#00FF00'], ['o', 4200, '#00FF00', '#00FF00'], 
		
		['z', 0, 'blue', 'blue'], ['m', 600, 'blue', 'blue'], 
		['c', 0, 'blue', 'blue'], ['.', 600, 'blue', 'blue'], 
		['/', 1200, 'blue', 'blue'], 
		['a', 0], ['j', 600], 
		['d', 0], ['l', 600], 
		[';', 1200], 
		['q', 0, '#00FF00', '#00FF00'], ['u', 600, '#00FF00', '#00FF00'], 
		[' ', 34200, 'blue', 'blue']
	],
	"Sunny_Day" : [
		['f', 750], [';', 500], ['l', 250], ['k', 500], ['j', 750], [';', 500], ['l', 250], ['k', 500], ['h', 750], [';', 500], ['l', 250], ['k', 500], ['g', 750], ['s', 500], ['g', 250], ['k', 500], ['f', 750], [';', 500], ['l', 250], ['k', 500], ['j', 750], [';', 500], ['l', 250], ['k', 500], ['h', 750], [';', 500], ['l', 250], ['k', 500], ['g', 750], ['s', 500], ['g', 250], ['k', 500], ['f', 750], [';', 500], ['l', 250], ['k', 500], ['j', 750], [';', 500], ['l', 250], ['k', 500], ['h', 750], [';', 500], ['l', 250], ['k', 500], ['g', 750], ['s', 500], ['g', 250], ['k', 500], ['f', 750], [';', 500], ['l', 250], ['k', 500], ['j', 750], [';', 500], ['l', 250], ['k', 500], ['h', 750], [';', 500], ['l', 250], ['k', 500], ['g', 750], ['s', 500], ['g', 250], ['k', 500], ['f', 750], [';', 500], ['l', 250], ['k', 500], ['j', 750], [';', 500], ['l', 250], ['k', 500], ['h', 750], [';', 500], ['l', 250], ['k', 500], ['g', 750], ['s', 500], ['g', 250], ['k', 500], ['f', 750], [';', 500], ['l', 250], ['k', 500], ['j', 750], [';', 500], ['l', 250], ['k', 500], ['h', 750], [';', 500], ['l', 250], ['k', 500], ['g', 750], ['s', 500], ['g', 250], ['k', 500], ['f', 750], [';', 500], ['l', 250], ['k', 500], ['j', 750], [';', 500], ['l', 250], ['k', 500], ['h', 750], [';', 500], ['l', 250], ['k', 500], ['g', 750], ['s', 500], ['g', 250], ['k', 500], ['f', 750], [';', 500], ['l', 250], ['k', 500], ['j', 750], [';', 500], ['l', 250], ['k', 500], ['h', 750], [';', 500], ['l', 250], ['k', 500], ['g', 750], ['s', 500], ['g', 250], ['k', 500],
	],
	"Field_of_Memories" : [
		
	],
	"My_Time" : [
		['a', 0], ['j', 300], 
		['i', 0], ['o', 300], 
		['i', 0], ['o', 300], 
		['n', 300], 
		['i', 0], ['o', 300], 
		['i', 0], ['o', 300], 
		['j', 300], 
		['i', 0], ['o', 300], 
		['i', 0], ['o', 300], 
		['a', 0], ['n', 300], 
		['i', 0], ['o', 300], 
		['i', 0], ['o', 300], 
		['s', 0], ['j', 300], 
		['i', 0], ['o', 300], 
		['i', 0], ['o', 300], 
		['w', 0], ['j', 300], 
		['i', 0], ['o', 300], 
		['i', 0], ['o', 300], 
		['q', 0], ['u', 300], 
		['i', 0], ['o', 300], 
		['i', 0], ['o', 300], 
		['a', 0], ['u', 300], 
		['i', 0], ['o', 300], 
		['i', 0], ['o', 300], 
		['a', 0], ['j', 300], 
		['i', 0], ['o', 300], 
		['i', 0], ['o', 300], 
		['n', 300], 
		['i', 0], ['o', 300], 
		['i', 0], ['o', 300], 
		['j', 300], 
		['i', 0], ['o', 300], 
		['i', 0], ['o', 300], 
		['n', 300], 
		['x', 0], ['i', 0], ['o', 150], 
		['c', 150], 
		['x', 0], ['i', 0], ['o', 150], 
		['c', 150], 
		['v', 0], ['j', 300], 
		['i', 0], ['o', 300], 
		['i', 0], ['o', 300], 
		['g', 0], ['j', 300], 
		['i', 0], ['o', 300], 
		['i', 0], ['o', 0],
	],
}

function getTime(){
	return new Date().getTime();
}

function fillArrow(xpos, ypos, rotation, width=50){
	ctx.moveTo(xpos + width * 0.4 * Math.cos(rotation), ypos + width * 0.4 * Math.sin(rotation));
	ctx.beginPath();
	ctx.lineTo(xpos + width * 0.4 * Math.cos(rotation + Math.PI / 2), ypos + width * 0.4 * Math.sin(rotation + Math.PI / 2));
	ctx.lineTo(xpos + width * 0.15 * Math.cos(rotation + Math.PI / 2), ypos + width * 0.15 * Math.sin(rotation + Math.PI / 2));
	ctx.lineTo(xpos + width * 0.4 * Math.cos(rotation + Math.PI * 0.85), ypos + width * 0.4 * Math.sin(rotation + Math.PI * 0.85));
	ctx.lineTo(xpos + width * 0.4 * Math.cos(rotation + Math.PI * 1.15), ypos + width * 0.4 * Math.sin(rotation + Math.PI * 1.15));
	ctx.lineTo(xpos + width * 0.15 * Math.cos(rotation + Math.PI * 1.5), ypos + width * 0.15 * Math.sin(rotation + Math.PI * 1.5));
	ctx.lineTo(xpos + width * 0.4 * Math.cos(rotation + Math.PI * 1.5), ypos + width * 0.4 * Math.sin(rotation + Math.PI * 1.5));
	ctx.lineTo(xpos + width * 0.4 * Math.cos(rotation), ypos + width * 0.4 * Math.sin(rotation));
	ctx.fill();
	ctx.closePath();
}

function modulo(v, threshold){
	let val = v;
	while (val < 0){
		val += threshold;
	}
	return val % threshold;
}

function cyrb128(str) {
    let h1 = 1779033703, h2 = 3144134277,
        h3 = 1013904242, h4 = 2773480762;
    for (let i = 0, k; i < str.length; i++) {
        k = str.charCodeAt(i);
        h1 = h2 ^ Math.imul(h1 ^ k, 597399067);
        h2 = h3 ^ Math.imul(h2 ^ k, 2869860233);
        h3 = h4 ^ Math.imul(h3 ^ k, 951274213);
        h4 = h1 ^ Math.imul(h4 ^ k, 2716044179);
    }
    h1 = Math.imul(h3 ^ (h1 >>> 18), 597399067);
    h2 = Math.imul(h4 ^ (h2 >>> 22), 2869860233);
    h3 = Math.imul(h1 ^ (h3 >>> 17), 951274213);
    h4 = Math.imul(h2 ^ (h4 >>> 19), 2716044179);
    h1 ^= (h2 ^ h3 ^ h4), h2 ^= h1, h3 ^= h1, h4 ^= h1;
    return [h1>>>0, h2>>>0, h3>>>0, h4>>>0];
}

function splitmix32(a) {
 return function() {
   a |= 0;
   a = a + 0x9e3779b9 | 0;
   let t = a ^ a >>> 16;
   t = Math.imul(t, 0x21f0aaad);
   t = t ^ t >>> 15;
   t = Math.imul(t, 0x735a2d97);
   return ((t = t ^ t >>> 15) >>> 0) / 4294967296;
  }
}

function storeValue(key, value){
	localStorage.setItem(key, JSON.stringify(value));
}

function parseValue(key){
	return JSON.parse(localStorage.getItem(key));
}

if (localStorage.getItem("KeyboardSmash/highScores") == null){
	storeValue("KeyboardSmash/highScores", {
		"linnea" : 0,
		"Sunny_Day" : 0,
		"Field_of_Memories" : 0,
		"My_Time" : 0,
	});
}

const goals = {
	"linnea" : 3000,
	"Sunny_Day" : 10000,
	"My_Time" : 30000, 
};

const highScores = parseValue("KeyboardSmash/highScores");

var locked = {
	"linnea" : false, 
	"Sunny_Day" : !(highScores["linnea"] > goals["linnea"]), 
	"My_Time" : !(highScores["Sunny_Day"] > goals["Sunny_Day"]), 
}

function refreshLocked(){
	locked = {
		"linnea" : false, 
		"Sunny_Day" : !(highScores["linnea"] > goals["linnea"]), 
		"Field_of_Memories" : true,
		"My_Time" : true, 
	}
}

refreshLocked();

class Slideshow {
	constructor(){
		this.slides = []; //list of references to Game objects, or just strings of song names
		this.slidenum = 0;
		//each slide = [Game song, Boolean locked, color1, color2, difficulty]
		this.animationLock = false; //rejects all user input while in the middle of an animation
		this.currentAnimation = null;
		this.index = 0; //which one is currently being looked at
		this.playing = false; //if user is currently playing a game
		this.globalAlpha = 1;
		this.timers = {
			idle : 0,
			slide : 0, 
			fadeStart : 0,
			endPause : 0,
			fadeScore : 0,
			zoomOut1 : 0,
			zoomOut2 : 0,
		};
		
		this.transform = {
			a : 1,
			d : 1,
			e : 0,
			f : 0,
		}
	}
	drawSlide(index, offsetX = 0, offsetY = 0, unlockPercent = 0){
		ctx.save();
		
		ctx.globalAlpha = this.globalAlpha;
		ctx.setTransform(this.transform.a, 0, 0, this.transform.d, this.transform.e + offsetX, this.transform.f + offsetY);
		
		const slidei = this.slides[index];
		const gamei = slidei[0];
		{//draw border
			ctx.strokeStyle = "#FFFFFF";
			ctx.lineWidth = 5;
			ctx.beginPath();
			ctx.moveTo(100, 200);
			ctx.lineTo(100, canvas.height - 200);
			ctx.arcTo(100, canvas.height - 100, 200, canvas.height - 100, 100);
			ctx.lineTo(canvas.width - 200, canvas.height - 100);
			ctx.arcTo(canvas.width - 100, canvas.height - 100, canvas.width - 100, canvas.height - 200, 100);
			ctx.lineTo(canvas.width - 100, 200);
			ctx.arcTo(canvas.width - 100, 100, canvas.width - 200, 100, 100);
			ctx.lineTo(200, 100);
			ctx.arcTo(100, 100, 100, 200, 100);
			ctx.stroke();
			ctx.closePath();
		}
		{//draw name
			ctx.textAlign = "center";
			ctx.fillStyle = "white";
			ctx.font = "100px consolas";
			if (!slidei[1]){
				ctx.fillText(gamei.songname, canvas.width / 2, canvas.height / 2, canvas.width - 220);
			} else if (unlockPercent == 0) {
				ctx.fillText("-".repeat(gamei.songname.length), canvas.width / 2, canvas.height / 2, canvas.width - 220);
			} else {
				let nameString = "";
				const seed = cyrb128(gamei.songname);
				let rand = splitmix32(seed[0]);
				for (let i = 0; i < gamei.songname.length; i++){
					if (rand() * 100 < unlockPercent){
						nameString += gamei.songname[i];
					} else {
						nameString += "-";
					}
				}
				ctx.fillText(nameString, canvas.width / 2, canvas.height / 2, canvas.width - 220);
			}
		}
		{//draw difficulty
			ctx.font = "50px bold merriweather";
			if (!slidei[1]){
				ctx.fillStyle = {
					"easy" : "turquoise",
					"normal" : "white",
					"hard" : "orange",
					"very hard" : "red",
				}[gamei.difficulty];
				ctx.fillText(gamei.difficulty, canvas.width / 2, canvas.height * 0.6, canvas.width - 220);
			} else {
				ctx.fillStyle = "white";
				ctx.fillText("locked", canvas.width / 2, canvas.height * 0.6, canvas.width - 220);
			}
		}
		{//draw high score
			ctx.font = "30px consolas";
			ctx.fillStyle = "white";
			ctx.fillText(`High Score: ${gamei.highScore}/${gamei.maxScore}`, canvas.width / 2, canvas.height - 120, canvas.width - 220);
		}
		ctx.restore();
	}
	drawSlideBackground(index){
		ctx.save();
		
		const slidei = this.slides[index];
		
		ctx.globalAlpha = this.globalAlpha;
		
		const background = ctx.createLinearGradient(0, 0, 0, canvas.height);
		background.addColorStop(0, slidei[2]);
		background.addColorStop(1, slidei[3]);
		ctx.fillStyle = background;
		ctx.fillRect(0, 0, canvas.width, canvas.height);
		
		ctx.restore();
	}
	loop(){		
		ctx.save();
		
		//animations
		const slidei = this.slides[this.index];
		
		switch (this.currentAnimation){
			case null:
				{
					this.globalAlpha = 1;
					this.drawSlideBackground(this.index);
					this.drawSlide(this.index);
					
					const deltaTime = getTime() - this.timers.idle;
					const percentTime = deltaTime / 500;
					
					if (!slidei[1]){//if unlocked, write "press Space to start"
						ctx.font = "40px bold merriweather";
						if (keyboard[" "]){
							ctx.fillStyle = "yellow";
						} else {
							ctx.fillStyle = "white";
							ctx.globalAlpha = -Math.cos(percentTime) / 2 + 0.5;
						}
						ctx.textAlign = "center";
						ctx.fillText("Press Space to Start", canvas.width / 2, canvas.height - 170, canvas.width - 220)
					}
					
					//draw arrows
					ctx.globalAlpha = Math.min(1, percentTime);
					ctx.moveTo(canvas.width - 25, canvas.height / 2);
					ctx.beginPath();
					ctx.lineTo(canvas.width - 75, canvas.height / 2 - 75);
					ctx.lineTo(canvas.width - 75, canvas.height / 2 + 75);
					ctx.lineTo(canvas.width - 25, canvas.height / 2);
					ctx.fillStyle = "white";
					ctx.fill();
					ctx.closePath();
					
					ctx.moveTo(25, canvas.height / 2);
					ctx.beginPath();
					ctx.lineTo(75, canvas.height / 2 - 75);
					ctx.lineTo(75, canvas.height / 2 + 75);
					ctx.lineTo(25, canvas.height / 2);
					ctx.fillStyle = "white";
					ctx.fill();
					ctx.closePath();
					
					if (!locked[slidei[0].songname] && slidei[1]){//if it's currently being shown as locked but is actually unlocked, run unlocking animation
						this.animationLock = true;
						this.currentAnimation = "unlock";
						this.timers.unlock = getTime();
					}
					else if (keyboard.ArrowRight){
						this.animationLock = true;
						this.currentAnimation = "slideRight";
						this.transform.e = canvas.width;
						this.index = modulo(this.index + 1, this.slidenum);
						this.timers.slide = getTime();
					} 
					else if (keyboard.ArrowLeft){
						this.animationLock = true;
						this.currentAnimation = "slideLeft";
						this.transform.e = -canvas.width;
						this.index = modulo(this.index - 1, this.slidenum);
						this.timers.slide = getTime();
					} 
					else if (keyboard[" "] && !slidei[1]){
						this.animationLock = true;
						this.currentAnimation = "starting";
						this.timers.starting = getTime();
					}
					break;
				}
			case "slideRight":
				{
					const deltaTime = getTime() - this.timers.slide;
					const percentTime = Math.min(1, deltaTime / 750);
					
					this.transform.e = canvas.width * (1 - percentTime);
					
					this.globalAlpha = 1;
					this.drawSlideBackground(modulo(this.index - 1, this.slidenum));
					this.globalAlpha = percentTime;
					this.drawSlideBackground(this.index);
					this.globalAlpha = 1;
					this.drawSlide(modulo(this.index - 1, this.slidenum), -canvas.width);
					this.drawSlide(this.index);
					
					if (percentTime >= 1){
						this.currentAnimation = null;
						this.transform.e = 0;
						this.timers.idle = getTime();
						this.animationLock = false;
					}
					break;
				}
			case "slideLeft":
				{
					const deltaTime = getTime() - this.timers.slide;
					const percentTime = Math.min(1, deltaTime / 750);
					
					this.transform.e = -canvas.width * (1 - percentTime);
					
					this.globalAlpha = 1;
					this.drawSlideBackground(modulo(this.index + 1, this.slidenum));
					this.globalAlpha = percentTime;
					this.drawSlideBackground(this.index);
					this.globalAlpha = 1;
					this.drawSlide(modulo(this.index + 1, this.slidenum), canvas.width);
					this.drawSlide(this.index);
					
					if (percentTime >= 1){
						this.currentAnimation = null;
						this.timers.idle = getTime();
						this.animationLock = false;
					}
					break;
				}
			case "starting":
				{
					const deltaTime1 = getTime() - this.timers.idle;
					const percentTime1 = deltaTime1 / 500;
					const deltaTime2 = getTime() - this.timers.starting;
					const percentTime2 = deltaTime2 / 1000;
					
					const zoom = - (1.1 / (percentTime2 - 1.1));
					
					this.transform.a = this.transform.d = zoom;
					this.transform.e = canvas.width / 2 -(canvas.width / 2 * zoom);
					this.transform.f = canvas.height / 2 -(canvas.height / 2 * zoom);
					
					this.globalAlpha = 1;
					this.drawSlideBackground(this.index);
					
					ctx.setTransform(this.transform.a, 0, 0, this.transform.d, this.transform.e, this.transform.f);
					if (percentTime2 < 1.1){
						this.drawSlide(this.index);
						if (!slidei[1]){//if unlocked, write "press Space to start"
							ctx.font = "40px bold merriweather";
							if (keyboard[" "]){
								ctx.fillStyle = "yellow";
							} else {
								ctx.fillStyle = "white";
								ctx.globalAlpha = -Math.cos(percentTime1) / 2 + 0.5;
							}
							ctx.textAlign = "center";
							ctx.fillText("Press Space to Start", canvas.width / 2, canvas.height - 170, canvas.width - 220)
						}
					}
					
					
					//draw arrows
					ctx.globalAlpha = Math.min(1, percentTime1);
					ctx.moveTo(canvas.width - 25, canvas.height / 2);
					ctx.beginPath();
					ctx.lineTo(canvas.width - 75, canvas.height / 2 - 75);
					ctx.lineTo(canvas.width - 75, canvas.height / 2 + 75);
					ctx.lineTo(canvas.width - 25, canvas.height / 2);
					ctx.fillStyle = "white";
					ctx.fill();
					ctx.closePath();
					
					ctx.moveTo(25, canvas.height / 2);
					ctx.beginPath();
					ctx.lineTo(75, canvas.height / 2 - 75);
					ctx.lineTo(75, canvas.height / 2 + 75);
					ctx.lineTo(25, canvas.height / 2);
					ctx.fillStyle = "white";
					ctx.fill();
					ctx.closePath();
					ctx.setTransform(1, 0, 0, 1, 0, 0);
					
					if (percentTime2 >= 1.1){
						this.currentAnimation = "started";
						this.started = true;
						this.timers.fadeStart = getTime();
						slidei[0].background.color1 = slidei[2];
						slidei[0].background.color2 = slidei[3];
						slidei[0].start();
						this.drawSlideBackground(this.index);
					}
					
					break;
				}
			case "started":
				{
					const deltaTime = getTime() - this.timers.fadeStart;
					const percentTime = deltaTime / 1000;
					
					ctx.font = "30px bold merriweather";
					ctx.textAlign = "center";
					ctx.globalAlpha = Math.tanh(percentTime);
					ctx.fillText(`"${slidei[0].songname}" by ${slidei[0].songAuthor}`, canvas.width / 2, canvas.height / 4);
					if (slidei[0].highScore <= goals[slidei[0].songname]) ctx.fillText(`Get a score of ${goals[slidei[0].songname]} or higher to unlock next level`, canvas.width / 2, canvas.height / 4 + 40);
					
					ctx.globalAlpha = Math.max(Math.tanh(percentTime - 1), 0);
					
					slidei[0].loop();
					if (slidei[0].ended){
						this.timers.endPause = getTime();
						this.currentAnimation = "endPause";
					}
					ctx.restore();
					return;
				}
			case "endPause":
				{
					const deltaTime = getTime() - this.timers.endPause;
					const percentTime = deltaTime / 5000;
					
					slidei[0].loop();
					
					this.globalAlpha = percentTime;
					this.drawSlideBackground(this.index);
					
					if (percentTime >= 1){
						this.timers.fadeScore = getTime();
						this.currentAnimation = "fadeScore";
						slidei[0].started = false;
					}
					break;
				}
			case "fadeScore":
				{
					const deltaTime = getTime() - this.timers.fadeScore;
					const percentTime = deltaTime / 2000;
					
					this.globalAlpha = 1;
					this.drawSlideBackground(this.index);
					ctx.globalAlpha = percentTime;
					ctx.textAlign = "center";
					ctx.fillStyle = "white";
					ctx.font = "50px bold merriweather";
					ctx.fillText(`Your Score: ${slidei[0].currentScore} / ${slidei[0].maxScore} (${slidei[0].percentScore}%)`, canvas.width/2, canvas.height/2);
					ctx.font = "40px bold merriweather";
					ctx.fillText(`High Score: ${slidei[0].highScore}`, canvas.width/2, canvas.height * 0.6);
					
					if (keyboard[" "]){
						ctx.fillStyle = "yellow";
					} else {
						ctx.fillStyle = "white";
						ctx.globalAlpha = -Math.cos(percentTime * 2) / 2 + 0.5;
					}
					ctx.fillText("Press Space to Continue", canvas.width / 2, canvas.height - 170, canvas.width - 220)
					
					if (keyboard[" "] && percentTime >= 1){
						this.currentAnimation = "zoomOut1";
						this.timers.zoomOut1 = getTime();
					}
					
					break;
				}
			case "zoomOut1":
				{
					const deltaTime = getTime() - this.timers.zoomOut1;
					const percentTime = deltaTime / 2000;
					
					const zoom = 1 / (20 * percentTime + 1);
					
					this.transform.a = this.transform.d = zoom;
					this.transform.e = canvas.width / 2 -(canvas.width / 2 * zoom);
					this.transform.f = canvas.height / 2 -(canvas.height / 2 * zoom);
					
					this.globalAlpha = 1;
					this.drawSlideBackground(this.index);
					
					ctx.transform(this.transform.a, 0, 0, this.transform.d, this.transform.e, this.transform.f);
					
					ctx.textAlign = "center";
					ctx.fillStyle = "white";
					ctx.font = "50px bold merriweather";
					ctx.fillText(`Your Score: ${slidei[0].currentScore} / ${slidei[0].maxScore} (${slidei[0].percentScore}%)`, canvas.width/2, canvas.height/2);
					ctx.font = "40px bold merriweather";
					ctx.fillText(`High Score: ${slidei[0].highScore}`, canvas.width/2, canvas.height * 0.6);
					
					if (keyboard[" "]){
						ctx.fillStyle = "yellow";
					} else {
						ctx.fillStyle = "white";
						ctx.globalAlpha = -Math.cos(percentTime) / 2 + 0.5;
					}
					ctx.fillText("Press Space to Continue", canvas.width / 2, canvas.height - 170, canvas.width - 220)
					
					if (percentTime >= 1){
						this.currentAnimation = "zoomOut2";
						this.timers.zoomOut2 = getTime();
						slidei[0].currentScore = 0;
					}
					break;
				}
			case "zoomOut2":
				{
					const deltaTime = getTime() - this.timers.zoomOut2;
					const percentTime = deltaTime / 1000;
					
					const zoom = 1 / (0.98 * percentTime + 0.02);
					
					this.transform.a = this.transform.d = zoom;
					this.transform.e = canvas.width / 2 -(canvas.width / 2 * zoom);
					this.transform.f = canvas.height / 2 -(canvas.height / 2 * zoom);
					
					this.globalAlpha = 1;
					this.drawSlideBackground(this.index);
					this.drawSlide(this.index);
					
					if (percentTime >= 1){
						this.currentAnimation = null;
						this.animationLock = false;
						this.timers.idle = getTime();
					}
					break;
				}
			case "unlock":
				{
					const deltaTime = getTime() - this.timers.unlock;
					const percentTime = deltaTime / 600;
					
					this.globalAlpha = 1;
					this.drawSlideBackground(this.index);
					this.drawSlide(this.index, 0, 0, Math.floor(percentTime) * 33);
					
					if (percentTime < 1){
						break;
					}
					
					const background = ctx.createLinearGradient(0, 0, 0, canvas.height);
					background.addColorStop(0.5, "rgba(0, 0, 0, 0)");
					background.addColorStop(1, "#FFFFFF");
					
					ctx.fillStyle = background;
					ctx.globalAlpha = modulo(-percentTime, 1);
					ctx.fillRect(0, 0, canvas.width, canvas.height);
					
					if (percentTime >= 3){
						slidei[1] = false;
						this.currentAnimation = "unlocked";
						this.timers.unlocked = getTime();
					}
					break;
				}
			case "unlocked":
				{
					const deltaTime = getTime() - this.timers.unlocked;
					const percentTime = deltaTime / 1000;
					
					this.globalAlpha = 1;
					this.drawSlideBackground(this.index);
					this.drawSlide(this.index);
					
					const background = ctx.createLinearGradient(0, 0, 0, canvas.height);
					background.addColorStop(0.5, "rgba(0, 0, 0, 0)");
					background.addColorStop(1, "#FFFFFF");
					
					ctx.fillStyle = background;
					ctx.globalAlpha = 1 - percentTime;
					ctx.fillRect(0, 0, canvas.width, canvas.height);
					
					if (percentTime >= 1){
						this.currentAnimation = null;
						this.animationLock = false;
						this.timers.idle = getTime();
					}
					break;
				}
				
			default:
				{}
		}
		ctx.restore();		
	}
}

class Game {
	constructor(s){
		this.keyboard = null;
		this.songfile = document.getElementById(s);
		this.song = songs[s];
		this.songname = s;
		this.difficulty = null;
		
		this.highScore = highScores[s];
		if (this.highScore == 0) this.maxScore = 0; else this.maxScore = this.song.length * 100;
		this.percentScore = 0;
		this.currentScore = 0;
		this.scoreShake = 0; //positive: green / white shake, negative: red shake
		
		this.background = {
			picture : null, 
			color1 : "#22AAFF",
			color2 : "#0044FF",
		};
		this.settings = structuredClone(defaultSettings);
		
		this.started = false;
		this.ended = false;
		this.baseStartTime = 0;
	}
	getTime(){
		return this.songfile.currentTime * 1000 - 5000; //return milliseconds
	}
	start(){
		const charToIndex = this.keyboard.buttonDict;
		this.ended = false;
		this.maxScore = this.song.length * 100;
		let endTime = 0;
		for (const note of this.song){
			
			const chr = note[0];
			const duration = note[1];
			let color1 = this.settings.color1;
			let color2 = this.settings.color2;
			let speed = this.settings.speed;
			if (note.length >= 4){
				color1 = note[2];
				color2 = note[3];
				if (note.length >= 5){
					speed = note[4];
				}
			}
			
			const btnIndex = charToIndex[chr];
			this.keyboard.buttons[btnIndex].addKey(new Key(chr, color1, endTime, speed, color2, this.settings.colorStyle, this.settings.textColor, this.settings.strokeColor, this.settings.glowColor));
			endTime += duration;
		}
		this.songfile.playbackRate = 1;
		this.songfile.play();
		this.started = true;
	}
	loop(){
		if (!this.started){
			return;
		}
		ctx.save();
	
		const background = ctx.createLinearGradient(0, 0, 0, canvas.height);
		background.addColorStop(0, this.background.color1);
		background.addColorStop(1, this.background.color2);
		ctx.fillStyle = background;
		ctx.fillRect(0, 0, canvas.width, canvas.height);
		ctx.textAlign = "left";
		ctx.fillStyle = `rgba(${255 - Math.max(0, this.scoreShake * 255)}, ${255 - Math.max(0, this.scoreShake * -255)}, ${255 - Math.abs(this.scoreShake * 255)}, 1)`;
		ctx.font = "50px bold merriweather";		
		ctx.fillText(this.currentScore, 10 + (Math.random() - 0.5) * this.scoreShake * 10, 45 + (Math.random() - 0.5) * this.scoreShake * 10);
		ctx.textAlign = "right";
		ctx.fillText(`${this.percentScore}%`, canvas.width - 10 + (Math.random() - 0.5) * this.scoreShake * 10, 45 + (Math.random() - 0.5) * this.scoreShake * 10);
		
		
		ctx.restore();
		this.keyboard.draw(50, this.getTime());
		this.keyboard.tick(this.getTime());
		this.scoreShake *= 0.9;
		if (!this.songfile.ended){
			
			if (this.keyboard.addScore > 0){
				this.scoreShake = 1;
			} else if (this.keyboard.addScore < 0){
				this.scoreShake = -1;
			}
			
			this.currentScore += this.keyboard.addScore;
			this.keyboard.addScore = 0;
		}
		
		this.percentScore = Math.round(this.currentScore / this.maxScore * 1000) / 10;
		
		if (this.songfile.ended){
			this.ended = true;
			this.highScore = Math.max(this.currentScore, this.highScore);
			highScores[this.songname] = this.highScore;
			storeValue("KeyboardSmash/highScores", highScores);
			if (this.highScore > goals[this.songname]){
				refreshLocked();
			}
		}
	}
}

class Keyboard {
	constructor(color="#FFFFFF"){
		this.strokeColor = color;
		this.buttons = [];
		this.buttonDict = {};
		this.keysettings = structuredClone(defaultSettings);
		
		this.addScore = 0;
	}
	addButtons(layout){
		for (const i in layout){
			const btn = layout[i];
			const newKeyButton = new KeyButton(btn[0], btn[1], btn[2], this.strokeColor, this.keysettings.anticipateKey, this.keysettings.anticipateChar)
			newKeyButton.parentKeyboard = this;
			this.buttons.push(newKeyButton);
			this.buttonDict[btn[0]] = i;
		}
	}
	draw(width, gT){
		for (const btn of this.buttons){
			btn.draw(width, gT);
		}
	}
	tick(gT){
		for (const btn of this.buttons){
			btn.tick(gT);
		}
	}
}

class KeyButton {
	constructor(character, xpos, ypos, color="#FFFFFF", anticipateKey=false, anticipateChar=false){
		this.xpos = xpos;
		this.ypos = ypos;
		this.rotation = 0;
		this.c = character;
		this.pressed = false;
		this.pressedSuccessfully = false;
		this.strokeWeight = 5;
		this.strokeColor = color;
		this.anticipateKey = anticipateKey;
		this.anticipateChar = anticipateChar;
		
		this.parentKeyboard = null;
		
		this.keys = [];		
	}
	draw(width, gT){
		ctx.save();
		const rectH = width;
		let rectW = width;
		
		const sF = width / 50;
		
		const drawX = this.xpos * sF;
		const drawY = this.ypos * sF;
		
		if (this.c == " "){
			rectW *= 5.8;
			if (this.pressedSuccessfully){
				const roundg1 = ctx.createLinearGradient(drawX, drawY, drawX - rectW / 2, drawY);
				const roundg2 = ctx.createLinearGradient(drawX + rectW, drawY, drawX + rectW * 1.5, drawY);
				const straight1 = ctx.createLinearGradient(drawX, drawY, drawX, drawY - rectH / 2);
				const straight2 = ctx.createLinearGradient(drawX, drawY + rectH, drawX, drawY + rectH * 1.5);
				
				roundg1.addColorStop(0, "#FFFFFF"); roundg1.addColorStop(1, "rgba(0, 0, 0, 0)");
				roundg2.addColorStop(0, "#FFFFFF"); roundg2.addColorStop(1, "rgba(0, 0, 0, 0)");
				straight1.addColorStop(0, "#FFFFFF"); straight1.addColorStop(1, "rgba(0, 0, 0, 0)");
				straight2.addColorStop(0, "#FFFFFF"); straight2.addColorStop(1, "rgba(0, 0, 0, 0)");
				
				ctx.fillStyle = roundg1;
				ctx.fillRect(drawX - rectW / 2, drawY, rectW / 2, rectH);
				ctx.fillStyle = roundg2;
				ctx.fillRect(drawX + rectW, drawY, rectW / 2, rectH);
				ctx.fillStyle = straight1;
				ctx.fillRect(drawX, drawY - rectH / 2, rectW, rectH / 2);
				ctx.fillStyle = straight2;
				ctx.fillRect(drawX, drawY + rectH, rectW, rectH / 2);
			}
		} else if (this.pressedSuccessfully){
			const gradient = ctx.createRadialGradient(drawX + rectW / 2, drawY + rectH / 2, rectH / 2, drawX + rectW / 2, drawY + rectH / 2, rectH * 1.5);
			gradient.addColorStop(0, "#FFFFFF");
			gradient.addColorStop(1, "rgba(0, 0, 0, 0)");
			ctx.fillStyle = gradient;
			ctx.beginPath();
			ctx.ellipse(drawX + rectW / 2, drawY + rectH / 2, rectW, rectH, 0, 0, 7);
			ctx.fill();
			ctx.closePath();
		}
		
		ctx.strokeStyle = this.strokeColor;
		ctx.lineWidth = this.strokeWeight * sF;
		ctx.beginPath();
		
		ctx.rect(drawX, drawY, rectW, rectH);
		
		if (this.pressed){
			if (this.pressedSuccessfully){
				ctx.fillStyle = "#FFFFFF";
				ctx.strokeStyle = "#FFFFFF";
			} else {
				ctx.fillStyle = "rgba(255, 0, 0, 0.3)";
			}
			ctx.fill();
		}
		ctx.stroke();
		ctx.closePath();
		
		let minDeltaTime = Number.MAX_SAFE_INTEGER;
		
		for (const key of this.keys){
			key.draw(width, gT);
			minDeltaTime = Math.min(minDeltaTime, key.endTime - gT);
		}
		if (minDeltaTime < 1000){
			ctx.fillStyle = this.strokeColor;
			ctx.globalAlpha = 1 - minDeltaTime / 1000;
			if (this.anticipateKey){
				ctx.fillRect(drawX, drawY, rectW, rectH);
			} else if (this.anticipateChar){
			switch (this.c){
				case "ArrowUp":
					{
						fillArrow(drawX + rectW / 2, drawY + rectH / 2, Math.PI / -2, width);
						break;
					}
				case "ArrowDown":
					{
						fillArrow(drawX + rectW / 2, drawY + rectH / 2, Math.PI / 2, width);
						break;
					}
				case "ArrowLeft":
					{
						fillArrow(drawX + rectW / 2, drawY + rectH / 2, Math.PI, width);
						break;
					}
				case "ArrowRight":
					{
						fillArrow(drawX + rectW / 2, drawY + rectH / 2, 0, width);
						break;
					}
				default:
					{
						ctx.font = `${rectH * 0.75}px sans-serif`;
						ctx.textAlign = "center";
						ctx.fillText(this.c.toUpperCase(), drawX + (rectW / 2), drawY + (rectH * 0.75));
						break;
					}
			}}
		}
		ctx.restore();
	}
	addKey(key){
		this.keys.push(key);
		key.c = this.c;
		key.destination.xpos = this.xpos;
		key.destination.ypos = this.ypos;
	}
	tick(gT){
		{
			const newKeys = [];
			for (const key of this.keys){
				if (!key.deleteself){newKeys.push(key)}
			}
			this.keys = newKeys;
		}
		
		if (keyboard[this.c]){
			if (!this.pressed){
				for (const key of this.keys){
					if (Math.abs(key.endTime - gT) <= 100){
						this.pressedSuccessfully = true;
						key.deleteself = true;
						this.parentKeyboard.addScore += 100;
					}
				}
				if (!this.pressedSuccessfully){
					this.parentKeyboard.addScore -= 20;
				}
			}
			this.pressed = true;
			
		} else {
			this.pressed = false;
			this.pressedSuccessfully = false;
		}
	}
}

class Key {
	constructor(character, color1, endTime=0, speed=0.7, color2=null, colorStyle="solid", textColor="#FFFFFF", strokeColor="#FFFFFF", glowColor="#FFFFFF"){
		this.c = character;
		this.color1 = color1;
		this.color2 = color2;
		this.glowColor = glowColor;
		this.colorStyle = colorStyle;
		this.textColor = textColor;
		this.strokeWeight = 5;
		this.strokeColor = strokeColor;
		this.speed = speed;
		this.fade = 1;
		this.xpos = null;
		this.ypos = null;
		this.destination = {
			xpos : 0,
			ypos : 0
		}
		this.endTime = endTime;
		this.direction = 1.5 * Math.PI;
		this.deleteself = false;
	}
	draw(width, gT){
		
		const currentTime = gT;
		const deltaTime = this.endTime - currentTime;
		this.xpos = this.destination.xpos + Math.cos(this.direction) * deltaTime * this.speed;
		this.ypos = this.destination.ypos + Math.sin(this.direction) * deltaTime * this.speed;
		
		const drawX = this.xpos * width / 50;
		const drawY = this.ypos * width / 50;
		
		if (deltaTime < 0){
			this.fade = Math.max(0, 1 + deltaTime / 250);
			if (deltaTime < -250){
				this.deleteself = true;
			}
		} 
		
		ctx.save();
		
		const rectH = width;
		let rectW = width;
		
		ctx.globalAlpha = this.fade;
		
		if (this.c == " "){
			rectW *= 5.8;
		} else { //gradient glow
			const gradient = ctx.createRadialGradient(drawX + (rectW / 2), drawY + (rectH / 2), rectH / 2, drawX + (rectW / 2), drawY + (rectH / 2), rectH);
			gradient.addColorStop(0, this.glowColor);
			gradient.addColorStop(1, "rgba(0, 0, 0, 0)");
			ctx.fillStyle = gradient;
			ctx.beginPath();
			ctx.ellipse(drawX, drawY, rectW * 2, rectH * 2, 0, 0, 7);
			ctx.fill();
			ctx.closePath();
		}
		
		ctx.strokeStyle = this.strokeColor;
		ctx.lineWidth = this.strokeWeight * width / 50;
		ctx.beginPath();
		ctx.rect(drawX, drawY, rectW, rectH);
		switch (this.colorStyle){
			 case "solid":
				{
					ctx.fillStyle = this.color1;
					break;
				}
			case "verticalGradient":
				{
					const gradient = ctx.createLinearGradient(drawX, drawY, drawX, drawY + rectH);
					gradient.addColorStop(0, this.color1);
					gradient.addColorStop(1, this.color2);
					ctx.fillStyle = gradient;
					break;
				}
			case "horizontalGradient":
				{
					const gradient = ctx.createLinearGradient(drawX, drawY, drawX + rectW, drawY);
					gradient.addColorStop(0, this.color1);
					gradient.addColorStop(1, this.color2);
					ctx.fillStyle = gradient;
					break;
				}
			case "radialGradient":
				{
					const gradient = ctx.createRadialGradient(drawX + (rectW / 2), drawY + (rectH / 2), 0, drawX + (rectW / 2), drawY + (rectH / 2), rectW / 2);
					gradient.addColorStop(0, this.color1);
					gradient.addColorStop(1, this.color2);
					ctx.fillStyle = gradient;
					break;
				}
		}
		ctx.fill(); ctx.stroke();
		ctx.closePath();
		
		
		ctx.fillStyle = this.textColor;
		switch (this.c){
			case "ArrowUp":
				{
					fillArrow(drawX + rectW / 2, drawY + rectH / 2, Math.PI / -2, width);
					break;
				}
			case "ArrowDown":
				{
					fillArrow(drawX + rectW / 2, drawY + rectH / 2, Math.PI / 2, width);
					break;
				}
			case "ArrowLeft":
				{
					fillArrow(drawX + rectW / 2, drawY + rectH / 2, Math.PI, width);
					break;
				}
			case "ArrowRight":
				{
					fillArrow(drawX + rectW / 2, drawY + rectH / 2, 0, width);
					break;
				}
			default:
				{
					ctx.font = `${rectH * 0.75}px sans-serif`;
					ctx.textAlign = "center";
					ctx.fillText(this.c.toUpperCase(), drawX + (rectW / 2), drawY + (rectH * 0.75));
					break;
				}
		}
		
		
		ctx.restore();
	}
}

canvas.addEventListener("mousemove", function(e){
	mouse.xpos = e.offsetX;
	mouse.ypos = e.offsetY;
});

addEventListener("keydown", function(e){
	keyboard[e.key] = true;	
});

addEventListener("keyup", function(e){
	keyboard[e.key] = false;
});

const kb = new Keyboard();
kb.addButtons(defaultLayout);

//create Linnea Game
const linnea = new Game("linnea"); 
linnea.keyboard = kb; 
linnea.difficulty = "easy";
linnea.songAuthor = "unknown";

//create Sunny Day Game
const Sunny_Day = new Game("Sunny_Day"); 
Sunny_Day.keyboard = kb; 
Sunny_Day.difficulty = "easy"; 
Sunny_Day.settings.speed = 0.5;
Sunny_Day.songAuthor = "unknown"; 

//create Field of Memories Game
const Field_of_Memories = new Game("Field_of_Memories");
Field_of_Memories.keyboard = kb;
Field_of_Memories.difficulty = "hard";
Field_of_Memories.songAuthor = "Waterflame";

//create My Time game
const My_Time = new Game("My_Time"); 
My_Time.keyboard = kb; 
My_Time.difficulty = "hard"; 
My_Time.settings.speed = 0.4;
My_Time.songAuthor = "bo en";

const SS = new Slideshow(); 
SS.slides = [
	[linnea, locked.linnea, "#444444", "#BBBBBB"], 
	[Sunny_Day, locked.Sunny_Day, "#FFDDDD", "#333333"], 
	[Field_of_Memories, locked.Field_of_Memories, "#CC9911", "#000000"],
	[My_Time, locked.My_Time, "#AA00AA", "#33AAFF"]
];
SS.slidenum = SS.slides.length;

function mainloop(){
	SS.loop();
}

setInterval(mainloop, 10);