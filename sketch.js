var wall1, wall2, wall3, wall4, wall5, wall6, wall7, wall8, wall9, maincharacter

function preload(){
spookyhouseformygame=loadImage("spooky house for my game.jpg")
imageformygame=loadImage("image for my game.png")

}





function setup() {
  createCanvas(2000,800);

   wall1=createSprite(100, 560, 750,30)
  wall1.shapeColor="white"

  wall2=createSprite(800, 560, 400,30)
  wall2.shapeColor="white"
  
  wall3=createSprite(1350, 560, 1250, 30)
  wall3.shapeColor="white"

  wall4=createSprite(180, 340, 750,30)
  wall4.shapeColor="white"

  wall5=createSprite(880, 340, 400, 30)
  wall5.shapeColor="white"

  wall6=createSprite(1430, 340,1250,30)
  wall6.shapeColor="white"

  wall7=createSprite(260,120,750,30) 
  wall7.shapeColor="white"

  wall8=createSprite(960,120,400,30)
  wall8.shapeColor="white"

  wall9=createSprite(1510,120,1250,30)
  wall9.shapeColor="white"

  main=createSprite(960,60)
  main.addImage(imageformygame);
  main.scale=0.5

  wall1.debug=true
  wall2.debug=true
  wall3.debug=true
  wall4.debug=true
  wall5.debug=true
  wall6.debug=true
  wall7.debug=true
  wall8.debug=true
  wall9.debug=true

  edges=createEdgeSprites();

  
  
  
  
  
}

function draw() 
{
  background(spookyhouseformygame);

  drawSprites();



  if(keyDown(RIGHT_ARROW)){
    main.x=main.x+6;
  }
  if(keyDown(LEFT_ARROW)){
    main.x=main.x-6;
  }
  if(keyDown(UP_ARROW)){
    main.y=main.y-6;
  }
   if(keyDown(DOWN_ARROW)){
    main.y=main.y+6;
   }
  
   main.collide(wall1)
   main.collide(wall2)
   main.collide(wall3)
   main.collide(wall4)
   main.collide(wall5)
   main.collide(wall6)
   main.collide(wall7)
   main.collide(wall8)
   main.collide(wall9)
   main.collide(edges)
}




