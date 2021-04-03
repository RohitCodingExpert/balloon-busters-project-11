 var balloon,blue_balloon,blue_balloonImage,green_balloon,green_balloonImage,pink_balloon,pink_balloonImage,
 red_balloon,red_balloonImage,bow,bowImage,arrow,arrowImage,arrowGroup;
 var background,backgroundImage;
 var score;
function preload(){
  
  blue_balloonImage = loadImage("blue_balloon0.png");
  green_balloonImage = loadImage("green_balloon0.png");
  pink_balloonImage = loadImage("pink_balloon0.png");
  red_balloonImage = loadImage("red_balloon0.png");
  bowImage = loadImage("bow0.png");
  arrowImage = loadImage("arrow0.png");
  backgroundImage = loadImage("background0.png");
      
}

function setup() {   
  createCanvas(600, 500);
    
   ground = createSprite(600,600,10,10);
   ground.addImage(backgroundImage);
   ground.scale=3;
   ground.velocityX =-2;
    
   bow = createSprite(550,250,10,10);
   bow.addImage(bowImage);

   arrow = createSprite(530,250,10,10);
   arrow.addImage(arrowImage);
   arrow.scale=0.2
   arrow.velocityY = -30;
  
   arrowGroup = new Group();
  
   redB = new Group();
  
   blueB = new Group(); 

   greenB = new Group();
  
   pinkB = new Group();
   
  score = 0;
  
}
function draw() {
  //background(220);
  
  if(keyDown("space")){
  createArrow();
  
  }
  
  if(ground.x<0) { 
   ground.x=ground.width/2; 
        
}
  bow.y = mouseY;
  
  if(arrowGroup.isTouching(redB)){
    redB.destroyEach();
    arrowGroup.destroyEach();
    score = score+1;
  } 
    
    if(arrowGroup.isTouching(blueB)){
    blueB.destroyEach();
    arrowGroup.destroyEach();
    score = score+5;
    }
      
  if(arrowGroup.isTouching(greenB)){
   greenB.destroyEach();
    arrowGroup.destroyEach();
    score = score+1;
  }
    
    if(arrowGroup.isTouching(pinkB)){
    pinkB.destroyEach();
    arrowGroup.destroyEach();
    score = score+2;
    }
  
  
 function createArrow(){
   arrow = createSprite(530,250,10,10);
   arrow.addImage(arrowImage);
   arrow.lifetime = 100;
   arrow.y = bow.y;
   arrow.scale=0.2
   arrow.velocityX = -30;
   arrowGroup.add(arrow);
   
 }
  
  function spawnballoon(){
    if (frameCount % 80 === 0) {
    balloon = createSprite(600,500,50,10);
    var rand = Math.round(random(1,4));
    balloon.velocityY = -4 
    }
    
  } 
  var select_balloon = Math.round(random(1,4));
    console.log(select_balloon)
    
    if(World.frameCount % 80 == 0){
      if(select_balloon == 1){
       red_balloon();
      }else if(select_balloon == 2){
       pink_balloon();
      }else if(select_balloon == 3){
       blue_balloon();
      }else if(select_balloon == 4){
       pink_balloon();
      }
      
      } 
  
  function red_balloon(){
    var red = createSprite(0,Math.round(random(20,370)), 10,10);
    red.addImage(red_balloonImage);
    red.velocityX = 3;
    red.lifetime = 150;
    red.scale = 0.1;
    redB.add(red);
    
  }
      
  function pink_balloon(){
    var pink = createSprite(0,Math.round(random(80,370)), 10,10);
    pink.addImage(pink_balloonImage);
    pink.velocityX = 3;
    pink.lifetime = 150;
    pink.scale = 1.3;
    pinkB.add(pink);
  }
    
  function blue_balloon(){
    var blue = createSprite(0,Math.round(random(20,370)), 10,10);
    blue.addImage(blue_balloonImage);
    blue.velocityX = 3;
    blue.lifetime = 150;
    blue.scale = 0.1;
    blueB.add(blue);
  
  function green_balloon(){
    var green = createSprite(0,Math.round(random(20,370)), 10,10);
    green.addImage(green_balloonImage);
    green.velocityX = 3;
    green.lifetime = 150;
    green.scale = 0.1;
    greenB.add(green)
 
  } 
  }
  
  drawSprites()
text("Score: "+ score, 470,50);
    
}