let pads = document.querySelectorAll(`.pad`);

function generateEventListeners() {
  pads.forEach((pad, index) => {
    let sound = document.querySelectorAll('.sound');
    pad.addEventListener('mousedown', function(e) {
      if (!powerOn) return;
      e.target.classList.add('playing');
      // sound[index].currentTime = 0;
      // sound[index].play();
    })
    pad.addEventListener('mouseup', function(e) {
      e.target.classList.remove('playing');
    })
    pad.addEventListener('transitionend', removeTransition);
  })
}

function removeTransition(e) {
  e.target.classList.remove('playing');
}

function playSound(e) {
  let 
    pad = document.querySelector(`div[data-key='${e.keyCode}']`),
    sound = document.querySelector(`audio[data-key='${e.keyCode}']`),
    display = document.querySelector('.sound-display');

  if (!sound || !powerOn) return;
  pad.classList.add('playing');
  display.innerHTML = sound.getAttribute('data-name');
  sound.currentTime = 0;
  sound.play();
}

window.addEventListener('keydown', playSound);