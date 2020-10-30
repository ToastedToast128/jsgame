var imgDab;
var i = 0
var countryRoads
function preload() {
  imgDab = loadImage('Dab.png');
  countryRoads = loadSound('vi1oof.ogg')
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(10)
  countryRoads.loop();
}

function draw() {
  background(22); 
  
  
    if ((mouseIsPressed) || keyIsDown(13)) {
    window.location.replace("../game/index.html")
  }
  if (keyIsDown(36)) {
    window.location.replace("../homekey/index.html");
  }
i = i+1
if(isEven(i)) {
image(imgDab, 0, 0);
background(0)
image(imgDab, 0, 0);
textFont("Comic Sans MS");
  textSize(72)
    fill('#FFFFFF')
    textSize(48)
    text("oof to you", 240, 230)
} else {
image(imgDab, 0, 0);
background(255)
image(imgDab, 0, 0);
textFont("Comic Sans MS");
  textSize(72)
    fill('#000000')
    textSize(48)
    text("oof to you", 240, 230)
}
}

function isEven(num) {
    return num % 2 === 0;
}