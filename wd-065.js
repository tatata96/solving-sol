var canvasW = 600;
var canvasH = 600;
let myColors = ["#4f5bdb", "#66cdaa", "#00a4b2", "#0EE500"];

function setup() {
  createCanvas(canvasW, canvasH);
  //frameRate(4);
  saveFrames("wd-065", "png", 2, 22);

}

function draw() {
  background(0);
  stroke("#fffff");
  for (let index = 0; index < 20; index++) {
    stroke(myColors[floor(random(myColors.length))]);

    line(random(canvasW), 0, 0, random(canvasW));
    line(random(canvasW), canvasW, canvasW, random(canvasW));
    line(0, random(canvasW), random(canvasW), 0);
    line(canvasW, random(canvasW), random(canvasW), canvasW);
  }



}
function mouseClicked() {


}

/*
  "065" : {
    "title" : "Wall Drawing #65 (1971)",
    "description" : "Lines not short, not straight, crossing and touching, drawn at random, using four colors, uniformly dispersed with maximum density, covering the entire surface of the wall."
  },


*/