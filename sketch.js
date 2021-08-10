var canvasW = 600;
var canvasH = 600;
let myColors = ["#4f5bdb", "#66cdaa", "#00a4b2", "#0EE500"];
function setup() {
  createCanvas(canvasW, canvasH);
  //  saveFrames("wd-046", "png", 2, 22);

}

function draw() {
  background(0);
  for (let index = 0; index < canvasW; index = index + 10) {
    stroke(myColors[floor(random(myColors.length))]);
    strokeWeight(random(3));
    line(index, 0, index, canvasH);
    //line(index,0,canvasH,canvasH);

  }
}
function mouseClicked() {

  myColors = myColors.length > 1 ? ["#fffff"] : ["#4f5bdb", "#66cdaa", "#00a4b2"];

}

/*
  "046" : {
    "title" : "Wall Drawing #46 (1970)",
    "description" : "Vertical lines, not straight, not touching, covering the wall evenly."
  },
*/