// Email Validation
const emailInput = document.querySelector('[type="email"]');
const emailError = document.querySelector('.error--email');
emailInput.addEventListener('input', (e) => {
  if (!e.target.value.includes('@')) {
    emailError.style.visibility = 'visible';
  } else {
    emailError.style.visibility = 'hidden';
  }
});

// Password Validation
const passwordInput = document.querySelector('[name="password"]');
const passwordError = document.querySelector('.error--password');
passwordInput.addEventListener('input', (e) => {
  if (e.target.value.length <= 4) {
    passwordError.style.visibility = 'visible';
  } else {
    passwordError.style.visibility = 'hidden';
  }
});

// Confirm Password Validation
const passwordConfirm = document.querySelector('[name="confirm-password"]');
const passwordConfirmError = document.querySelector('.error--confirm');
passwordConfirm.addEventListener('input', (e) => {
  if (e.target.value !== passwordInput.value) {
    passwordConfirmError.style.visibility = 'visible';
  } else {
    passwordConfirmError.style.visibility = 'hidden';
  }
});
