//Developer accused of unreadable code refuses to comment.
var mvmt1x = -11;
var mvmt1y = 45;
var corner = 0;
var delay;
var startButtonClicked = 1;
var loadingScreenFinished = 0;
var pressToStart = 0;
var roundButtonStart = 0;
var clearBackground = 0;
var pPoint = 50;
var uPoint;
var round = 0;
var mvmt2x = -51;
var mvmt2y = 45;
var corner2 = 0;
var mvmt3x = -91;
var mvmt3y = 45;
var corner3 = 0;
var mvmt4x = -131;
var mvmt4y = 45;
var corner4 = 0;
var mvmt5x = -171;
var mvmt5y = 45;
var corner5 = 0;
var mvmt6x = -211;
var mvmt6y = 45;
var corner6 = 0;
var mvmt7x = -251;
var mvmt7y = 45;
var corner7 = 0;
var mvmt8x = -291;
var mvmt8y = 45;
var corner8 = 0;
var e1 = 0;
var e2 = 0;
var e3 = 0;
var e4 = 0;
var e5 = 0;
var e6 = 0;
var e7 = 0;
var e8 = 0;
var distance;
var shot;
var laser = [];
var detectionRadius = 100;
  //towers (make sure to define it, and copy other tower code and change the name)
  //Laser Shark is 5 placement points
var LaserShark = 0;
var LSx = [];
var LSy = []; 
var lsSprite;
//Flex Tape
var FlexTape = 0;
var FTx = [];
var FTy = [];
var ftSprite;
//Tower404
var Tower404 = 0;
var T404x = [];
var T404y = [];
var Tower404Sprite;
//target
var Target;
var targetSprite;
var targetHealth = 64;
var targetHealthMax = 64;
var targetHealthBarW = 128;
var falloutFont;
var sansFromUndertale;
var dist1;
var dist2;
var dist3;
var dist4;
var dist5;
var dist6;
var dist7;
var dist8;
var gameMusic;
//tower hit chance
var thc = [];
var mhc = [];

function preload() {
lsSprite = loadImage('sprites/lazershark50.png');
ftSprite = loadImage('sprites/dabglitch.png');
Tower404Sprite = loadImage('sprites/ThinkOfTheArraysMason.png');
targetSprite = loadImage('sprites/target.png');
falloutFont = loadFont('JH_FALLOUT.TTF')
sansFromUndertale = loadFont('comic.ttf')
gameMusic = loadSound('game.ogg');
}
function setup() {
    createCanvas(windowWidth, windowHeight);
    genhardbass = 0;
    gameMusic.loop();
}

function draw() {
    if (keyIsDown(36)) {
        window.location.replace("../homekey/index.html")
      }
    simplify();
	targetHealthBarW = targetHealth * 2
	noStroke();
	  if (targetHealth < 16) {
    fill(255, 0, 0);
  }  
  else if (targetHealth < 32) {
    fill(255, 200, 0);
  }
  else {
    fill(0, 255, 0);
  }
	rect(275,485,targetHealthBarW,16);
	//test code for health bar
	if(keyIsDown(70) && targetHealth > 0) {
		targetHealth -= 1
	}
	textSize(32);
	textFont(falloutFont);
text(`${targetHealth}/${targetHealthMax} TB`, 230, 546);
	textFont(sansFromUndertale);
	stroke(1);
	if(targetHealth <= 0) {
		window.location.replace("../deathscreen/index.html")
	}
}
function startMenu() {
    if (startButtonClicked == 1) {
        loadingScreenFinished = 1;
        loadingScreen();
    }
}

function loadingScreen() {
    if(clearBackground == 0) {
        background(255);
        clearBackground = 1;
    }
}

function roundStart() { 
    if ((mouseX >= 50) && (mouseX <= 100) && (mouseY <= 900) && (mouseY >= 750) && (mouseIsPressed)) {
        roundButtonStart = 1;
    }
}

