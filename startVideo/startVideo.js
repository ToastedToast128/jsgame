var vid;
var i = 0
function setup(){
  vid = createVideo(['nvParodyIntro.mp4'], vidLoad);
	frameRate(15);
}
// This function is called when the video loads
function vidLoad() {
  vid.play();
}
function draw() {
	if((keyIsDown(13))|| (i == 645)) {
	window.location.replace("../splashscreen/index.html");
	}
	if(keyIsDown(36)) {
	window.location.replace("../homekey/index.html");
	}
	i = i+1
}