const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var bgImg
var snow1
var world

function preload(){
bgImg = loadImage("bg.png")
}

function setup() {
  createCanvas(1000,700)
  engine = Engine.create();
  world = engine.world;

  snow1= new Snow(1050,200)
 snow1.scale = 0.9

   
}
function draw(){
background(bgImg)
Engine.update(engine);

snow1.display();

}
