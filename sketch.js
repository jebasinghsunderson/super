const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint=Matter.Constraint;

var engine, world;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16,box17,box18,box19,box20;
var ground,Monster;
function preload(){
  backgroundimg=loadImage("GamingBackground.png")
}
function setup(){
    var canvas = createCanvas(3000,2000);
    engine = Engine.create();
    world = engine.world;

    superman=new Super(300,800,800,800)
    monster=new Enemy(2000,800,800,800)

//    ground2=new Ground(2000,1200,100,70)
    ground=new Ground(1000,1800,3000,70)
    ground1=new Ground(2000,1200,300,70)
    
    box1=new Box(1000,1200,200,200)
   box2=new Box(1200,1200,200,200)
   box3=new Box(1400,1200,200,200)
   box4=new Box(1200,1400,200,200)
   box5=new Box(1000,1400,200,200)
  box6=new Box(1000,860,200,200)
   box7=new Box(1200,960,200,200)
   box8=new Box(1400,960,200,200)
    box9=new Box(1400,960,200,200)
   box10=new Box(1200,1060,200,200)
     box11=new Box(1400,1060,200,200)
    box12=new Box(1000,1060,200,200)
    box13=new Box(1200,1460,200,200)
    box14=new Box(1200,1500,200,200)
  //   box15=new Box(1100,1860,200,200)
  //  box16=new Box(1290,1060,200,200)
  //  box17=new Box(1200,1260,200,200)
  //  box18=new Box(1100,1220,200,200)
  // box19=new Box(1280,1200,200,200)
  // box20=new Box(1100,1330,200,200)
  // box21=new Box(1200,1460,200,200)
  rope= new Rope(superman.body,{x:400,y:200})
 
}

function draw(){
    background(backgroundimg);
    Engine.update(engine);
    box1.display();      
    box2.display();
    box3.display();
    box4.display();
    box5.display();
   box6.display();
   box7.display();
    box8.display();
    box9.display();
    box10.display();
   box11.display();
    box12.display();
  box13.display();
   box14.display();
   monster.display();
   superman.display();

  //  box15.display();
  //  box16.display();
  //  box17.display();
  //  box18.display();
  //  box19.display();
  //  box20.display();
  //  box21.display();
   ground.display();
    
}
function mouseDragged() {
  Matter.Body.setPosition(superman.body, { x: mouseX, y: mouseY });
}