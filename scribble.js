let xPos = 250;
let yPos = 250;

// declare the variables for the speeds of the squares
let xSpeed;
let ySpeed;
let xSpeed2;
let ySpeed2;
let xSpeed3;
let ySpeed3;

// the initial direction that the squares are moving in
let xDirection = 1;
let yDirection = 1;
let xDirection2 = 1;
let yDirection2 = 1;
let xDirection3 = 1;
let yDirection3 = 1;

// initial health
let hp = 10;

// counter that will add squares to the screen
let i = 0;

// initial position of the squares
let myXPos = 100;
let myYPos = 100;
let enemyXPos = 300;
let enemyYPos = 300;
let enemyXPos2 = 300;
let enemyYPos2 = 300;
let enemyXPos3 = 300;
let enemyYPos3 = 300;

// declares that the game is functioning and the player is not dead
let state = 'title';

// declares the varables that represent the values of the sides of the red player square
let myLeft, myRight, myTop, myBottom;

// declares the varables that represent the values of the sides of the blue enemy square
let enemyLeft, enemyRight, enemyTop, enemyBottom;
let enemyLeft2, enemyRight2, enemyTop2, enemyBottom2;
let enemyLeft3, enemyRight3, enemyTop3, enemyBottom3;

let low = 4;
let high = 6;

let mySpeed = 5;

function preload() {

  superSmashImage = loadImage("https://cdn.glitch.global/a7714bdf-aaed-4a55-b7c6-6f3107eca458/super%20smash.jpg?v=1659714044416");

  
  
  bulbasaur = loadImage("https://cdn.glitch.global/a7714bdf-aaed-4a55-b7c6-6f3107eca458/Bulbasaur.png?v=1659709549086");
    block = loadImage("https://cdn.glitch.global/a7714bdf-aaed-4a55-b7c6-6f3107eca458/Charmander.png?v=1659709551575");
}

function setup() {
  createCanvas(500, 500);
  background(superSmashImage);
  fill(0, 255, 0)
  

  rectMode(CENTER);

  // random speed for the enemy square
  xSpeed = random(4, 6);
  ySpeed = random(4, 6);
}