function menuStart() {
    if (roundButtonStart == 1) {
        round = 1;
        if(round == 1) {
            if((mvmt1x <= 214) && (corner == 0)) {
                mvmt1x = mvmt1x + 2;
            }
            if((mvmt1x >= 213) && (corner == 0)) {
                corner = 1;
            }
            if((corner == 1) && (mvmt1y <= 165)) {
                mvmt1y = mvmt1y + 2;
            }
            if((corner == 1) && (mvmt1y >= 164)) {
                corner = 2;
            }
            if((corner == 2) && (mvmt1x >= 64)) {
                mvmt1x = mvmt1x - 2;
            }
            if((corner == 2) && (mvmt1x <= 65)) {
                corner = 3;
            }
            if((corner == 3) && (mvmt1y <= 311)){
                mvmt1y = mvmt1y + 2;
            }
            if((corner == 3) && (mvmt1y >= 310)){
                corner = 4;
            }
            if((corner == 4) && (mvmt1x <= 336)) {
                mvmt1x = mvmt1x + 2;
            }
            if((corner == 4) && (mvmt1x >= 335)) {
                corner = 5;
            }
            if((corner == 5) && (mvmt1y >= 44)) {
                mvmt1y = mvmt1y - 2;
            }
            if((corner == 5) && (mvmt1y <= 45)) {
                corner = 6;
            }
            if((corner == 6) && (mvmt1x <= 535)) {
                mvmt1x = mvmt1x + 2;
            }
            if((corner == 6) && (mvmt1x >= 534)) {
                corner = 7;
            }
            if((corner == 7) && (mvmt1y <= 316)) {
                mvmt1y = mvmt1y + 2;
            }
            if((corner == 7) && (mvmt1y >= 315)) {
                corner = 8;
            }
            if((corner == 8) && (mvmt1x <= 706)) {
                mvmt1x = mvmt1x + 2;
            }
            if((corner == 8) && (mvmt1x >= 705)) {
                corner = 9;
            }
            if((corner == 9) && (mvmt1y >= 66)) {
                mvmt1y = mvmt1y - 2;
            }
            if((corner == 9) && (mvmt1y <= 65)) {
                corner = 10;
            }
            if((corner == 10) && (mvmt1x <= 756)) {
                mvmt1x = mvmt1x + 2;
            }
            if((corner == 10) && (mvmt1x >= 755)) {
                corner = 11;
            }
            if((corner == 11) && (mvmt1y <= 436)) {
                mvmt1y = mvmt1y + 2;
            }
            if((corner == 11) && (mvmt1y >= 435)) {
                corner = 12;
            }
            if((corner == 12) && (mvmt1x >= 354)) {
                mvmt1x = mvmt1x - 2;
            }
            if((corner == 12) && (mvmt1x <= 355)) {
                corner = 13;
            }
            if ((mvmt2x <= 214) && (corner2 == 0)) {
                mvmt2x = mvmt2x + 2;
            }
            if ((mvmt2x >= 213) && (corner2 == 0)) {
                corner2 = 1;
            }
            if ((corner2 == 1) && (mvmt2y <= 165)) {
                mvmt2y = mvmt2y + 2;
            }
            if ((corner2 == 1) && (mvmt2y >= 164)) {
                corner2 = 2;
            }
            if ((corner2 == 2) && (mvmt2x >= 64)) {
                mvmt2x = mvmt2x - 2;
            }
            if ((corner2 == 2) && (mvmt2x <= 65)) {
                corner2 = 3;
            }
            if((corner2 == 3) && (mvmt2y <= 311)){
                mvmt2y = mvmt2y + 2;
            }
            if((corner2 == 3) && (mvmt2y >= 310)){
                corner2 = 4;
            }
            if((corner2 == 4) && (mvmt2x <= 336)) {
                mvmt2x = mvmt2x + 2;
            }
            if((corner2 == 4) && (mvmt2x >= 335)) {
                corner2 = 5;
            }
            if((corner2 == 5) && (mvmt2y >= 44)) {
                mvmt2y = mvmt2y - 2;
            }
            if((corner2 == 5) && (mvmt2y <= 45)) {
                corner2 = 6;
            }
            if((corner2 == 6) && (mvmt2x <= 535)) {
                mvmt2x = mvmt2x + 2;
            }
            if((corner2 == 6) && (mvmt2x >= 534)) {
                corner2 = 7;
            }
            if((corner2 == 7) && (mvmt2y <= 316)) {
                mvmt2y = mvmt2y + 2;
            }
            if((corner2 == 7) && (mvmt2y >= 315)) {
                corner2 = 8;
            }
            if((corner2 == 8) && (mvmt2x <= 706)) {
                mvmt2x = mvmt2x + 2;
            }
            if((corner2 == 8) && (mvmt2x >= 705)) {
                corner2 = 9;
            }
            if((corner2 == 9) && (mvmt2y >= 66)) {
                mvmt2y = mvmt2y - 2;
            }
            if((corner2 == 9) && (mvmt2y <= 65)) {
                corner2 = 10;
            }
            if((corner2 == 10) && (mvmt2x <= 756)) {
                mvmt2x = mvmt2x + 2;
            }
            if((corner2 == 10) && (mvmt2x >= 755)) {
                corner2 = 11;
            }
            if((corner2 == 11) && (mvmt2y <= 436)) {
                mvmt2y = mvmt2y + 2;
            }
            if((corner2 == 11) && (mvmt2y >= 435)) {
                corner2 = 12;
            }
            if((corner2 == 12) && (mvmt2x >= 354)) {
                mvmt2x = mvmt2x - 2;
            }
            if((corner2 == 12) && (mvmt2x <= 355)) {
                corner2 = 13;
            }
            if ((mvmt3x <= 214) && (corner3 == 0)) {
                mvmt3x = mvmt3x + 2;
            }
            if ((mvmt3x >= 213) && (corner3 == 0)) {
                corner3 = 1;
            }
            if ((corner3 == 1) && (mvmt3y <= 165)) {
                mvmt3y = mvmt3y + 2;
            }
            if ((corner3 == 1) && (mvmt3y >= 164)) {
                corner3 = 2;
            }
            if ((corner3 == 2) && (mvmt3x >= 64)) {
                mvmt3x = mvmt3x - 2;
            }
            if ((corner3 == 2) && (mvmt3x <= 65)) {
                corner3 = 3;
            }
            if((corner3 == 3) && (mvmt3y <= 311)){
                mvmt3y = mvmt3y + 2;
            }
            if((corner3 == 3) && (mvmt3y >= 310)){
                corner3 = 4;
            }
            if((corner3 == 4) && (mvmt3x <= 336)) {
                mvmt3x = mvmt3x + 2;
            }
            if((corner3 == 4) && (mvmt3x >= 335)) {
                corner3 = 5;
            }
            if((corner3 == 5) && (mvmt3y >= 44)) {
                mvmt3y = mvmt3y - 2;
            }
            if((corner3 == 5) && (mvmt3y <= 45)) {
                corner3 = 6;
            }
            if((corner3 == 6) && (mvmt3x <= 535)) {
                mvmt3x = mvmt3x + 2;
            }
            if((corner3 == 6) && (mvmt3x >= 534)) {
                corner3 = 7;
            }
            if((corner3 == 7) && (mvmt3y <= 316)) {
                mvmt3y = mvmt3y + 2;
            }
            if((corner3 == 7) && (mvmt3y >= 315)) {
                corner3 = 8;
            }
            if((corner3 == 8) && (mvmt3x <= 706)) {
                mvmt3x = mvmt3x + 2;
            }
            if((corner3 == 8) && (mvmt3x >= 705)) {
                corner3 = 9;
            }
            if((corner3 == 9) && (mvmt3y >= 66)) {
                mvmt3y = mvmt3y - 2;
            }
            if((corner3 == 9) && (mvmt3y <= 65)) {
                corner3 = 10;
            }
            if((corner3 == 10) && (mvmt3x <= 756)) {
                mvmt3x = mvmt3x + 2;
            }
            if((corner3 == 10) && (mvmt3x >= 755)) {
                corner3 = 11;
            }
            if((corner3 == 11) && (mvmt3y <= 436)) {
                mvmt3y = mvmt3y + 2;
            }
            if((corner3 == 11) && (mvmt3y >= 435)) {
                corner3 = 12;
            }
            if((corner3 == 12) && (mvmt3x >= 354)) {
                mvmt3x = mvmt3x - 2;
            }
            if((corner3 == 12) && (mvmt3x <= 355)) {
                corner3 = 13;
            } 
            if ((mvmt4x <= 214) && (corner4 == 0)) {
                mvmt4x = mvmt4x + 2;
            }
            if ((mvmt4x >= 213) && (corner4 == 0)) {
                corner4 = 1;
            }
            if ((corner4 == 1) && (mvmt4y <= 165)) {
                mvmt4y = mvmt4y + 2;
            }
            if ((corner4 == 1) && (mvmt4y >= 164)) {
                corner4 = 2;
            }
            if ((corner4 == 2) && (mvmt4x >= 64)) {
                mvmt4x = mvmt4x - 2;
            }
            if ((corner4 == 2) && (mvmt4x <= 65)) {
                corner4 = 3;
            }
            if((corner4 == 3) && (mvmt4y <= 311)){
                mvmt4y = mvmt4y + 2;
            }
            if((corner4 == 3) && (mvmt4y >= 310)){
                corner4 = 4;
            }
            if((corner4 == 4) && (mvmt4x <= 336)) {
                mvmt4x = mvmt4x + 2;
            }
            if((corner4 == 4) && (mvmt4x >= 335)) {
                corner4 = 5;
            }
            if((corner4 == 5) && (mvmt4y >= 44)) {
                mvmt4y = mvmt4y - 2;
            }
            if((corner4 == 5) && (mvmt4y <= 45)) {
                corner4 = 6;
            }
            if((corner4 == 6) && (mvmt4x <= 535)) {
                mvmt4x = mvmt4x + 2;
            }
            if((corner4 == 6) && (mvmt4x >= 534)) {
                corner4 = 7;
            }
            if((corner4 == 7) && (mvmt4y <= 316)) {
                mvmt4y = mvmt4y + 2;
            }
            if((corner4 == 7) && (mvmt4y >= 315)) {
                corner4 = 8;
            }
            if((corner4 == 8) && (mvmt4x <= 706)) {
                mvmt4x = mvmt4x + 2;
            }
            if((corner4 == 8) && (mvmt4x >= 705)) {
                corner4 = 9;
            }
            if((corner4 == 9) && (mvmt4y >= 66)) {
                mvmt4y = mvmt4y - 2;
            }
            if((corner4 == 9) && (mvmt4y <= 65)) {
                corner4 = 10;
            }
            if((corner4 == 10) && (mvmt4x <= 756)) {
                mvmt4x = mvmt4x + 2;
            }
            if((corner4 == 10) && (mvmt4x >= 755)) {
                corner4 = 11;
            }
            if((corner4 == 11) && (mvmt4y <= 436)) {
                mvmt4y = mvmt4y + 2;
            }
            if((corner4 == 11) && (mvmt4y >= 435)) {
                corner4 = 12;
            }
            if((corner4 == 12) && (mvmt4x >= 354)) {
                mvmt4x = mvmt4x - 2;
            }
            if((corner4 == 12) && (mvmt4x <= 355)) {
                corner4 = 13;
            } 
            if ((mvmt5x <= 214) && (corner5 == 0)) {
                mvmt5x = mvmt5x + 2;
            }
            if ((mvmt5x >= 213) && (corner5 == 0)) {
                corner5 = 1;
            }
            if ((corner5 == 1) && (mvmt5y <= 165)) {
                mvmt5y = mvmt5y + 2;
            }
            if ((corner5 == 1) && (mvmt5y >= 164)) {
                corner5 = 2;
            }
            if ((corner5 == 2) && (mvmt5x >= 64)) {
                mvmt5x = mvmt5x - 2;
            }
            if ((corner5 == 2) && (mvmt5x <= 65)) {
                corner5 = 3;
            }
            if((corner5 == 3) && (mvmt5y <= 311)){
                mvmt5y = mvmt5y + 2;
            }
            if((corner5 == 3) && (mvmt5y >= 310)){
                corner5 = 4;
            }
            if((corner5 == 4) && (mvmt5x <= 336)) {
                mvmt5x = mvmt5x + 2;
            }
            if((corner5 == 4) && (mvmt5x >= 335)) {
                corner5 = 5;
            }
            if((corner5 == 5) && (mvmt5y >= 44)) {
                mvmt5y = mvmt5y - 2;
            }
            if((corner5 == 5) && (mvmt5y <= 45)) {
                corner5 = 6;
            }
            if((corner5 == 6) && (mvmt5x <= 535)) {
                mvmt5x = mvmt5x + 2;
            }
            if((corner5 == 6) && (mvmt5x >= 534)) {
                corner5 = 7;
            }
            if((corner5 == 7) && (mvmt5y <= 316)) {
                mvmt5y = mvmt5y + 2;
            }
            if((corner5 == 7) && (mvmt5y >= 315)) {
                corner5 = 8;
            }
            if((corner5 == 8) && (mvmt5x <= 706)) {
                mvmt5x = mvmt5x + 2;
            }
            if((corner5 == 8) && (mvmt5x >= 705)) {
                corner5 = 9;
            }
            if((corner5 == 9) && (mvmt5y >= 66)) {
                mvmt5y = mvmt5y - 2;
            }
            if((corner5 == 9) && (mvmt5y <= 65)) {
                corner5 = 10;
            }
            if((corner5 == 10) && (mvmt5x <= 756)) {
                mvmt5x = mvmt5x + 2;
            }
            if((corner5 == 10) && (mvmt5x >= 755)) {
                corner5 = 11;
            }
            if((corner5 == 11) && (mvmt5y <= 436)) {
                mvmt5y = mvmt5y + 2;
            }
            if((corner5 == 11) && (mvmt5y >= 435)) {
                corner5 = 12;
            }
            if((corner5 == 12) && (mvmt5x >= 354)) {
                mvmt5x = mvmt5x - 2;
            }
            if((corner5 == 12) && (mvmt5x <= 355)) {
                corner5 = 13;
            }
            if ((mvmt6x <= 214) && (corner6 == 0)) {
                mvmt6x = mvmt6x + 2;
            }
            if ((mvmt6x >= 213) && (corner6 == 0)) {
                corner6 = 1;
            }
            if ((corner6 == 1) && (mvmt6y <= 165)) {
                mvmt6y = mvmt6y + 2;
            }
            if ((corner6 == 1) && (mvmt6y >= 164)) {
                corner6 = 2;
            }
            if ((corner6 == 2) && (mvmt6x >= 64)) {
                mvmt6x = mvmt6x - 2;
            }
            if ((corner6 == 2) && (mvmt6x <= 65)) {
                corner6 = 3;
            }
            if((corner6 == 3) && (mvmt6y <= 311)){
                mvmt6y = mvmt6y + 2;
            }
            if((corner6 == 3) && (mvmt6y >= 310)){
                corner6 = 4;
            }
            if((corner6 == 4) && (mvmt6x <= 336)) {
                mvmt6x = mvmt6x + 2;
            }
            if((corner6 == 4) && (mvmt6x >= 335)) {
                corner6 = 5;
            }
            if((corner6 == 5) && (mvmt6y >= 44)) {
                mvmt6y = mvmt6y - 2;
            }
            if((corner6 == 5) && (mvmt6y <= 45)) {
                corner6 = 6;
            }
            if((corner6 == 6) && (mvmt6x <= 535)) {
                mvmt6x = mvmt6x + 2;
            }
            if((corner6 == 6) && (mvmt6x >= 534)) {
                corner6 = 7;
            }
            if((corner6 == 7) && (mvmt6y <= 316)) {
                mvmt6y = mvmt6y + 2;
            }
            if((corner6 == 7) && (mvmt6y >= 315)) {
                corner6 = 8;
            }
            if((corner6 == 8) && (mvmt6x <= 706)) {
                mvmt6x = mvmt6x + 2;
            }
            if((corner6 == 8) && (mvmt6x >= 705)) {
                corner6 = 9;
            }
            if((corner6 == 9) && (mvmt6y >= 66)) {
                mvmt6y = mvmt6y - 2;
            }
            if((corner6 == 9) && (mvmt6y <= 65)) {
                corner6 = 10;
            }
            if((corner6 == 10) && (mvmt6x <= 756)) {
                mvmt6x = mvmt6x + 2;
            }
            if((corner6 == 10) && (mvmt6x >= 755)) {
                corner6 = 11;
            }
            if((corner6 == 11) && (mvmt6y <= 436)) {
                mvmt6y = mvmt6y + 2;
            }
            if((corner6 == 11) && (mvmt6y >= 435)) {
                corner6 = 12;
            }
            if((corner6 == 12) && (mvmt6x >= 354)) {
                mvmt6x = mvmt6x - 2;
            }
            if((corner6 == 12) && (mvmt6x <= 355)) {
                corner6 = 13;
            }  
            if ((mvmt7x <= 214) && (corner7 == 0)) {
                mvmt7x = mvmt7x + 2;
            }
            if ((mvmt7x >= 213) && (corner7 == 0)) {
                corner7 = 1;
            }
            if ((corner7 == 1) && (mvmt7y <= 165)) {
                mvmt7y = mvmt7y + 2;
            }
            if ((corner7 == 1) && (mvmt7y >= 164)) {
                corner7 = 2;
            }
            if ((corner7 == 2) && (mvmt7x >= 64)) {
                mvmt7x = mvmt7x - 2;
            }
            if ((corner7 == 2) && (mvmt7x <= 65)) {
                corner7 = 3;
            }
            if((corner7 == 3) && (mvmt7y <= 311)){
                mvmt7y = mvmt7y + 2;
            }
            if((corner7 == 3) && (mvmt7y >= 310)){
                corner7 = 4;
            }
            if((corner7 == 4) && (mvmt7x <= 336)) {
                mvmt7x = mvmt7x + 2;
            }
            if((corner7 == 4) && (mvmt7x >= 335)) {
                corner7 = 5;
            }
            if((corner7 == 5) && (mvmt7y >= 44)) {
                mvmt7y = mvmt7y - 2;
            }
            if((corner7 == 5) && (mvmt7y <= 45)) {
                corner7 = 6;
            }
            if((corner7 == 6) && (mvmt7x <= 535)) {
                mvmt7x = mvmt7x + 2;
            }
            if((corner7 == 6) && (mvmt7x >= 534)) {
                corner7 = 7;
            }
            if((corner7 == 7) && (mvmt7y <= 316)) {
                mvmt7y = mvmt7y + 2;
            }
            if((corner7 == 7) && (mvmt7y >= 315)) {
                corner7 = 8;
            }
            if((corner7 == 8) && (mvmt7x <= 706)) {
                mvmt7x = mvmt7x + 2;
            }
            if((corner7 == 8) && (mvmt7x >= 705)) {
                corner7 = 9;
            }
            if((corner7 == 9) && (mvmt7y >= 66)) {
                mvmt7y = mvmt7y - 2;
            }
            if((corner7 == 9) && (mvmt7y <= 65)) {
                corner7 = 10;
            }
            if((corner7 == 10) && (mvmt7x <= 756)) {
                mvmt7x = mvmt7x + 2;
            }
            if((corner7 == 10) && (mvmt7x >= 755)) {
                corner7 = 11;
            }
            if((corner7 == 11) && (mvmt7y <= 436)) {
                mvmt7y = mvmt7y + 2;
            }
            if((corner7 == 11) && (mvmt7y >= 435)) {
                corner7 = 12;
            }
            if((corner7 == 12) && (mvmt7x >= 354)) {
                mvmt7x = mvmt7x - 2;
            }
            if((corner7 == 12) && (mvmt7x <= 355)) {
                corner7 = 13;
            }
            if ((mvmt8x <= 214) && (corner8 == 0)) {
                mvmt8x = mvmt8x + 2;
            }
            if ((mvmt8x >= 213) && (corner8 == 0)) {
                corner8 = 1;
            }
            if ((corner8 == 1) && (mvmt8y <= 165)) {
                mvmt8y = mvmt8y + 2;
            }
            if ((corner8 == 1) && (mvmt8y >= 164)) {
                corner8 = 2;
            }
            if ((corner8 == 2) && (mvmt8x >= 64)) {
                mvmt8x = mvmt8x - 2;
            }
            if ((corner8 == 2) && (mvmt8x <= 65)) {
                corner8 = 3;
            }
            if((corner8 == 3) && (mvmt8y <= 311)){
                mvmt8y = mvmt8y + 2;
            }
            if((corner8 == 3) && (mvmt8y >= 310)){
                corner8 = 4;
            }
            if((corner8 == 4) && (mvmt8x <= 336)) {
                mvmt8x = mvmt8x + 2;
            }
            if((corner8 == 4) && (mvmt8x >= 335)) {
                corner8 = 5;
            }
            if((corner8 == 5) && (mvmt8y >= 44)) {
                mvmt8y = mvmt8y - 2;
            }
            if((corner8 == 5) && (mvmt8y <= 45)) {
                corner8 = 6;
            }
            if((corner8 == 6) && (mvmt8x <= 535)) {
                mvmt8x = mvmt8x + 2;

            }
            if((corner8 == 6) && (mvmt8x >= 534)) {
                corner8 = 7;
            }
            if((corner8 == 7) && (mvmt8y <= 316)) {
                mvmt8y = mvmt8y + 2;
            }
            if((corner8 == 7) && (mvmt8y >= 315)) {
                corner8 = 8;
            }
            if((corner8 == 8) && (mvmt8x <= 706)) {
                mvmt8x = mvmt8x + 2;
            }
            if((corner8 == 8) && (mvmt8x >= 705)) {
                corner8 = 9;
            }
            if((corner8 == 9) && (mvmt8y >= 66)) {
                mvmt8y = mvmt8y - 2;
            }
            if((corner8 == 9) && (mvmt8y <= 65)) {
                corner8 = 10;
            }
            if((corner8 == 10) && (mvmt8x <= 756)) {
                mvmt8x = mvmt8x + 2;
            }
            if((corner8 == 10) && (mvmt8x >= 755)) {
                corner8 = 11;
            }
            if((corner8 == 11) && (mvmt8y <= 436)) {
                mvmt8y = mvmt8y + 2;
            }
            if((corner8 == 11) && (mvmt8y >= 435)) {
                corner8 = 12;
            }
            if((corner8 == 12) && (mvmt8x >= 354)) {
                mvmt8x = mvmt8x - 2;
            }
            if((corner8 == 12) && (mvmt8x <= 355)) {
                corner8 = 13;
            }
        }
    }
    if((corner == 13) && (e1 == 0)) {
        targetHealth = targetHealth - 1;
        e1 = 1;
    }
    if((corner2 == 13) && (e2 == 0)) {
        targetHealth = targetHealth - 1;
        e2 = 1;
    }
    if((corner3 == 13) && (e3 == 0)) {
        targetHealth = targetHealth - 1;
        e3 = 1;
    }
    if((corner4 == 13) && (e4 == 0)) {
        targetHealth = targetHealth - 1;
        e4 = 1;
    }
    if((corner5 == 13) && (e5 == 0)) {
        targetHealth = targetHealth - 1;
        e5 = 1;
    }
    if((corner6 == 13) && (e6 == 0)) {
        targetHealth = targetHealth - 1;
        e6 = 1;
    }
    if((corner7 == 13) && (e7 == 0)) {
        targetHealth = targetHealth - 1;
        e7 = 1;
    }
    if((corner8 == 13) && (e8 == 0)) {
        targetHealth = targetHealth - 1;
        e8 = 1;
    }
}

