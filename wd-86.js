
var canvasW = 600;
var canvasH = 600;
let myColors = ["#4f5bdb", "#66cdaa", "#00a4b2", "#0EE500"];


function setup() {
    createCanvas(canvasW, canvasH);
    //  saveFrames("wd-086", "png", 2, 22);


}

function draw() {
    background(0);
    var lineLenght = 300;
    for (let index = 0; index < 50; index++) {
        stroke(myColors[floor(random(myColors.length))]);
        strokeWeight(random(3));
        line(random(canvasW), random(canvasW), random(canvasW), random(canvasW));
        //  line(random(canvasW), canvasW, canvasW, random(canvasW));

    }


}
function mouseClicked() {

    myColors = myColors.length > 1 ? ["#fffff"] : ["#4f5bdb", "#66cdaa", "#00a4b2"];

}



/*
   "086" : {
    "title" : "Wall Drawing #86 (1971)",
    "description" : "Ten thousand lines about 10 inches (25 cm) long, covering the wall evenly."
  },
*/