var Alien
var score=0

function setup(){

createCanvas(800,600)

Liberator = createSprite(30,550,10,30);
ground = createSprite(400,570,800,10)
Agroup= new Group()
Pgroup= new Group()

}




function draw() {
  background("blue")
  Liberator.collide(ground)
  Liberator.velocityX=0
  Liberator.velocityY=0
  if(keyDown("right")){
  Liberator.velocityX=5
    
  }
   if(keyDown("left")){
  Liberator.velocityX=-5
    
  }
  if(keyDown("up")){
    Liberator.velocityY=-5

       }
  Liberator.velocityY=Liberator.velocityY+2
   //gravity

  AlienandPlant()
  coins()

  if(Liberator.isTouching(Agroup)){
    console.log("hi")
    Agroup[0].destroy()
    Plant = createSprite(Alien.x,Alien.y,50,50)
    Plant.velocityX=-3
    Plant.shapeColor="green"
    score=score+1

  }
  textSize(20)
  fill("white")
  text("Score "+score ,700,40)
  drawSprites();
  
}

function AlienandPlant(){
if(frameCount%130===0){

Alien =createSprite(800,550,50,50)
Alien.velocityX=-3
Agroup.add(Alien)



}



}
function coins(){
if(frameCount%200===0){
  wall = createSprite(800,Math.round(random(350,450)),50,10)
  wall.velocityX=-2.5
  coin = createSprite(800,wall.y-10,10,10)
  coin.velocityX=-2.5

}

}
