let sound = document.querySelectorAll(`audio`);
let volumeKnob = document.getElementById('volume-knob');

console.log(sound);
console.log(volumeKnob);

volumeKnob.addEventListener('input', function(e) {
  console.log('value', e.target.value / 100);
  console.log('volume', sound.volume);
  sound.volume = e.target.value / 100;
})