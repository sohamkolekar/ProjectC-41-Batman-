class Drops{
    constructor(x,y){
        var options={
            isStatic:false,
            frictionAir:0.05,
            density:0.01
        }
        this.rain=Matter.Bodies.circle(x,y,5,options);
        this.radius=5;
        this.hi=color(0,50,255);
        World.add(world,this.rain);
        
    }
    display(){
        push()
        if(this.rain.position.y>475){
            Matter.Body.setPosition(this.rain,{x:random(0,800),y:0});
        }
        var pos=this.rain.position;
        fill(this.hi);
        ellipseMode(CENTER);
        translate(pos.x,pos.y)
        ellipse(0,0,this.radius);
        pop()
    }
}