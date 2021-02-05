var tom, tomImage1, tomImage2, tomImage3, tomLastImage;
var jerry, jerryImage1, jerryImage2, jerryImage3, jerryLastImage;
var gardenImage;

function preload() {
   
    gardenImage = loadImage("images/garden.png");
    tomImage1 = loadImage("images/tomOne.png");
    tomImage2 = loadImage("images/tomTwo.png");
    tomImage3 = loadImage("images/tomThree.png");
    tomLastImage = loadImage("images/tomFour.png");

    jerryImage1 = loadImage("images/jerryOne.png");
    jerryImage2 = loadImage("images/jerryTwo.png");
    jerryImage3 = loadImage("images/jerryThree.png");
    jerryLastImage = loadImage("images/jerryFour.png");
    
}

function setup(){

createCanvas(800, 800);
tom = createSprite(670, 550, 50, 50);
tom.addImage(tomImage1);
tom.scale = 0.09;
tom.velocityY = 3;

jerry = createSprite(100, 650, 50, 50);
jerry.addImage(jerryImage1);
jerry.scale = 0.09;
jerry.velocityX = 3;
   
}

function draw() {

  background(gardenImage);

    tom.depth = garden.depth+1;
    jerry.depth = garden.depth+1;

    //Write condition here to evalute if tom and jerry collide

    
     text(mouseX + ',' + mouseY, 10, 45);


    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here


  if(keyCode === LEFT_ARROW){
     tom.velocityX = -5;
     tom.addAnimation("catRunning", tomImage2);
     tom.changeAnimation("catRunning");
  }

  

}