function graphics() {
    background(79,121,66);
    noStroke();
    fill(255);
    //"Map"
    fill('#9b7653');
    rect(0,30,200,30);
    rect(200,30,30,150);
    rect(50,150,150,30);
    rect(50,150,30,175);
    rect(50,295,300,30);
    rect(320,30,30,290);
    rect(320,30,200,30);
    rect(520,30,30,300);
    rect(520,300,200,30);
    rect(690,50,30,250);
    rect(690,50,80,30);
    rect(740,50,30,400);
    rect(340,420,400,30);
    stroke(1);
    fill(255,0,0);
    ellipse(mvmt1x, mvmt1y, 20, 20);
    ellipse(mvmt2x, mvmt2y, 20, 20);
    ellipse(mvmt3x, mvmt3y, 20, 20);
    ellipse(mvmt4x, mvmt4y, 20, 20);
    ellipse(mvmt5x, mvmt5y, 20, 20);
    ellipse(mvmt6x, mvmt6y, 20, 20);
    ellipse(mvmt7x, mvmt7y, 20, 20);
    ellipse(mvmt8x, mvmt8y, 20, 20);
    delay = millis()/1000;
    rect(100, 700, 55, 55);
	//target
	image(targetSprite,307,404);
	rect(275,485,targetHealthBarW,16);
    textSize(15);
    fill(0, 0, 0);
    text("START", 105, 730);
}

