let introPopup = document.querySelector(".popup.intro");
let introVideo = document.querySelector(".popup.intro video");

let eviInfoPopup = document.querySelector(".popup.evi-info");

let eviVideoPopup = document.querySelector(".popup.evi-video");
let eviVideo = document.querySelector(".popup.evi-video video");

let wrongPopup = document.querySelector(".popup.wrong-ans");

let winPopup = document.querySelector(".popup.win-video");

// Functions to transport user to diff. pages
// when certain videos end
introVideo.onended = function(){
	window.location.replace("table.html");
}

// Functions to open and close popups
function openIntro(){
	introPopup.classList.toggle("active");
	introVideo.play();
}

function closeIntro(){
	introPopup.classList.toggle("active");
	introVideo.pause();
	introVideo.currentTime = 0;
}

function openEviInfo(){
	eviInfoPopup.classList.toggle("active");
}

function closeEviInfo(){
	eviInfoPopup.classList.toggle("active");
}

// Inject new video into popup depending on which image is clicked
function showEviVideo(v){
	eviVideoPopup.classList.toggle("active");
	var videoName = "videos/video" + v + ".mp4";
	console.log(videoName);
	eviVideo.setAttribute("src", videoName);
	eviVideo.play();
}

function closeEviVideo(){
	eviVideoPopup.classList.toggle("active");
	eviVideo.pause();
	eviVideo.currentTime = 0;
}

// Check if answer is correct
function checkAnswer(){
	var order = $(".drag-col").sortable("toArray");
	var choice = $(".ui-selected").attr("id");

	if(order.indexOf("ice") > order.indexOf("soy") && choice=="theater"){
		correct();
	}
	else{
		incorrect();
	}
}

// Show incorrect answer popup
function incorrect(){
	wrongPopup.classList.toggle("active");
}

// Play final video
function correct(){
	winPopup.classList.toggle("active");
	winVideo.play();
	console.log(winVideo);
}

