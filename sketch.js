var bg, sleep, brush, gym, eat, drink, move, bath, astronaut;

function preload(){
bg = loadImge("images/iss.png");
sleep = loadAnimation("images/sleep.png");
brush = loadAnimation("images/brush.png");
gym = loadAnimation("images/gym1.png", "images/gym2.png","images/gym11.png", "images/gym12.png");
eat = loadAnimation("images/eat1.png", "images/eat2.png");
drink = loadAnimation("images/drink1.png", "images/drink2.png");
move = loadAnimation("images/move.png", "images/move2.png");
bath = loadAnimation("images/bath1.png", "images/bath2.png");
}

function setup() {
  createCanvas(400, 400);
  astronaut = createSprite(300,230);
  astronaut.addAnimation("sleeping", sleep);
  astronaut.scale = 0.1;
}

function draw() {
  background(220);
  if(keyDown("UP_ARROW")){
    astronaut.addAnimation("brushing", brush);
    astronaut.changeAnimation("brushing");
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }
  if(keyDown("DOWN_ARROW")){
    astronaut.addAnimation("Gymming", gym);
    astronaut.changeAnimation("gymming");
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }
  if(keyDown("LEFT_ARROW")){
    astronaut.addAnimation("Bathing", bath);
    astronaut.changeAnimation("Bathing");
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }
  if(keyDown("RIGHT_ARROW")){
    astronaut.addAnimation("Eating", eat);
    astronaut.changeAnimation("Eating");
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }
  if(keyDown("m")){
    astronaut.addAnimation("moving", move);
    astronaut.changeAnimation("moving");
    astronaut.y = 350;
    astronaut.velocityX = 2;
    astronaut.velocityY = 2;
  }
  if(keyDown("n")){
    astronaut.addAnimation("Drinking", drink);
    astronaut.changeAnimation("Drinking");
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }
  drawSprites();
}