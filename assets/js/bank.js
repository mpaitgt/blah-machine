const hold = [
  {
    keyCode: 81,
    keyTrigger: 'Q',
    id: 'Kick',
    src: './assets/sounds/hold4.mp3'
  },
  {
    keyCode: 87,
    keyTrigger: 'W',
    id: 'Snare',
    src: './assets/sounds/hold5.mp3'
  },
  {
    keyCode: 69,
    keyTrigger: 'E',
    id: 'Voice',
    src: './assets/sounds/hold7.mp3'
  },
  {
    keyCode: 65,
    keyTrigger: 'A',
    id: 'Guitar-1',
    src: './assets/sounds/hold1.mp3'
  },
  {
    keyCode: 83,
    keyTrigger: 'S',
    id: 'Guitar-2',
    src: './assets/sounds/hold2.mp3'
  },
  {
    keyCode: 68,
    keyTrigger: 'D',
    id: 'Guitar-3',
    src: './assets/sounds/hold3.mp3'
  },
  {
    keyCode: 90,
    keyTrigger: 'Z',
    id: 'Bass-1',
    src: './assets/sounds/hold6.mp3'
  },
  {
    keyCode: 88,
    keyTrigger: 'X',
    id: 'Bass-2',
    src: './assets/sounds/hold8.mp3'
  },  
  {
    keyCode: 67,
    keyTrigger: 'C',
    id: 'Bass-3',
    src: './assets/sounds/hold9.mp3'
  }
];
const nerve = [
  {
    keyCode: 81,
    keyTrigger: 'Q',
    id: 'Smack',
    src: './assets/sounds/nervepool/nerve12.mp3'
  },
  {
    keyCode: 87,
    keyTrigger: 'W',
    id: 'Reverb-Gtr-1',
    src: './assets/sounds/nervepool/nerve9.mp3'
  },
  {
    keyCode: 69,
    keyTrigger: 'E',
    id: 'Reverb-Gtr-2',
    src: './assets/sounds/nervepool/nerve10.mp3' // ???
  },
  {
    keyCode: 65,
    keyTrigger: 'A',
    id: 'Acoustic-Echo-1',
    src: './assets/sounds/nervepool/nerve5.mp3'
  },
  {
    keyCode: 83,
    keyTrigger: 'S',
    id: 'Acoustic-Echo-2',
    src: './assets/sounds/nervepool/nerve6.mp3'
  },
  {
    keyCode: 68,
    keyTrigger: 'D',
    id: 'Acoustic-Echo-3',
    src: './assets/sounds/nervepool/nerve7.mp3'
  },
  {
    keyCode: 90,
    keyTrigger: 'Z',
    id: 'Underwater-Bass-1',
    src: './assets/sounds/nervepool/nerve1.mp3'
  },
  {
    keyCode: 88,
    keyTrigger: 'X',
    id: 'Underwater-Bass-2',
    src: './assets/sounds/nervepool/nerve2.mp3'
  },  
  {
    keyCode: 67,
    keyTrigger: 'C',
    id: 'Underwater-Bass-3',
    src: './assets/sounds/nervepool/nerve3.mp3'
  }
];

let 
  bank = document.getElementById('bank'),
  bankSelect = true;  // true is hold my soul, false is nervepool

// toggle banks
bank.addEventListener('click', function() {
  let bankOption = document.getElementById('bank-option');
  let toggleSwitch = document.querySelector('.bank_switch');
  if (bankSelect) {
    bankOption.innerHTML = 'Nervepool';
    toggleSwitch.classList.add('switch_on');
    setBank(nerve);
    bankSelect = false;
  } else {
    bankOption.innerHTML = 'Hold My Soul';
    toggleSwitch.classList.remove('switch_on');
    setBank(hold);
    bankSelect = true;
  }
})

// set the bank
function setBank(arr) {
  let audioBank = document.getElementById('audio-bank');
  audioBank.innerHTML = '';
  arr.map(sound => {
    let newAudio = document.createElement('audio');
    newAudio.setAttribute('data-key', sound.keyCode);
    newAudio.setAttribute('data-name', sound.id);
    newAudio.setAttribute('class', 'sound');
    newAudio.setAttribute('src', sound.src);
    audioBank.appendChild(newAudio);
  })
}

window.onload = function() {
  this.setBank(hold);
  generateEventListeners();
}