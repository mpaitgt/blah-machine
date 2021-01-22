let power = document.getElementById('power');
let powerOn = true;

power.addEventListener('click', function() {
  let lightSource = document.querySelector('.light-source');
  let toggleSwitch = document.querySelector('.power_switch');

  if (powerOn) {
    // power.style.justifyContent = 'flex-start';
    lightSource.classList.remove('on');
    toggleSwitch.classList.remove('switch_on');
    lightSource.classList.add('off');
    powerOn = false;
  } else {
    // power.style.justifyContent = 'flex-end';
    lightSource.classList.remove('off');
    lightSource.classList.add('on');
    toggleSwitch.classList.add('switch_on');
    powerOn = true;
  }
})