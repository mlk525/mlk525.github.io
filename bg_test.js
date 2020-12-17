var canvas;
let snowflakes = []; // array to hold snowflake objects

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0,0);
  fill(255, 255, 255, 50);
  noStroke();
//  canvas.style('z-index', '-1');
}

function draw() {
  clear();
  let t = frameCount / 60; // update time

  // create a random number of snowflakes each frame
    if (frameCount%5 === 0){
    snowflakes.push(new snowflake()); // append snowflake object
}

  // loop through snowflakes with a for..of loop
  for (let flake of snowflakes) {
    flake.update(t); // update snowflake position
    flake.display(); // draw snowflake
  }
}

// snowflake class
function snowflake() {
  // initialize coordinates
  this.posX = 0;
  this.posY = random(-50, 0);
  this.initialangle = random(-2 * PI, 2 * PI);
  this.size = random(10, 15);

  // radius of snowflake spiral
  // chosen so the snowflakes are uniformly spread out in area
  this.radius = sqrt(random(pow(width / 2, 2)));

  this.update = function(time) {
    // x position follows a circle
    let w = 0.6; // angular speed

    //if (this.initialangle > 0){
        let angle = this.initialangle + w * time;
    //}

    /*else{
        let angle = -this.initialangle + w * time*(mouseX*(0.5/width));
    }*/

    this.posX = (width / 2 + this.radius * sin(angle)) + (mouseX*(100/width));

    // different size snowflakes fall at slightly different y speeds
    this.posY += 1 + pow(this.size, 0.3)*(mouseY*(2/width));

    // delete snowflake if past end of screen
    if (this.posY > height) {
      let index = snowflakes.indexOf(this);
      snowflakes.splice(index, 1);
    }
  };

  this.display = function() {
    ellipse(this.posX, this.posY, this.size);
  };
}
