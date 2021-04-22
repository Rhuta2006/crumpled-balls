
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject	
var world;
var paper1;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,650);

	paper1=new Paper(200,500,100);

	var render=Render.create({
		element:document.body,
		engine:engine,
		options:{
			width:1600,
			height:700,
			wireframes:false
		}
	})
    Engine.run(engine);
    Render.run(render);
	
	

  
}


function draw() {
  imageMode(CENTER);
  background(230);
 

  groundObject.display();
  dustbinObj.display();
 
  paper1.display();

  
  
}
function keyPressed(){
	if(keyCode===(space)){
		Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:130,y:-145})
	}
}

