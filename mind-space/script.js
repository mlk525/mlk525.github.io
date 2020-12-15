function addClass() {
    document.body.classList.add("sent");
    console.log("in add class function");

  }
  
  sendLetter.addEventListener("click", addClass);

function removeClass() {
  document.body.classList.remove("sent");
}

function reloadDIV() { 
  location.reload();
}

