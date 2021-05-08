var hr, mn, sec;
var hrAngle, mnAngle, secAngle;


function setup() {
  createCanvas(800,400);

  angleMode(DEGREES);

}

function draw() {
  background(255,255,255); 
 
  translate(200,200);
  rotate(-90)

  hr = hour();
  mn = minute();
  sec = second();
  
  //calculate the time
  secAngle = map(sec,0,60,0,360);

  mnAngle = map(mn,0,60,0,360);

  hrAngle = map(hr%12,0,12,0,360);
  

  //draw the sec hand
  push();
  rotate(secAngle);
  stroke(255,0,0);
  strokeWeight(7);
  line(0,0,100,0);
  pop()

  //draw mn hand
  push();
  rotate(mnAngle);
  stroke(0,255,0);
  strokeWeight(7);
  line(0,0,100,0);
  pop()

  //draw hr hand
  push();
  rotate(hrAngle);
  stroke(0,0,255);
  strokeWeight(7);
  line(0,0,100,0);
  pop()

  noFill();
  //adding the arcs
  stroke(255,0,0);
  strokeWeight(7)
  arc(0, 0, 300, 300, 0, secAngle)
  stroke(0,255,0);
  arc(0, 0, 280, 280, 0, mnAngle)
  stroke(0,0,255);
  arc(0, 0, 260, 260, 0, hrAngle)

  drawSprites();
}