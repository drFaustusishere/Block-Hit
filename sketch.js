const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16;
var polygon, polygon_img;
var ground, platform;
var slingshot;
var holder, ball, stand1, stand2

function preload(){
  polygon_img=loadImage("polygon.png")
}

function setup() {
  createCanvas(900,400);
  
  engine = Engine.create();
    world = engine.world;
  Engine.run(engine);

    ground = new Ground();
    platform = new Ground(390,300,250,10);
    stand2=new Ground(700,200,200,10);

    //level 1
    box1= new Box(300,275,30,40);
    box2= new Box(330,275,30,40);
    box3= new Box(360,275,30,40);
    box4= new Box(390,275,30,40);
    box5= new Box(420,275,30,40);
    box6= new Box(450,275,30,40);
    box7= new Box(480,275,30,40);

    //level 2
    box8= new Box(330,235,30,40);
    box9= new Box(360,235,30,40);
    box10= new Box(390,235,30,40);
    box11= new Box(420,235,30,40);
    box12= new Box(450,235,30,40);

    //level 3
    box13= new Box(360,195,30,40);
    box14= new Box(390,195,30,40);
    box15= new Box(420,195,30,40);

    //level 4
    box16= new Box(390,145,30,40);

    boxs1=new Box(640,175,30,40);
    boxs2=new Box(670,175,30,40);
    boxs3=new Box(700,175,30,40);
    boxs4=new Box(730,175,30,40);
    boxs5=new Box(760,175,30,40);
    boxs6=new Box(670,135,30,40);
    boxs7=new Box(700,135,30,40);
    boxs8=new Box(730,135,30,40);
    boxs9=new Box(700,95,30,40);

    ball=Bodies.circle(50,200,20);
    World.add(world,ball);
    

    slingshot = new SlingShot(this.ball,{x:100, y:200});

}

function draw() {
  background(56,44,44);  
  textSize(20);
   fill("lightyellow"); 
  text("Drag the Hexagonal Stone and Release it, to launch it towards the blocks",100,30);
  ground.display();
  platform.display();
  stand2.display();
  strokeWeight(2);
  stroke(15);
  fill('sky blue');
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  fill('pink');
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  fill ('grey');
  box16.display();
  fill('sky blue');
  boxs1.display();
  boxs2.display();
  boxs3.display();
  boxs4.display();
  boxs5.display();
  fill('turquoise')
  boxs6.display();
  boxs7.display();
  boxs8.display();
  fill('pink');
  boxs9.display();
  fill('gold');
  drawSprites();

  imageMode(CENTER);
  image(polygon_img, ball.position.x, ball.position.y, 40, 40);

  slingshot.display();
}
function mouseDragged(){
  Matter.Body.setPosition(this.ball, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot.fly();
}