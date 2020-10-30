var vid;
var i = 0
function setup(){
  vid = createVideo(['countryroads.mp4'], vidLoad);
	frameRate(15);
}
// This function is called when the video loads
function vidLoad() {
  vid.play();
}
function draw() {
	if((keyIsDown(13)) || (i==674)) {
	window.location.replace("../splashscreen/index.html");
	}
	i = i+1
}