class Rope{
    constructor(bodyA,pointB){
     var options={
         stiffness:1.5,
         lenght:1000.0,
         bodyA:bodyA,
         pointB:pointB
        }
        this.pointB = pointB;
        this.rope=Constraint.create(options);
        World.add(world,this.rope);
    }

display(){
  var pointA=this.rope.bodyA.position
  var pointB=this.pointB
  push();
  
  strokeWeight(4);
  stroke("black");
  fill("black")
  line(pointB.x,pointB.y,pointA.x,pointA.y)
pop();
}



}



