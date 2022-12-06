let img;
let video;
let poseNet;
let noseX = 0;
let noseY = 0;

let myRec = new p5.SpeechRec();

let eyes;
let x = -5;
let commandFoo = false;

function preload() {
  back = loadImage("van gogh_back.png");
  eyeL = loadImage("van gogh_eyeL.png");
  eyeR = loadImage("van gogh_eyeR.png");
  front = loadImage("https://i.postimg.cc/L85mVSDp/van-gogh-front.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);
  video = createCapture(VIDEO);
  video.hide();
  poseNet = ml5.poseNet(video, modelReady);
  poseNet.on("pose", gotPoses);
  
  myRec.onResult = readResult;
  
  myRec.continuous = true;
  myRec.interimResults = false;
  myRec.start();
}

function readResult(){   
  str1 = myRec.resultString;
  console.log(str1);
  
  if(str1.includes("roll your eyes")){
    commandFoo = true;
  }

}

function gotPoses(poses) {
  // console.log(poses);
  if (poses.length > 0) {
    let nX = poses[0].pose.keypoints[0].position.x;
    let nY = poses[0].pose.keypoints[0].position.y;
    //let eX = poses[0].pose.keypoints[1].position.x;
    //let eY = poses[0].pose.keypoints[1].position.y;
    noseX = lerp(noseX, nX, 0.5);
    noseY = lerp(noseY, nY, 0.5);
    //eyelX = lerp(eyelX, eX, 0.5);
    //eyelY = lerp(eyelY, eY, 0.5);
  }
}

function modelReady() {
  console.log("model ready");
}

function draw() {
  //image(video, 0, 0);
  
  if(commandFoo){
    eyes = rollEyes();
  }
  
  else{
    eyes = trackEyes();
  }
  
  
  let eyeLX = eyes.eyeLX,
      eyeLY = eyes.eyeLY,
      eyeRX = eyes.eyeRX,
      eyeRY = eyes.eyeRY;

  if (back.width / back.height < width / height) {
    image(
      back,
      width / 2,
      height / 2,
      width,
      (width / back.width) * back.height
    );

    image(eyeL, eyeLX, eyeLY, width, (width / back.width) * back.height);
    image(eyeR, eyeRX, eyeRY, width, (width / back.width) * back.height);

    image(
      front,
      width / 2,
      height / 2,
      width,
      (width / back.width) * back.height
    );

    console.log("case 1");
    //console.log(width-noseX, noseY)
  } else if (back.width / back.height > width / height) {
    image(
      back,
      width / 2,
      height / 2,
      (height / back.height) * back.width,
      height
    );

    image(eyeL, eyeLX, eyeLY, (height / back.height) * back.width, height);
    image(eyeR, eyeRX, eyeRY, (height / back.height) * back.width, height);

    image(
      front,
      width / 2,
      height / 2,
      (height / back.height) * back.width,
      height
    );

    console.log("case 2");
  } else {
    image(back, width / 2, height / 2, width, height);
  }
    

}

function trackEyes(){

  let eyeLX = map(width - noseX, 0, back.width, width / 2 - 5, width / 2 + 10),
  eyeLY = map(noseY, 0, back.height, height / 2, height / 2 + 10),
  eyeRX = map(width - noseX, 0, back.width, width / 2 - 5, width / 2 + 10),   eyeRY = map(noseY, 0, back.height, height / 2, height / 2 + 10);
  
  return {eyeLX, eyeLY, eyeRX, eyeRY};
}

function rollEyes(){
  
  let eyeLX = width/2,
      eyeLY = height/2,
      eyeRX = width/2,
      eyeRY = height/2;
  
  if (x < 8){
    let y = 4-(x*x/8);
    
    eyeLX -= x;
    eyeRX -= x;
    
    eyeLY -= y;
    eyeRY -= y;
    
    x += 1;
    
    return {eyeLX, eyeLY, eyeRX, eyeRY};
    
  }
  
  eyeLX = width/2-5;
  eyeLY = height/2+2;
  eyeRX = width/2-5;
  eyeRY = height/2+2;
  
  commandFoo = false;
  x = -5;
  return {eyeLX, eyeLY, eyeRX, eyeRY};
}

function sleep(milliseconds) {
  
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}

function mouseClicked() {
  commandFoo = true;
}
