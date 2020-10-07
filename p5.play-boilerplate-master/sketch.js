//Calculating time using predefined func from p5.js
let hr = hour;
mn = minute;
sc = second;

function setup() {
  createCanvas(800,400);
    createSprite(400, 200, 50, 50);

    angleMode(DEGREES);
}

function draw() {
    background(255, 255, 255);  

    scAngle = (0, 60, 0, 360);
    mnAngle = (0, 60, 0, 360);
    hrAngle = (0, 24, 0, 360);

    stroke("blue");
    strokeWeight(6);
    line(0, 0, 100, 0);

    translate()

  drawSprites();
}