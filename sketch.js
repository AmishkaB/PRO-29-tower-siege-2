const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Render = Matter.Render;

var engine, world;


//FOR CONSTRAINT
var log6;
var chain;


function preload() {

}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,height,1200,20);
    stand1= new Ground(400,300,200,10)

    stand2= new Ground(700,300,200,10)

   block1=new Box(350,280,20,30) 
   block2=new Box(370,280,20,30)
   block3=new Box(390,280,20,30)
   block4=new Box(410,280,20,30)
   block5=new Box(430,280,20,30)
   block6=new Box(450,280,20,30)

   block7=new Box(360,250,20,30)
   block8=new Box(380,250,20,30)
   block9=new Box(400,250,20,30)
   block10=new Box(420,250,20,30)
   block11=new Box(440,250,20,30)

   block12=new Box(379,230,20,30)
   block13=new Box(399,230,20,30)
   block14=new Box(419,230,20,30)

   block15=new Box(640,280,20,30) 
   block16=new Box(660,280,20,30)
   block17=new Box(680,280,20,30)
   block18=new Box(700,280,20,30)
   block19=new Box(720,280,20,30)
   block20=new Box(740,280,20,30)

   block21=new Box(660,250,20,30)
   block22=new Box(680,250,20,30)
   block23=new Box(700,250,20,30)
   block24=new Box(720,250,20,30)
   block25=new Box(720,250,20,30)

   block26=new Box(690,230,20,30)
   block27=new Box(700,230,20,30)


   

  polygon=new Polygon(150,200,30)

   chain=new SlingShot(polygon.body,{x:150,y:200})

    //adding constraint options 
    

  //Rendering the Physics Engine
    var renderNow = Render.create({
        element: document.body,
        engine: engine,
        options:{
            width: 1200,
            height:600,
            wireframes:false
        }

        }
    )
    Render.run(renderNow)



}

function draw(){
    background('black');
    Engine.update(engine);
  
    ground.display();
 stand1.display();
 stand2.display();
 fill('yellow')
 polygon.display();
 fill('cyan')
block1.display();
fill('pink')
block2.display();
fill('lawngreen')
block3.display();
fill('blue')
block4.display();
fill('magenta')
block5.display();
fill('orange')
block6.display();

block7.display();
fill('pink')
block8.display();
fill('lawngreen')
block9.display();
fill('blue')
block10.display();
fill('magenta')
block11.display();
fill('orange')
block12.display();

fill('blue')
block13.display();
fill('pink')
block14.display();
fill('green')
block15.display();
fill('blue')
block16.display();
fill('cyan')
block17.display();
fill('orange')
block18.display();
fill('purple')
block19.display();
fill('pink')
block20.display();
fill('lawngreen')
block22.display();
fill('yellow')
block23.display();
fill('magenta')
block25.display();
//block24.display();
fill('orange')
block26.display();
fill('cyan')
block27.display();




scale(1.5);
textSize(20)
text('Drag the hexagoanl stone and release it,to launch it towards the blocks',100,20)

}



function mouseDragged(){
    Matter.Body.setPosition(polygon.body,{x:mouseX,y:mouseY})
}
function mouseReleased(){
    chain.fly()
}
function keyPressed(){
    chain.attach(polygon.body)
    
}


