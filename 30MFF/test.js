//script to make the photo gallery clickable (and consequently expandable)
function myFunction(imgs) {
  //get the expanded image
  var expandImg = document.getElementById("expandedImg");
  //get the image text
  var imgText = document.getElementById("imgtext");
  //use the same source in the expanded image as the image being clicked on from the grid
  expandImg.src = imgs.src;
  //use the value of the alt text attribute of the clicked image as alt text inside the expanded image
  imgText.innerHTML = imgs.alt;
  //display container element (hidden by default in css)
  expandImg.parentElement.style.display = "block";
} 
