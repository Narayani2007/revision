//function --> do something
//create the canvas = game area

var message = "Hello"
var box;

function setup(){   //works only once
  //to create the canvas --> createCanvas(width,height)
  createCanvas(500,500)

  //to create the sprite --> varname = createSprite(x,y,width,height)
  box = createSprite(250,250,100,100)

  //to change the color --> varname.shapeColor = "color"
  box.shapeColor = "red"

  
}

function draw(){  //works throughout the game
//to change the color of the canvas
background("blue")
fill("white")
rect(100,100,50,50)

//to move the sprite
//box.velocityY = 4;

//to make the sprite move when right arrow is pressed
/*
    if(condition){
        action - if condition is true
    }
    else{
      if condition is false
    }
*/
if(keyDown(RIGHT_ARROW)){
  box.velocityX = 5
}


//to display the sprites
drawSprites()

}