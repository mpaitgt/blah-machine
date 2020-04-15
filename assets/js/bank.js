let bank = document.getElementById('bank');
let bankOne = true;

bank.addEventListener('click', function() {
  let bankOption = document.getElementById('bank-option');
  if (bankOne) {
    bankOption.innerHTML = 'Nervepool';
    bank.style.justifyContent = 'flex-end';
    bankOne = false;
  } else {
    bankOption.innerHTML = 'Hold My Soul';
    bank.style.justifyContent = 'flex-start';
    bankOne = true;
  }
})