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
}

function setup() {
  createCanvas(900,700)
  engine = Engine.create();
  world = engine.world;

// Create snow
if(frameCount % 60 ===0){
  snow1= new Snow(200,50,50,50)
  console.log(snow1.body.speed)
 snow1.scale = 0.1
 
}
 // create Sprite
 penguin = createSprite(200,600,50,50)
 penguin.addAnimation("penguinWalk",penguinImg)
 penguin.scale = 1.0
 
   
}
function draw(){
background(bgImg)
Engine.update(engine);

// snow display
snow1.display();
 drawSprites();
}
