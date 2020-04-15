let volumeKnob = document.getElementById('volume-knob');

// console.log(sound);
// console.log(volumeKnob);

volumeKnob.addEventListener('input', function(e) {
  let sounds = document.querySelectorAll(`audio`);
  sounds.forEach(sound => sound.volume = volumeKnob.value / 100);
  
  
  
  console.log('value', volumeKnob.value);
  console.log('volume', sounds.volume);
})