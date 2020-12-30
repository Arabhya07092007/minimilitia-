const Engine = Matter.Engine;
const World = Matter.World;
const Bodies  = Matter.Bodies;

var engine,world;
var b1, b2, b3, b4;
var background;

var B1;
var a,b,c,d;

var player;

var border1,border2,border3,border4;
var border5,border6,border7,border8,border9,border10,border11,border12;
var border13,border14,border15,border16,border17,border18,border19,border20;
var border21,border22,border23,border24;




function preload(){

  back = loadImage("images/spriete 8.webp");
  back1  = loadImage("images/bg 6.png");
  back2 = loadImage("images/the1.jpg");
  man = loadImage("images/character2.png")


}


function setup(){
    var canvas  = createCanvas(1365,620);
 
    engine = Engine.create();
    world = engine.world;

    b2 = createSprite(width/2,height/2);
    b2.addImage(back);
    b2.scale = 14.5;

    b3 = new Man(2070,300,35,35,PI/10);

    B1 = createSprite(3845,-1600);
    B1.addImage(back2);
    B1.scale = 2.83;

    player = createSprite(2070,300);
    player.addImage(man);


    //asigning all the borders here 

    b1 = new Box(width/2+700,4270,5000,20,PI/2);
        
    border1 = new Border(-670,420,1480,20,PI/2);
    border2 = new Border(-670,695,1480,20,PI/10);
    border3 = new Border(2060,420,1480,20,PI/10);
    border4 = new Border(2060,695,1480,20,PI/10);

    border5 = new Border(-2270,420,1180,20,PI/10);
    border6 = new Border(-2270,695,1180,20,PI/10);

    border7 = new Border(-4000,420,740,20,PI/10);
    border8 = new Border(-4000,695,800,20,PI/10);

    border9 = new Border(3650,420,1220,20,PI/10);
    border10 = new Border(3650,695,1220,20,PI/10);

    border11 = new Border(5400,420,710,20,PI/10);
    border12 = new Border(5400,695,710,20,PI/10);

    /// VERTICAL  LEFT  dandi 

    border13 = new Border(-1670,-160,1180,20,-90+PI/10);
    border14 = new Border(-1400,-160,1180,20,-90+PI/10);

    border15 = new Border(-1670,1320,1180,20,-90+PI/10);
    border16 = new Border(-1400,1320,1180,20,-90+PI/10);

    border17 = new Border(-1670,-1890,1180,20,-90+PI/10);
    border18 = new Border(-1400,-1890,1180,20,-90+PI/10);


    /// VERTICAL RIGHT DANDI

    
    
    a = 3890;
    b = -1580;
    c = 1480;
    d = -90;


    border19 = new Border(2790,-160,1180,20,-90+PI/10);
    border20 = new Border(3030,-160,1180,20,-90+PI/10);

    border21 = new Border(2790,1320,1180,20,-90+PI/10);
    border22 = new Border(3030,1320,1180,20,-90+PI/10);

    border23 = new Border(2790,-1890,1180,20,-90+PI/10);
    border24 = new Border(3030,-1890,1180,20,-90+PI/10);

    camera.on();

}
function draw(){
    background(159,159,164);

   // B1.x = mouseX;
    ///B1.y = mouseY;

 //   B1.x = a;
   // B1.y = b;

    Engine.update(engine);

    var pos = b3.body.position;
    player.x = pos.x;
    player.y = pos.y;
    drawSprites();

    b1.display();
    b3.display();
    border1.display();
    border2.display();
    border3.display();
    border4.display();

    border5.display();
    border6.display();

    border7.display();
    border8.display();

    border9.display();
    border10.display();

    border11.display();
    border12.display();

    border13.display();
    border14.display();

    border15.display();
    border16.display();

    border17.display();
    border18.display();

    border19.display();
    border20.display();

    border21.display();
    border22.display();

    border23.display();
    border24.display();


    //Matter.Body.setPosition(border19.body,{x:a,y:b});
 //   Matter.Body.setAngle(border17.body,d+PI/10);

    Matter.Body.setStatic(b3.body,false);

    console.log(camera.position);
    
    camera.position.x = b3.body.position.x;
    camera.position.y = b3.body.position.y-100;
    

  if (keyDown("8")) {
    camera.zoom = camera.zoom - 0.01;
  }
  if (keyDown("0")) {
    camera.zoom = camera.zoom + 0.01;
  } 


  if (keyDown("D")) {
    Matter.Body.setStatic(b3.body,true);
  }
  if (keyDown("F")) {
    Matter.Body.setStatic(b3.body,false);
  }
    
    if(keyDown("SHIFT")&&keyDown("1")){
      a = a+5;
    }

    if(keyDown("SHIFT")&&keyDown("2")){
      a = a-5;
    }

    if(keyDown("SHIFT")&&keyDown("3")){
      b = b+5;
    }

    if(keyDown("SHIFT")&&keyDown("4")){
      b = b-5;
    }

    if(keyDown("SHIFT")&&keyDown("5")){
      c = c+1;
    }

    if(keyDown("SHIFT")&&keyDown("6")){
      c = c-10;
    }

    if(keyDown("SHIFT")&&keyDown("7")){
      d = d+10;
    }

    if(keyDown("SHIFT")&&keyDown("8")){
      d = d-10;
    }

    keyPressed();

    textSize(20);
    fill("red");
  //  var pos = border19.body.position;
    text(B1.x+" , "+B1.y+","+B1.scale,b3.body.position.x,b3.body.position.y)

   // camera.zoom = 0.4;
   

}


function keyPressed() {


    if(keyDown("UP_ARROW")){

        Matter.Body.applyForce(b3.body,b3.body.position,{x:0,y:-0.004})

    }

    
    if (keyDown("DOWN_ARROW") ) {

        Matter.Body.applyForce(b3.body,b3.body.position,{x:0,y:0.004})
    
        }


    if (keyDown("RIGHT_ARROW")) {

        Matter.Body.applyForce(b3.body,b3.body.position,{x:0.01,y:0})
    
        }

    if (keyDown("LEFT_ARROW")) {

        Matter.Body.applyForce(b3.body,b3.body.position,{x:-0.01,y:0})
    
        }

    if (keyDown("N")) {
        B1.scale = B1.scale-0.01;
      }

    if (keyDown("M")) {
        B1.scale = B1.scale+0.01;
      }








}