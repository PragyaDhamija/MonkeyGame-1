var PLAY = 1;
var END = 0;
var gameState = PLAY;

var monkey , monkey_running;
var banana ,bananaI,bananaG, obstacle, obstacleI;
var FoodG, obstacleG;
var score;
var ground,groundI;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaI = loadImage("banana.png");
  obstacleI = loadImage("obstacle.png");
  groundI = loadImage("ground.png")
 
}



function setup() {
  createCanvas(500,500);
  
  monkey = createSprite(55,380,20,50);
  monkey.addAnimation("RUN",monkey_running);
  monkey.scale = 0.2;

  ground = createSprite(200,450);
  ground.addImage("ground",groundI);
  ground.scale = 1.7;
  ground.velocityX = -7;
  ground.x = ground.width/2;
  
  bananaG = new Group();
  obstacleG = new Group();
  
  score = 0;
  
}


function draw() {
  background("brown");
  
  text("Score: "+ score, 400,50);

  ground.depth = monkey.depth;
    monkey.depth = monkey.depth + 1;
  
  if(gameState === PLAY){
     if (ground.x < 0){
      ground.x = ground.width/2;
    }
    
    if(keyDown("space")&& monkey.y >= 100) {
        monkey.velocityY = -12;
      monkey.velocityY = monkey.velocityY + 0.8
    }
    
    
    
    bananaF();
    obstacleF();
    }
  
  
  drawSprites()
}

function bananaF() {
  if(frameCount%80 === 0) {
    var banana = createSprite(550,300);
    banana.addImage("banana",bananaI)
    banana.velocityX = -5;
    banana.scale = 0.1;
    
    bananaG.add(banana);
    banana.setLifetime = 100;
   
  }
  
  if(monkey.isTouching(bananaG)) {
  bananaG.destroyEach();
    score = score+5;
    
  }
}

function obstacleF () {
  if(frameCount%300 === 0) {
    var obstacle = createSprite(550,200);
    obstacle.addImage("obstacle",obstacleI)
    obstacle.velocityX = -5;
    obstacle.scale = 0.1;
    
    obstacleG.add(obstacle);
    obstacle.setLifetime = 100;
   
  }
  
  if(monkey.isTouching(obstacleG)) {
    score = score+5;
    
  }
  }







