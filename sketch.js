var tower,towerImage;
var door,doorImage;
var doorsGroup;
var climber,climberImage,climbersGroup;
var ghost,ghostImage;
var invisibleBlockGroup, invisibleBlock;
var res,res_img;

var ra,la,upa,rai,lai,upai;
var gameState = "play";
function preload(){
  towerImage = loadImage("tower.png");
  doorImage = loadImage("door.png");
  climberImage = loadImage("climber.png");
  ghostImage = loadImage("ghost-standing.png");
 rai = loadImage("ra.png");
 lai = loadImage("lefta.png");
 upai = loadImage("upa.png");
}

function setup(){
createCanvas(250,500);  


  tower = createSprite(windowWidth / 2,windowHeight/2);
  tower.addImage(towerImage);
  tower.scale = 280/500;
  tower.velocityY = 1;
  doorsGroup = new Group();
  climbersGroup = new Group();
  invisibleBlockGroup = new Group();
  ghost = createSprite(125,250,50,50);
  ghost.addImage(ghostImage);
  ghost.scale = 0.8;
  ghost.visible = true;
  ra = createSprite(50,470,5,5);
  ra.addImage(rai);
  ra.scale = 0.5;
  
}

function draw(){
  background(0);
  camera.x = windowWidth/2;
  camera.y = windowHeight/2;
  if (gameState === "play"){
   
  
  if(tower.y > 400){
    tower.y = 300;
  }
  if(keyDown("LEFT_ARROW")){
    ghost.x = ghost.x - 3
  }
  
  if(keyDown("RIGHT_ARROW") ){
    ghost.x = ghost.x + 3
  }
  
  if(keyDown("space") ){
    ghost.velocityY = -5;
  }
  ghost.velocityY = ghost.velocityY + 0.8
  if(climbersGroup.isTouching(ghost)){
    ghost.velocityY = 0;
  }
  spawnDoors();
  if(invisibleBlockGroup.isTouching(ghost) || ghost.y > 600 || ghost.y < 0 ){   ghost.destroy();         gameState = "end" }}
  
  
  drawSprites();

if (gameState === "end"){
  
  var bb = createSprite(300,300,6600,6600)
  bb.shapeColor = "black";
  stroke("yellow");
  fill("yellow"); 
  textSize(30); 
  text("Game Over", windowWidth/2.2 - 5,250)
  stroke("orange");
  fill("orange"); 
  textSize(10); 
  text("GAME BY VARAD VEER", windowWidth/2 - 30,330)

}
}

function spawnDoors(){
   if(frameCount % 240 === 0){
     door = createSprite(200,-50)
     door.addImage(doorImage);
     climber = createSprite(200,10);
     climber.addImage(climberImage);
     var invisibleBlock = createSprite(200,15); invisibleBlock.width = climber.width; invisibleBlock.height = 2;
     door.x = Math.round(random(100,400));
     door.velocityY = 1;
     climber.x = door.x;
     invisibleBlock.x = door.x;
invisibleBlock.velocityY = 1;
     climber.velocityY = 1;
     
     climber.lifeTime = 600;
     climbersGroup.add(climber);
     invisibleBlock.visible = false;
     invisibleBlockGroup.add(invisibleBlock);
     door.lifeTime = 600;
     doorsGroup.add(door);
      ghost.depth = door.depth;
     ghost.depth = ghost.depth + 1
     
   }
}