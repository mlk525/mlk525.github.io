let img;
let video;
let poseNet;
let noseX = 0;
let noseY = 0;
let eyelX = 0;
let eyelY = 0;

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

  let eyeLX = map(width - noseX, 0, back.width, width / 2 - 5, width / 2 + 10);
  let eyeLY = map(noseY, 0, back.height, height / 2, height / 2 + 10);

  let eyeRX = map(width - noseX, 0, back.width, width / 2 - 5, width / 2 + 10);
  let eyeRY = map(noseY, 0, back.height, height / 2, height / 2 + 10);

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

  //let pupil = color(87, 48, 22);
  //let iris = color(143, 90, 42);

  //let d = dist(noseX, noseY, eyelX, eyelY);
  //let pupilD = 31;

  //let leftiX = map(width - noseX, 0, img.width, 338, 390);
  //let leftiY = map(noseY, 0, img.height, 273, 286);

  //let rightiX = map(width - noseX, 0, img.width, 498, 550);
  //let rightiY = map(noseY, 0, img.height, 274, 286);

  //fill(pupil);
  //ellipse(leftiX, leftiY, pupilD);
  //ellipse(rightiX, rightiY, pupilD);
}
