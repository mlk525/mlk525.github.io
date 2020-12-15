let armImages = [];
let tapeImage;

function windowResized(){
	resizeCanvas(windowWidth, windowHeight);
}

function preload(){
	// Preload the stuff to avoid slowness
	for(let i = 1; i <= 28; i++){
		armImages[i] = loadImage("frames/" + i + ".png");
	}
	tapeImage = loadImage("images/tape.png");
}

function setup(){
	canvas = createCanvas(windowWidth, windowHeight);
	canvas.position(0,0);
	// stay behind everything
	canvas.style('z-index', '-1');
}

function draw(){
	background(200);
	image(tapeImage,0,0,height*1.7,height);
	background(0,100);
	displayArm();
}

function displayArm(){
	// Cycle through the different frames of the
	// bottle animation, based on mouse Y
	imageMode(CORNER);
	image(armImages[Math.floor(map(mouseY, 0, height+10, 1, 29))],0,0, height*1.43, height);
}