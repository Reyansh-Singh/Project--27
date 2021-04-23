
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var  bobObject1,bobObject2, bobObject3, bobObject4,bobObject5
var roof,rope1,rope2,rope3,rope4,rope5

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof = new Roof(300,300,500,20)

	bobObject1 = new Bob(180,500,50)
	bobObject2 = new Bob(240,500,50)
	bobObject3 = new Bob(300,500,50)
	bobObject4 = new Bob(360,500,50)
	bobObject5 = new Bob(380,500,50)

	var bobRadius = bobObject1.r;

	rope1=new  Rope(bobObject1.body,roof.body,-bobRadius*2,0)
	rope2=new  Rope(bobObject2.body,roof.body,-bobRadius*2,0)
	rope3=new  Rope(bobObject3.body,roof.body,-bobRadius*2,0)
	rope4=new  Rope(bobObject4.body,roof.body,-bobRadius*2,0)
	rope5=new  Rope(bobObject5.body,roof.body,-bobRadius*2,0)
	
	Engine.run(engine);
    
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 roof.display();
 bobObject1.display();
 bobObject2.display();
 bobObject3.display();
 bobObject5.display();
 rope1.display();
 rope2.display();
 rope3.display();
 rope4.display();
 rope5.display();
}



