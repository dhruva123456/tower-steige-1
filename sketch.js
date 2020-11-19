const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground,block1,block2,hexagonimg;
function preload(){
  hexagonimg = loadImage("hexagon.png");
}
function setup() {
  createCanvas(1000,600);
  engine = Engine.create();
  world = engine.world;
  stand1 = new Stand(580,450,270,10);
  stand2 = new Stand(850,200,200,10);
  //first stand
  //first step
  var block_30_options={
    'restitution':0.3,
    'friction':1.0,
    'density':1.0
  }
  block30 = Bodies.rectangle(490,415,30,40,block_30_options);
  World.add(world,block30);
  //block1 = new Block(490,415,10,20);  
  block2 = new Block(520,415,30,40);
  block3 = new Block(550,415,30,40);  
  block4 = new Block(580,415,30,40);
  block5 = new Block(610,415,30,40);  
  block6 = new Block(640,415,30,40);
  block7 = new Block(670,415,30,40);
  //second step
  block8  = new Block(520,370,30,40);  
  block9  = new Block(550,370,30,40);
  block10 = new Block(580,370,30,40);  
  block11 = new Block(610,370,30,40);
  block12 = new Block(640,370,30,40); 
  //third step
  block13  = new Block(550,325,30,40);
  block14 = new Block(580,325,30,40);  
  block15 = new Block(610,325,30,40);
  //fourth step
  block16 = new Block(580,280,30,40);
  var options={
    isStatic : true
  }
  ground = Bodies.rectangle(500,580,1000,70,options);
  World.add(world,ground);
  ball = Bodies.circle(200,200,20);
  World.add(world,ball);
  slingShot = new SlingShot(this.ball,{x:200,y:200});
}
function draw() {
  background("#AC92EB");
  rectMode(CENTER)
  fill("yellow")
  rect(ground.position.x,ground.position.y,1000,70)  
  rectMode(CENTER)
  fill("yellow")
  rect(block30.position.x,block30.position.y,10,20)  
  Engine.update(engine);
  stand1.display();
  stand2.display();
  fill("#ED5564")
 // block1.display();
  block2.display();
  block3.display();
  block4.display(); 
  block5.display();
  block6.display(); 
  block7.display();
  fill("#FFCE54")
  block8.display();
  block9.display(); 
  block10.display();
  block11.display(); 
  block12.display();
  fill("#A0D568")
  block13.display();
  block14.display(); 
  block15.display();
  fill("#4FC1E8")
  block16.display(); 
  imageMode(CENTER)
  image(hexagonimg ,ball.position.x-50,ball.position.y-80,40,40);

  slingShot.display();
  drawSprites();
}
function mouseDragged(){
  Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY});
}

function mouseReleased(){
  slingShot.fly();
}