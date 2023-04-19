const audio = new Audio('audio_tour.mp3');
const playButton = document.getElementById('play-button');

playButton.addEventListener('click', () => {
  if (audio.paused) {
    audio.play();
    playButton.textContent = 'Pause';
  } else {
    audio.pause();
    playButton.textContent = 'Play';
  }
});
