window.addEventListener('load', () => {
  const sounds = document.querySelectorAll('.sound');
  const pads = document.querySelectorAll('.pad-container div');
  const visual = document.querySelector('.visual');

  const colors = [
    '#60d394',
    '#d36060',
    '#e394f3',
    '#5187fc',
    '#d3c760',
    '#ff7ac7',
    '#f8c16d',
    '#76ffb4'
  ];

  // sound event listeners
  pads.forEach((pad, index) => {
    pad.addEventListener('click', function() {
      sounds[index].currentTime = 0;
      sounds[index].play();

      createBubbles(index);
    })
  })

  // function that makes bubbles
  const createBubbles = index => {
    const bubble = document.createElement('div');
    visual.appendChild(bubble);
    bubble.style.backgroundColor = colors[index];
    bubble.style.animation = 'jump 1s ease';
    bubble.addEventListener('animationend', function() {
      visual.removeChild(this);
    })
  }
})

