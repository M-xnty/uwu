var bullet,wall;
var bullet,speed, weight;
  function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255);  
  drawSprites();
  car=createSprite(50,200,50,50);
  car.velocityX=speed;
  wall=createSprite(1500,200,60,height/2);
  speed=random(223,321);
  weight=random(30,52);
}function collision (){
 if(wall.x-bullet.x < (bullet.width+wall.width2)

car.velocityX=0;
var deformation=0.5 * weight *speed * speed/25509;
if(deformation > 180)
{
car.shapeColor=color(255,0,0);
}
if(deformation<180 && deformation>100);
}
car.shapeColor=color(230,230,0);

if(deformation<100)

car.shapeColor=color(0,255,0)

