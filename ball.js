class Ball{
 constructor(_xPos, _yPos, _rotation, _size) {
  this.xPos = _xPos;
  this.yPos = _yPos;
  this.rotation = _rotation;  
  this.size = _size;
 }
  
  display(){
    
   // BoxDogBall color
  fill(60, 32, 70);
  noStroke();

  //draw BoxDogBall
  push();
  translate(this.xPos, this.yPos);
  rotate(this.rotation);
    scale(this.size);
  rectMode(CENTER);
  rect(0, 0, width * .1, height * .06);
  pop();
    
  }
  
  move(){
    //this.angle++ is shorthand for this.angle = this.angle + 1;
    this.rotation++;
    
    
    if (this.yPos <= height * 1.06){
   // this.yPos = this.yPos + 2;
    //shorthand below +=
    this.yPos += 2;
    } else {
       this.yPos = -height * .06; 
    }
  }
  
}





// function drawBoxDogBall(xPos, yPos, rotation) {
//   //BoxDogBall color
//   fill(60, 32, 70);
//   noStroke();

//   //draw BoxDogBall
//   push();
//   translate(xPos, yPos);
//   rotate(rotation);
//   rectMode(CENTER);
//   rect(0, 0, width * .1, height * .06);
//   pop();
// }

