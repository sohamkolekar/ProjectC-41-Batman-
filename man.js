class Man{
    constructor(x,y){
        var options={
            isStatic:true,
        }  
        this.image=loadImage("Man.png");  
        this.person=Matter.Bodies.circle(x,y,90,options);
        this.radius=90;
        this.color=color(200,0,0);  
        World.add(world,this.person)
    }

    display(){
        push();
        var pos=this.person.position;
        translate(pos.x,pos.y);
        fill(this.color);
        imageMode(CENTER);
        image(this.image,30,0,200,200);   
        pop();
    }
}