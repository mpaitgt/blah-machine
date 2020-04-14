let pads = document.querySelectorAll(`.pad`);
let power = document.querySelector('.toggle-power');
let powerOn = true;

function removeTransition(e) {
  console.log(e.target);
  e.target.classList.remove('playing');
}

function playSound(e) {
  let pad = document.querySelector(`div[data-key='${e.keyCode}']`);
  let sound = document.querySelector(`audio[data-key='${e.keyCode}']`);
  if (!sound) return;

  pad.classList.add('playing');
  sound.currentTime = 0;
  sound.play();
}

pads.forEach((pad, index) => {
  let sound = document.querySelectorAll('.sound');
  pad.addEventListener('mousedown', function(e) {
    e.target.classList.add('playing');
    sound.currentTime = 0;
    sound[index].play();
  })
  pad.addEventListener('mouseup', function(e) {
    e.target.classList.remove('playing');
  })
  pad.addEventListener('transitionend', removeTransition);
})

window.addEventListener('keydown', playSound);

power.addEventListener('click', function() {
  if (powerOn) {
    power.style.justifyContent = 'flex-start';
    powerOn = false;
  } else {
    power.style.justifyContent = 'flex-end';
    powerOn = true;
  }
})