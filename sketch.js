
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
var ball, ball2;
var ground, ground2, ground3;

function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  
   var ball_options = {
    restitution: 0.95,
    frictionAir:0.01
  }

   
   var ground_options ={
     isStatic: true
   };
  

  ground = Bodies.rectangle(200,390,400,20,ground_options);
  World.add(world,ground);

  ground2 = Bodies.rectangle(360, 270, 400,20,ground_options);
  World.add(world, ground2);

  ground3 = Bodies.rectangle(10,270,20,20,ground_options);
  World.add(world, ground3);

  ball = Bodies.circle(100,10,20,ball_options);
  World.add(world,ball);

  ball2 = Bodies.circle(300, 10, 20, ball_options);
  World.add(world,ball2);
  
  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background(51);
  Engine.update(engine);
  
  ellipse(ball.position.x,ball.position.y,20);
  ellipse(ball2.position.x,ball2.position.y,20);
  rect(ground.position.x,ground.position.y,400,20);
  rect(ground2.position.x,ground2.position.y,400,20);
  rect(ground3.position.x,ground3.position.y,20,20);
 
}

