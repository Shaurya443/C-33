const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var bgImg
var snow1
var world
var penguinImg, penguin


function preload(){
bgImg = loadImage("bg.png")
penguinImg = loadAnimation("penguin1.png","penguin2.png")
snow_Img = loadImage("snow1.png")
}

function setup() {
  createCanvas(900,700)
  engine = Engine.create();
  world = engine.world;
spawnSnow()


 penguin = createSprite(200,600,50,50)
 penguin.addAnimation("penguinWalk",penguinImg)
 penguin.scale = 1.0
 
   
}
function draw(){
background(bgImg)
Engine.update(engine);

// snow display
snow1.display()

drawSprites();

}

function spawnSnow(){
  if(frameCount % 60 === 0){
    snow1 = new Snow(200,50,50,50)
    snow1.addImage("snowFalling",snow_Img)
    snow1.scale = 0.1;
    snow1.velocityY = -3
  }
  
}

