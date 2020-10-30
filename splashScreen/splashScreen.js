var vid;
var i = 0
function setup(){
  vid = createVideo(['thxintro.mp4'], vidLoad);
	frameRate(30);
}
// This function is called when the video loads
function vidLoad() {
  vid.play();
}
function draw() {
    if (keyIsDown(13)) {
    window.location.replace("../game_titlescreen/index.html")
  }
  if (keyIsDown(36)) {
	window.location.replace("../homekey/index.html");
  }
i = i+1
if(i==534) {
window.location.replace("../game_titlescreen/index.html")
  }
}
