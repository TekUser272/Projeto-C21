const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

var par1
//var par2
var par3
var par4

var bolinha

var botao

function setup() {
  createCanvas(1500,700);
  engine = Engine.create();
  
  world = engine.world;

  par1 = new Paredes(750,690,1500,20)
  //par2 = new Paredes(750,10,1500,20)
  par3 = new Paredes(1300,600,20,450)
  par4 = new Paredes(800,600,20,300)

  botao = createImg("push.png")
  botao.position(1360,600)
  botao.size(100,100)

  botao.mouseClicked(vush)

  var bolinha_options = {
    restitution: 0.95,
    frictionAir: 0.01,
    density: 1.2
  }

  bolinha = Bodies.circle(300,200,20,bolinha_options)
  World.add(world,bolinha)
  
  rectMode(CENTER);
  ellipseMode(RADIUS);
}

function draw() {

  background(51);

  par1.show()
  //par2.show()
  par3.show()
  par4.show()

  ellipse(bolinha.position.x,bolinha.position.y,20)

  Engine.update(engine);
}

function vush(){

  Matter.Body.applyForce(bolinha,{x:0,y:0},{x:10,y:1})

}