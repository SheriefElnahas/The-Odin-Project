const screenLastElement = document.querySelector('.screen__last');
const screenResultElement = document.querySelector('.screen__result');


const calculatorButtons = document.querySelector('.calculator__buttons');


calculatorButtons.addEventListener('click', (e) => {
  if (e.target.tagName === 'BUTTON') {
    const currentValue = screenResultElement.textContent;
    const buttonValue = e.target.textContent;

    if (currentValue === '0') {
      screenResultElement.textContent = buttonValue;
    } else {
      screenResultElement.textContent += buttonValue;
    }
  }
});
