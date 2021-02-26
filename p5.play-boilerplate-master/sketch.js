//WRITING FUNCTIONS WHICH CAN TAKE ARGUMENTS


var fixedRect, movingRect;
var gameobject1, gameobject2, gameobject3, gameobject4;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
 
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";

  gameobject1 = createSprite(100,100,50,50);
  gameobject1.shapeColor = "green";
  
  gameobject2 = createSprite(200,300,30,40);
  gameobject2.shapeColor = "green";

  gameobject3 = createSprite(700,550,40,35);
  gameobject3.shapeColor = "green";

  gameobject4 = createSprite(850,670,50,40);
  gameobject4.shapeColor = "green";
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

 if( CollisionAlg(movingRect, gameobject4)){
   movingRect.shapeColor = "red";
   gameobject4.shapeColor = "red";
 }
 else{
  movingRect.shapeColor = "green";
  gameobject4.shapeColor = "green";
 }

 if( CollisionAlg(movingRect, gameobject3)){
  movingRect.shapeColor = "red";
  gameobject3.shapeColor = "red";
}
else{
 movingRect.shapeColor = "green";
 gameobject3.shapeColor = "green";
}

  drawSprites();
}

function CollisionAlg(object1,object2){

  if (object1.x - object2.x < object1.width/2 + object2.width/2
    && object1.x - object2.x < object1.width/2 + object2.width/2
    && object2.y - object1.y < object1.height/2 + object2.height/2
    &&object1.y - object2.y < object1.height/2 + object2.height/2) {

      return true;
  //object2.shapeColor = "turquoise";
  //object1.shapeColor = "turquoise";
}
else {

  return false;
  //movingRect.shapeColor = "green";
  //fixedRect.shapeColor = "green";
}

}