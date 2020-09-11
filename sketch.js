const Engine=Matter.Engine;
const World=Matter.World;
const Events=Matter.Events;
const Bodies=Matter.Bodies;
const Body=Matter.Body;

var drop=[],man,ground,lightning;
var lightning1,lightning2,lightning3;
var maxDrops=300;

function preload(){
   lightning1=loadImage("lightning1.png");
   lightning2=loadImage("lightning2.png");
   lightning3=loadImage("lightning3.png");
}

function setup(){
 createCanvas(800,500);  
 engine=Engine.create();
 world=engine.world;

 ground=new Ground(400,490,800,20);
 
 lightning=createSprite(400,100,5,5);
 lightning.visible=false;
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
spawnLightning();
console.log(mouseY);
man.display();
 drawSprites();   

}   

function spawnLightning(){
 if(frameCount%50===0){
    lightning.visible=true;
   var type=Math.round(random(1,3))
   switch(type){
    case 1: lightning.addImage(lightning1);
            break;
    case 2: lightning.addImage(lightning2);       
            break
    case 3: lightning.addImage(lightning3);
            break;
    default : break;            
   }
 }
 else{
     lightning.visible=false;
 }

}

