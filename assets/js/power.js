let power = document.querySelector('.toggle-power');
let powerOn = true;

power.addEventListener('click', function() {
  let box = document.querySelector('.box');
  if (powerOn) {
    power.style.justifyContent = 'flex-start';
    box.classList.remove('on');
    powerOn = false;
  } else {
    power.style.justifyContent = 'flex-end';
    box.classList.add('on');
    powerOn = true;
  }
})