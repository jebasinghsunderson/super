class Enemy{
    constructor(x,y,w,h){
        var options={
          isStatic:false,
          density:1.0,
          frictionAir:0.005
        }
        this.body=Bodies.rectangle(x,y,w,h,options);
        this.x=x;
        this.y=y;
        this.w=w;
        this.h=h;
        this.image=loadImage("Monster-01.png")
       // this.angle=angle;
        World.add(world,this.body);
    }

    display(){
        var pos=this.body.position
    var angle = this.body.angle;
    push()
    translate(pos.x,pos.y)
    rotate(angle);
    //fill("black")
    image(this.image,0,0,this.w,this.h)
    pop();
}
};