const Engine=Matter.Engine;
const World=Matter.World;
const Events=Matter.Events;
const Bodies=Matter.Bodies;
const Body=Matter.Body;

var drop=[],man,ground;
var maxDrops=300;

function preload(){
   
}

function setup(){
 createCanvas(800,500);  
 engine=Engine.create();
 world=engine.world;

 ground=new Ground(400,490,800,20);
 
 //drop=new Drops(200,200);
 man=new Man(400,407);

 for(var i=0;i<=maxDrops;i++){
    drop.push(new Drops( random(0,800) , random(0,475) ) )
 }
 

 Engine.run(engine);
}

function draw(){
background(rgb(30,200,255));
Engine.update(engine);
ground.display();
//drop.display();
for(var i=0; i<drop.length; i++){
    drop[i].display();
}

console.log(mouseY);
man.display();
 drawSprites();   

}   

