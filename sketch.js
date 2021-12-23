
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,polygon,ground;
var stand;


var polygon;
var slingShot;
var basket;
var target;
var win_text

function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  
  //polygon holder with slings
  polygon = Bodies.circle(50,200,20);
  World.add(world,polygon);

   //stand for target
   var stand_options ={
     isStatic: true
   };
  
  stand = Bodies.rectangle(380, 200 , 50, 400,stand_options);
  World.add(world, stand);

  //target(make green)
  var target_option={
  //  stiffness:3,
    friction:3,
    //restitution:0.5
  }
  target = Bodies.rectangle(400,180,20,20,target_option);
  World.add(world,target);
  //ground
  var ground_options={
isStatic:true
  };
  ground = Bodies.rectangle(400,400,400,40,ground_options)
  World.add(world,ground);
  //slingshot
  slingShot = new Slingshot(this.polygon,{x:100,y:200});



}
function draw() {
  background(56,44,44); 
  //text to show how to play again
text("Press The Space Bar to Play Again!",650 ,350);
  //win text(make invisible)
   win_text = text("YOU WIN!",100 ,500);
   win_text.visible=false;
//win condition

  /*if(target.isTouching(ground)){

    win()
  }*/

  

  //show ball
  ellipse(polygon.position.x,polygon.position.y,20);

//show stand
  rect(stand.position.x,stand.position.y,50,400);

  //show target(make green)
rect(target.position.x,target.position.y,20,20);
  //show ground
 rect(ground.position.x,ground.position.y,400,40)
  
//display slingshot
  slingShot.display();
  
}
function mouseDragged(){
  Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY});
}
function mouseReleased(){
  slingShot.fly();
}
function keyPressed(){
  if(keyCode === 32){
      slingShot.attach(this.polygon);
      target.x = 400
      target.y = 180
       win_text.visible = false;
  }
}
//win function
function win(){
win_text.visible = true;

}