function placeholder() {
    if(loadingScreenFinished == 1) {
        roundStart();
        menuStart();
    }
}

function placement() {
    // var LaserShark=0;
    //gui
    noStroke();
    fill(39,71,144);
    rect(0, 700, windowWidth, windowHeight);
    fill(206,180,141)
    rect(0,650, windowWidth,50);
    stroke(1);
    textSize(20);
    fill(200);
    text('PLAY', 50, 750);
    textSize(11);
      text('LASER SHARK', 130, 725, 50, 50);
      text('FLEX TAPE', 210, 725, 50, 50);
      text('TOWER 404', 130, 825, 50, 50); 
     // text('UPGRADE BANK',
      
    fill(255);
    //Play
    rect(50, 750, 50, 150);
    //Laser Shark
    fill(0,0,255);
    image(lsSprite, 125, 750, 50, 50);
    fill(255);
    //Tower 404
    fill(102,0,153);
    image(Tower404Sprite, 125, 850);
    fill(255);
    //Flex Tape
    fill(134,136,138);
    image(ftSprite, 200, 750, 50, 50);
    fill(255)
    //Upgrade Bank
    rect(200, 850, 50, 50);
    ///detection
    if ((LaserShark == 0) && (mouseIsPressed) && (mouseX >= 125) && (mouseX <= 175) && (mouseY >= 750) && (mouseY <= 800) && (pPoint >= 5)) {
      LaserShark = 1
    }
    if ((LaserShark == 1) && (mouseX >= 0) && (mouseX <= windowWidth) && (mouseY >= 25) && (mouseY <= 675) && (mouseIsPressed)) {
      fill(255); 
      push()
        LSx[LSx.length] = mouseX
        LSy[LSy.length] = mouseY
        thc[thc.length] = floor(random(1,5));
        LaserShark = 0
        pPoint = pPoint - 5
    }
    if ((FlexTape == 0) && (mouseIsPressed) && (mouseX >= 200) && (mouseX <= 250) && (mouseY >= 750) && (mouseY <= 800) && (pPoint >= 5)) {
      FlexTape = 1
    }
    if ((FlexTape == 1) && (mouseX >= 0) && (mouseX <= windowWidth) && (mouseY >= 25) && (mouseY <= 675) && (mouseIsPressed)) {
      fill(255); 
      push()
        FTx[FTx.length] = mouseX
        FTy[FTy.length] = mouseY
        FlexTape = 0
        pPoint = pPoint - 5
    }
    if ((Tower404 == 0) && (mouseIsPressed) && (mouseX >= 125) && (mouseX <= 175) && (mouseY >= 850) && (mouseY <= 900) && (pPoint >= 5)) {
      Tower404 = 1
    }
    if ((Tower404 == 1) && (mouseX >= 0) && (mouseX <= windowWidth) && (mouseY >= 25) && (mouseY <= 675) && (mouseIsPressed)) {
      fill(255); 
      push()
        T404x[T404x.length] = mouseX - 5
        T404y[T404y.length] = mouseY - 5
        Tower404 = 0
        pPoint = pPoint - 5
    }
}

