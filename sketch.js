//let angleMouth;
//let mic;
//let micLevel;
let value = 0;
let angleMouth = 10;
let bamYes = false;
let sketchStarted = false;

//Change Box dog ear color
var color = 0

let ball = [];

function setup() {

  createCanvas(400, 400);
  angleMode(DEGREES);

  createButton("Start").mousePressed(startSketch);

function startSketch(){
  mic = new p5.AudioIn()
  mic.start();

  sketchStarted = true;
}

  for (let i = 0; i <= 6; i++) {
    ball[i] = new Ball(random(1, 10) * width * .1, random(1, 10) * height * .2, random(360), random(10) * .2);
  }

}


function draw() {

if(sketchStarted){


  console.log("mouse level " + mic.getLevel());

  micLevel = mic.getLevel();

  angleMouth = map(mic.getLevel(), 0, .3, 0, 360);

  console.log(angleMouth)

  background(220);

//change box dog ears color
   color = map(mouseY, 0, 400, 0, 355);

  if(mouseX < 100) {
    noStroke();
    fill(220);
    rect(width * .50, height * .25, width * .1);
    rect(width * .2, height * .45, width * .1);
  }

  if(mouseX >= 200 && mouseX <= 300) {
    noStroke();
    fill(99, 112, 78);
    circle(width * .50, height * .25, width * .1);
    circle(width * .2, height * .45, width * .1);
  }

//rect(x, width * .9, height * .1, 10);

  x = this._xPos + 1;

if (x > 400 + width * .9) {
  x = -width * .9 / 2;

}

for (i = 0; i < ball.length; i++) {
  ball[i].display();
  ball[i].move();
}


drawBoxDogBody();

drawWagTail();

drawBoxDogEye();

drawBoxDogMouthLower(angleMouth);

drawBoxDogMouthUpper(micLevel * 100);

//   drawBoxDogBall(width * .9, height * .45, 10);

//   drawBoxDogBall(width * .9, height * .2, 10);

//   drawBoxDogBall(width * .9, height * .1, 10);

//end draw loop
}

if (bamYes == true) {
  circle(width * .50, height * .25, width * .1);
  circle(width * .2, height * .45, width * .1);
  //circle(width/2, height/2, 100);
}

function mousePressed() {
  console.log("mouse beep");

  //if the position of the mouse is inside the region then do this

  if (mouseX > width * 0.7 && mouseX < width * 0.8 && mouseY > height * 0.05 && height * 0.25) {
    console.log("mouse beep in here");
    angleMouth = -angleMouth;
  } else if (mouseX < width * .2 || mouseX > width * .8) {
    bamYes = !bamYes;
    console.log("mouse beep in here");
  }


}

function drawBoxDogBody() {
  //Animal color
  fill(99, 112, 78);
  noStroke();

  beginShape();
  //Main Body of Dog - squares

  vertex(width * .2, height * .5);
  vertex(width * .2, height * 1);
  vertex(width * .3, height * 1);
  vertex(width * .3, height * .8);
  vertex(width * .5, height * .8);
  vertex(width * .5, height * 1);
  vertex(width * .6, height * 1);
  vertex(width * .6, height * .5);
  vertex(width * .7, height * .5);
  vertex(width * .7, height * .3);
  vertex(width * .5, height * .3);
  vertex(width * .5, height * .5);
  endShape(CLOSE);

  //Draw ear
  //circle(width * .50, height * .25, width * .1);
}

function drawBoxDogMouthUpper() {
  fill(99, 112, 78);
  noStroke();
  beginShape();

  // mouth, upper
  vertex(width * .7, height * .4);
  vertex(width * .8, height * .3);
  vertex(width * .9, height * .4);
  endShape(CLOSE);

}

function drawBoxDogEye() {
  //Draw eye
  fill(255);
  stroke(0);
  circle(width * .6, height * .37, width * .1);


  //draw pupil
  fill(0);
  circle(width * .64, height * .39, width * .04);


}

function drawBoxDogMouthLower(angle) {

  fill(99, 112, 78);
  noStroke();
  beginShape();
  // mouth, lower
  push();
  translate(width * .7, height * .4);
  rotate(angle)
  beginShape();

  vertex(width * .1, height * .1);
  vertex(0, 0);
  vertex(width * .2, height * .1);
  endShape(CLOSE);
  pop();
}

function drawWagTail() {
  //Tail color
  fill(99, 112, 78);
  noStroke();

  //Draw tail and rotate
  //circle(width * .2, height * .45, width * .1);

}

function drawBoxDogBall() {
  // BoxDogBall color
  fill(60, 32, 70);
  noStroke();

  //draw BoxDogBall
  push();
  translate(this.xPos, this.yPos);
  rotate(this.rotation);
  rectMode(CENTER);
  rect(0, 0, width * .1, height * .06);
  pop();

}

}
