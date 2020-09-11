class Ground{
    constructor(x,y,width,height){
       var options={
        density:1500,
        isStatic:true,
       }
       this.ground=Matter.Bodies.rectangle(x,y,width,height,options);
       this.width=width;
       this.height=height;
       this.color=color(165,42,42);
       World.add(world,this.ground)
    }
    display(){
        push()
        var pos=this.ground.position;
        translate(pos.x,pos.y)
        fill(this.color)
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        pop()
    }
}