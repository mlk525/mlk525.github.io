let img;

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0,0);
  canvas.style('z-index', '-1');
  img = loadImage('Images/walking.png');
  bg = loadImage('Images/alley.png');
}

let pos = 50;

let cuts = [[0, 0],[300,0],[556,0],[0,345],[280,345],[536,345]];

let c = 0;
let dc = 0;

function draw() {
  background(0);
  imageMode(CORNER);
  image(bg, 0,0,width,height);
  fill(0,0,255,10);
  rect(0,0,width,height);
  fill(0);
  imageMode(CENTER);
  image(img, pos, height*0.75, 200, 299, cuts[c][0], cuts[c][1], 200, 299);
}

function mouseWheel(event) {
  if(event.delta>0){
    //move the square according to the vertical scroll amount
    dc += abs(event.delta);
    if(dc>10){
      dc = 0;
      c += 1;
      if(c>5){
        c = 0;
      }
    }

    pos += event.delta*4;
    if(pos < 50){
      pos = 50;
    }
    if(pos > width+50){
      pos = width+100;
    }
    if(pos < width+50){
      return false;
    }
  }
}