window.addEventListener('load', () => {
  const sounds = document.querySelectorAll('.sound');
  const pads = document.querySelectorAll('.pad-container div');

  // sound event listeners
  pads.forEach((pad, index) => {
    pad.addEventListener('click', function() {
      sounds[index].play();
    })
  })
})

