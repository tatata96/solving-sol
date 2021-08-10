
var canvasW = 600;
var canvasH = 600;
let myColors = ["#4f5bdb", "#66cdaa", "#00a4b2", "#0EE500"];
function setup() {
    createCanvas(canvasW, canvasH);
    //saveFrames("wd-017", "png", 2, 22);

}

function draw() {
    background(0);


    strokeWeight(3);


    //top-left box
    for (let index = 0; index < canvasW / 2; index = index + 15) {
        stroke(myColors[floor(random(myColors.length))]);
        line((canvasW / 2) - index, 0, 0, (canvasH / 2) - index);
        line((canvasW / 2) - index, (canvasW / 2), (canvasW / 2), (canvasW / 2) - index)
        // line((canvasW / 2) + index, 0, 0, (canvasH / 2) + index);

    }
    //top-right
    for (let index = canvasW / 2; index < canvasW; index = index + 10) {
        stroke(myColors[floor(random(myColors.length))]);
        // strokeWeight(random(12));
        line(index, 0, index, canvasH / 2);
    }

    //bottom-left box
    for (let index = 300; index < canvasH; index = index + 10) {
        stroke(myColors[floor(random(myColors.length))]);

        line(0, index, canvasW / 2, index);
    }
    //bottom right
    translate(300, 300);
    for (let index = 0; index < canvasH; index = index + 15) {
        stroke(myColors[floor(random(myColors.length))]);

        //  line(index, index, canvasW, index);
        line(index, 0, canvasW - 10, canvasH - index);
        line(0, index, canvasW - index, canvasH + 10);
    }



    stroke("#ffffff");
    //divide canvas into 4 parts
    line(canvasW / 2, 0, canvasW / 2, canvasH);
    line(0, canvasH / 2, canvasW, canvasH / 2);

}
function mouseClicked() {

    myColors = myColors.length > 1 ? ["#fffff"] : ["#4f5bdb", "#66cdaa", "#00a4b2"];

}


/*
  "017" : {
    "title" : "Wall Drawing #17 (1969)",
    "description" : "Four-part drawing with a different line direction in each part."
  },
 */