const Engine = Matter.Engine; 
const World= Matter.World;
 const Bodies = Matter.Bodies;
 const Constraint = Matter.Constraint;
 
var bar1, bar2, bar3, bar4;
  var engine,world;
  var edges;
  var snowball=[]
function preload(){
  bg1=loadImage("snow1.jpg");
  bg2=loadImage("snow2.jpg");
  bg3=loadImage("snow3.jpg");

olaf1=loadImage("olaf1.png");
olaf2=loadImage("olaf2.png");


}
var olaf,ground;
function setup() {

  createCanvas(800,800);

  engine = Engine.create();
   world = engine.world;

   edges=createSprite(10, 10, 1600, 2);


  olaf=createSprite(400, 500);
  olaf.addImage(olaf2);
  olaf.scale=0.5;
  ground=createSprite(400, 700, 800, 20)
  ground.visible=false;
}

function draw() {
  background(bg1);  

  
  Engine.update(engine);
 var rand=Math.round(random(1,3));

 if(frameCount%100==0){

 
 switch(rand){
   case 1: background(bg1);
   break;

   case 2: background(bg2);
   break;

   case 3: background(bg3);
   break;
   default: break;
 }
}

 
  if(frameCount%10 == 0){
snowball.push(new Snow(random (10,750),0,20))
  }
  for( var i =0; i <snowball.length; i++){
snowball[i].display();
  }
  if(keyIsDown(UP_ARROW)){
    olaf.addImage(olaf1);
    olaf.velocityY-=10;
  }

    if(keyDown("space")&& olaf.y == 500) {
      olaf.velocityY = +2;
    }
  olaf.velocityY+=0.8
  if (olaf.isTouching(ground)){
    olaf.addImage(olaf2)
  }

  olaf.collide(edges);
  olaf.collide(ground)
  drawSprites();
  fill("red");
textSize(25);
  text("Press up arrow to jump olaf", 300, 100);
}

  
