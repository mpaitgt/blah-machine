let power = document.getElementById('power');
let powerOn = true;

power.addEventListener('click', function() {
  let lightSource = document.querySelector('.light-source');

  if (powerOn) {
    power.style.justifyContent = 'flex-start';
    lightSource.classList.remove('on');
    lightSource.classList.add('off');
    powerOn = false;
  } else {
    power.style.justifyContent = 'flex-end';
    lightSource.classList.remove('off');
    lightSource.classList.add('on');
    powerOn = true;
  }

})