function otherDrawStuff() {
    rect(400,400,100,100);
    text("Start",400,400,50);
    if((mouseX <= 500) &&(mouseX >= 400) && (mouseY <= 500) && (mouseY >= 400) && (mouseIsPressed)) {
        startButtonClicked = 1;
    }
    if(loadingScreenFinished == 1) {
        graphics();
        placeholder();
    }
    startMenu();
    for (i = 0; i < LSx.length; i++) {
        fill(0,0,255);
        image(lsSprite, LSx[i] - 25, LSy[i] - 25, 50, 50);
    }
    for (i = 0; i < FTx.length; i++) {
        fill(134,136,138);
        image(ftSprite, FTx[i] - 25, FTy[i] - 25, 50, 50);
    }
    for (i = 0; i < T404x.length; i++) {
        fill(102,0,153);
        image(Tower404Sprite, T404x[i], T404y[i], 50, 50);
    }
    fill(255)
    textSize(20);
    fill(0);
    text(mouseX, 200, 400);
    text(mouseY, 200, 600);
    fill(200);
    rect(0, 700, 1000, 300);
}
/*function hitdetection(){
        for(j = 0; j < laser.length; j++) {
        shot = dist(mvmt1x, mvmt1y, laser[j].x, laser[j].y);
        if (shot == 10) {
            mvmt1x = -10;
        }
    }
    shoot();
}
*/function shoot () {
    //tower hit chance
    text(thc, 10, 10);
        //shoot
        for(i = 0; i < LSx.length; i++) {

            if (dist(LSx[i], LSy[i], mvmt1x, mvmt1y) <= detectionRadius) {
                if(thc[i] == 1) {
                    fill(0)
                    rect(mvmt1x,mvmt1y, 10, 20)
                    mvmt1x = -10
                    mvmt1y = -10
                    corner = 20;
                }
            }
        }
    }
    for(i = 0; i < LSx.length; i++) {
        if (dist(LSx[i], LSy[i], mvmt2x, mvmt2y) <= detectionRadius) {
            if(thc[i] == 1) {
                fill(0)
                rect(mvmt2x,mvmt2y, 10, 20)
                mvmt2x = -10
                mvmt2y = -10
                corner2 = 20;
            }
        }
    }
    for(i = 0; i < LSx.length; i++) {
        if (dist(LSx[i], LSy[i], mvmt3x, mvmt3y) <= detectionRadius) {
            if(thc[i] == 1) {
                fill(0)
                rect(mvmt3x,mvmt3y, 10, 20)
                mvmt3x = -10
                mvmt3y = -10
                corner3 = 20;
            }
        }
    }
    for(i = 0; i < LSx.length; i++) {
        if (dist(LSx[i], LSy[i], mvmt4x, mvmt4y) <= detectionRadius) {
            if(thc[i] == 1) {
                fill(0)
                rect(mvmt4x,mvmt4y, 10, 20)
                mvmt4x = -10
                mvmt4y = -10
                corner4 = 20;
            }
        }
    }
    for(i = 0; i < LSx.length; i++) {
        if (dist(LSx[i], LSy[i], mvmt5x, mvmt5y) <= detectionRadius) {
            if(thc[i] == 1) {
                fill(0)
                rect(mvmt5x,mvmt5y, 10, 20)
                mvmt5x = -10
                mvmt5y = -10
                corner5 = 20;
            }
        }
    }
    for(i = 0; i < LSx.length; i++) {
        if (dist(LSx[i], LSy[i], mvmt6x, mvmt6y) <= detectionRadius) {
            if(thc[i] == 1) {
                fill(0)
                rect(mvmt6x,mvmt6y, 10, 20)
                mvmt6x = -10
                mvmt6y = -10
                corner6 = 20;
            }
        }
    }
    for(i = 0; i < LSx.length; i++) {
        if (dist(LSx[i], LSy[i], mvmt7x, mvmt7y) <= detectionRadius) {
            if(thc[i] == 1) {
                fill(0)
                rect(mvmt7x,mvmt7y, 10, 20)
                mvmt7x = -10
                mvmt7y = -10
                corner7 = 20;
            }
        }
    }
    for(i = 0; i < LSx.length; i++) {
        if (dist(LSx[i], LSy[i], mvmt8x, mvmt8y) <= detectionRadius) {
            if(thc[i] == 1) {
                fill(0)
                rect(mvmt8x,mvmt8y, 10, 20)
                mvmt8x = -10
                mvmt8y = -10
                corner8 = 20;
            }
        }
    }




function simplify() {
    otherDrawStuff();
    placement();
    rect(400,400,100,100);
    text("Start",400,400,50);
    if((mouseX <= 500) &&(mouseX >= 400) && (mouseY <= 500) && (mouseY >= 400) && (mouseIsPressed)) {
        startButtonClicked = 1;
    }
    if(loadingScreenFinished == 1) {
        graphics();
        placeholder();
    }
    startMenu();
    for (i = 0; i < LSx.length; i++) {
        fill(0,0,255);
        image(lsSprite, LSx[i] - 25, LSy[i] - 25, 50, 50);
    }
    for (i = 0; i < FTx.length; i++) {
        fill(134,136,138);
        image(ftSprite, FTx[i] - 25, FTy[i] - 25, 50, 50);
    }
    for (i = 0; i < T404x.length; i++) {
        fill(102,0,153);
        image(Tower404Sprite, T404x[i], T404y[i], 50, 50);
    }
    fill(255)
    textSize(20);
    fill(0);
    fill(200);
    rect(0, 700, 1000, 300);
    placement();
    shoot();
}
/*
Link for pathfinding
https://www.raywenderlich.com/3016-introduction-to-a-pathfinding
*/