let volumeKnob = document.getElementById('volume-knob');

volumeKnob.addEventListener('input', function(e) {
  let sounds = document.querySelectorAll(`audio`);
  sounds.forEach(sound => sound.volume = volumeKnob.value / 100);
})