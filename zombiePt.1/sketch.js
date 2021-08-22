const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

var rGround,lGround;
var ground;
var link;
var bridge;
var jp;
var stones= [];
var z1,zombie;
var bgImage;
var breakbutton;

function preload (){
  z1 = loadImage ("./assets/zombie.png");
  bgImage = loadImage ("./assets/background.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  engine = Engine.create();
  world = engine.world;
  frameRate(80);

  // rGround = new Base (width-300,height/2+50,600,100,"#8d6e63",true);
  // lGround = new Base (300,height/2+50,600,100,"#8d6e63",true)
  //ground = new Base (0,height-10,width*2,20,"#795548",true);
  jp = new Base (width-250,height/2-100,40,20,"#8d6e63",true);


  bridge = new Bridge (25,{x:50,y:height/2-140});
  
  link = new Link (bridge,jp);
  Composite.add (bridge.body,jp);

  zombie = createSprite (width/2,height-110)
  zombie.addImage (z1);
  zombie.scale = 0.1;

  breakbutton = createImg ("./assets/axe.png");
  breakbutton.position (width-200,height/2-50);

  for (var i = 0;i <= 8; i++){
    var x = random(width/2-100,width/2);
    var y = random (-10,140);
    var stone = new Balls (x,y,80);
    stones.push (stone);
  }
}

function draw() {
  background(bgImage);
  Engine.update(engine);

  // rGround.show();
  // lGround.show();
  //ground.show();
  bridge.show();
  //jp.show();

  for (var i of stones){
    i.show ()
  }

  drawSprites();
}
function handleButtonPress (){
 link.detach();
  setTimeout (()=>{
    bridge.break ();

  },1500)
}