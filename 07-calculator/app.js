const resultScreenElement = document.querySelector('.calculator__result');
const calculatorButtons = document.querySelector('.calculator__buttons');

calculatorButtons.addEventListener('click', (e) => {

  if(e.target.tagName === 'BUTTON') {
    console.log(e.target.textContent);
  }
})
