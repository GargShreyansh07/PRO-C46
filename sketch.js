var canvas;
var title,titleImage,scene,backgroundImage;
var gameOverImage;
var bombImage;
var PLAY = 1;
var END = 0;
var gameState = 1;
var score = 0;
var livesLeft = 3
var blastImage;
var knife,knifeImg;
var empty,oneCross,twoCross,threeCross;
var emptyImg,oneCrossImg,twoCrossImg,threeCrossImg;
var fruitGroup,fruit1,fruit2,fruit3,fruit4,fruit5,fruit6,fruit7,fruit8,fruit9,fruit10;


function preload() {
  backgroundImage = loadImage("assets/background.png")
  bombImage = loadImage("assets/bomb.png")
  knifeImg = loadImage("assets/knife.png")
  titleImage = loadImage("assets/fruit_salad.png")
  fruit1 = loadImage("assets/fruit1.png")
  fruit2 = loadImage("assets/fruit2.png")
  fruit3 = loadImage("assets/fruit3.png")
  fruit4 = loadImage("assets/fruit4.png")
  fruit5 = loadImage("assets/fruit5.png")
  fruit6 = loadImage("assets/fruit6.png")
  fruit7 = loadImage("assets/fruit7.png")
  fruit8 = loadImage("assets/fruit8.png")
  fruit9 = loadImage("assets/fruit9.png")
  fruit10 = loadImage("assets/fruit10.png");
  gameOverImage = loadImage("assets/gameOver.png")
  emptyImg = loadImage("assets/empty.png");
  oneCrossImg = loadImage("assets/oneCross.png");
  twoCrossImg = loadImage("assets/twoCross.png");
  threeCrossImg = loadImage("assets/threeCross.png")

}
 function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  //scene = createSprite(0,0,800,800)
  //scene.addImage(backgroundImage)
  //scene.scale = 2

  title = createSprite(700,65,20,20);
  title.addImage(titleImage);
  title.scale = 0.5

  knife = createSprite(40,200,20,20);
  knife.addImage(knifeImg)
  knife.scale = 0.5;

  // Groups
    fruitGroup=createGroup();
    bombGroup = createGroup();
}
function draw() {
  background(backgroundImage);
  
  if(gameState === PLAY){

    Fruits();
    Bomb();
  
    knife.y=World.mouseY;
    knife.x=World.mouseX;

    if(fruitGroup.isTouching(knife)){
      fruitGroup.destroyEach();
      score = score+1
    }
    else
    {
      // Go to end state if knife is touching bomb
      if(bombGroup.isTouching(knife)){
        gameState=END;
        
        fruitGroup.destroyEach();
        bombGroup.destroyEach();
        fruitGroup.setVelocityXEach(0);
        bombGroup.setVelocityXEach(0);
        
        // Change the animation of sword to gameover and reset its position
        knife.addImage(gameOverImage);
        knife.scale=2;
        knife.x=700;
        knife.y=300;
      }
    }
  }
  drawSprites();
  //Display score
  textSize(25);
  text("Score : "+ score,50,50);
}

function Bomb(){
  if(World.frameCount%200===0){
    bomb=createSprite(700,1000,20,20);
    bomb.addImage(bombImage);
    bomb.scale = 0.3
    bomb.x=Math.round(random(50,1000));
    bomb.velocityY=-(6+(score/10));
    bomb.setLifetime=50;
    
    bombGroup.add(bomb);
  }
}

function Fruits(){
  if(World.frameCount%30===0){
    fruit=createSprite(700,1000,20,20);
    fruit.x = 0    
  //Increase the velocity of cake after score 4 

       fruit.velocityY= -(7+(score/4));
     
     
    fruit.scale=0.38;
     //fruit.debug=true;
     r=Math.round(random(1,9));
    if (r == 1) {
      fruit.addImage(fruit1);
    } else if (r == 2) {
      fruit.addImage(fruit2);
    } else if (r == 3) {
      fruit.addImage(fruit3);
    } else if (r == 4) {
      fruit.addImage(fruit4);
    } else if (r == 5) {
      fruit.addImage(fruit5);
    } else if (r == 6) {
      fruit.addImage(fruit6);
    } else if (r == 7) {
      fruit.addImage(fruit7);
    } else if (r == 8) {
      fruit.addImage(fruit8);
    } else if (r == 9) {
      fruit.addImage(fruit9);
    } else {
      fruit.addImage(fruit10);
    }
    
    fruit.x=Math.round(random(50,1000));
   
    
    fruit.setLifetime=100;
    
    fruitGroup.add(fruit);
  }
}

