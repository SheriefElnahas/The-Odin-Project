const passwordInput = document.querySelector('[name="password"]');
const passwordError = document.querySelector('.error--password');

const passwordConfirm = document.querySelector('[name="confirm-password"]');
const passwordConfirmError = document.querySelector('.error--confirm');

const form = document.querySelector('.form');



passwordInput.addEventListener('input', (e) => {
  if(e.target.value.length <= 4) {
    passwordError.style.visibility = 'visible';
  } else {
    passwordError.style.visibility  = 'hidden';
  }
})

passwordConfirm.addEventListener('input', (e) => {

  if(e.target.value !== passwordInput.value) {
    passwordConfirmError.style.visibility = 'visible';
  } else {
    passwordConfirmError.style.visibility = 'hidden';
  }
})