function draw() {
image(superSmashImage, 100, 200, 100, 100);

  // title screen
  if(state == 'title') {
    background(0);

    fill(255, 255, 255);
    textSize(100);
    text('BRICKS', 60, 160);
    
    fill(255, 255, 255);
    textSize(20);
    text('easy', 40, 220);
    text('medium', 40, 270);
    text('hard', 40, 320);
    text('a game by Louis, Alex, and Jadyn', 40, 450);
  }
  

  // if the game is over, make game over screen
  else if (state == 'gameOver') {
    background(0);

    fill(255, 255, 255);
    textSize(100);
    text('GAME', 60, 160);
    text('OVER', 60, 260);
    
  }

  // if the game is in play
  else if(state == 'playing') {
    background(superSmashImage);

    // displays the player score
    fill(255, 255, 255);
    textSize(22);
    text("HP: " + hp, 20, 30);

    // generates question block
    image(block, enemyXPos, enemyYPos, 50, 50);

    // generates bulbasaur
    image(bulbasaur, myXPos, myYPos, 50, 50);

    // moves the square around with the direction keys
    if (keyIsDown(LEFT_ARROW)) {
      myXPos -= mySpeed;

      if (myXPos < 25) {
        myXPos = 25;
      }
    }

    if (keyIsDown(RIGHT_ARROW)) {
      myXPos += mySpeed;

      if (myXPos > 475) {
        myXPos = 475;
      }
    }

    if (keyIsDown(UP_ARROW)) {
      myYPos -= mySpeed;

      if (myYPos < 25) {
        myYPos = 25;
      }
    }

    if (keyIsDown(DOWN_ARROW)) {
      myYPos += mySpeed;

      if (myYPos > 475) {
        myYPos = 475
      }
    }

    // defines the boundaries of the red square
    myLeft = myXPos - 25;
    myRight = myXPos + 25;
    myTop = myYPos - 25;
    myBottom = myYPos + 25;

    // defines the boundary of the blue square
    enemyLeft = enemyXPos - 25;
    enemyRight = enemyXPos + 25;
    enemyTop = enemyYPos - 25;
    enemyBottom = enemyYPos + 25;

    // moves the enemy square in a direction
    enemyXPos += xSpeed * xDirection;
    enemyYPos += ySpeed * yDirection;

    // bounces the enemy square off the wall and changes the direction of the square
    if (enemyXPos > 474 || enemyXPos < 26) {
      xDirection *= -1;

      i++

      xSpeed = random(low, high);
    }

    if (enemyYPos > 474 || enemyYPos < 26) {
      yDirection *= -1;

      i++

      ySpeed = random(low, high);
    }

    // if the squares do not overlap, the program will not register a collision
    if (myLeft > enemyRight || myRight < enemyLeft || myTop > enemyBottom || myBottom < enemyTop) {

    }

    else {

      // if the squares overlap, the enemy square will change position
      enemyXPos = random(25, 475);
      enemyYPos = random(25, 475);

      // decreases the health by one
      hp--
    }

    if (i > 50) {

      fill(0, 0, 255);
      rect(enemyXPos2, enemyYPos2, 50, 50);

      enemyLeft2 = enemyXPos2 - 25;
      enemyRight2 = enemyXPos2 + 25;
      enemyTop2 = enemyYPos2 - 25;
      enemyBottom2 = enemyYPos2 + 25;

      enemyXPos2 += xSpeed2 * xDirection2;
      enemyYPos2 += ySpeed2 * yDirection2;

      if (enemyXPos2 > 474 || enemyXPos2 < 26) {
        xDirection2 *= -1;

        xSpeed2 = random(4, 6);
      }

      if (enemyYPos2 > 474 || enemyYPos2 < 26) {
        yDirection2 *= -1;

        ySpeed2 = random(4, 6);
      }

      if (myLeft > enemyRight2 || myRight < enemyLeft2 || myTop > enemyBottom2 || myBottom < enemyTop2) {

      }

      else {

        // if the squares overlap, the enemy square will change position
        enemyXPos2 = random(25, 475);
        enemyYPos2 = random(25, 475);

        // decreases the health by one
        hp--
      }

    }

    if (i > 100) {

      fill(0, 0, 255);
      rect(enemyXPos3, enemyYPos3, 50, 50);

      enemyLeft3 = enemyXPos3 - 25;
      enemyRight3 = enemyXPos3 + 25;
      enemyTop3 = enemyYPos3 - 25;
      enemyBottom3 = enemyYPos3 + 25;

      enemyXPos3 += xSpeed3 * xDirection3;
      enemyYPos3 += ySpeed3 * yDirection3;

      if (enemyXPos3 > 474 || enemyXPos3 < 26) {
        xDirection3 *= -1;

        xSpeed3 = random(4, 6);
      }

      if (enemyYPos3 > 474 || enemyYPos3 < 26) {
        yDirection3 *= -1;

        ySpeed3 = random(4, 6);
      }

      if (myLeft > enemyRight3 || myRight < enemyLeft3 || myTop > enemyBottom3 || myBottom < enemyTop3) {

      }

      else {

        // if the squares overlap, the enemy square will change position
        enemyXPos3 = random(25, 475);
        enemyYPos3 = random(25, 475);

        // decreases the health by one
        hp--
      }

    }

    if (hp < 1) {
      state = 'gameOver';
    }
  }
  
}

function mouseClick() {
  if(state == 'title') {
    if (mouseX > 0 && mouseX < 500 && mouseY > 180 && mouseY < 220) {
      easyMode();
    }

    if (mouseX > 0 && mouseX < 500 && mouseY > 230 && mouseY < 270) {
      mediumMode();
    }

    if (mouseX > 0 && mouseX < 500 && mouseY > 280 && mouseY < 320) {
      hardMode();
    }
  }
}