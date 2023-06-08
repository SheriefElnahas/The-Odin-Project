const screenLastElement = document.querySelector('.screen__last');
const screenResultElement = document.querySelector('.screen__result');

const calculatorButtons = document.querySelector('.calculator__buttons');

calculatorButtons.addEventListener('click', (e) => {
  if (e.target.tagName === 'BUTTON') {
    if (!isNaN(parseInt(e.target.textContent)) || e.target.textContent === '.') {
      const currentValue = screenResultElement.textContent;
      const buttonValue = e.target.textContent;

      // prevent the user from enterting more than one .
      if (screenResultElement.textContent.includes('.') && e.target.textContent === '.') {
        return;
      }

      if (currentValue === '0') {
        // handle the case to allow the user to enter floating numbers!
        if (e.target.textContent === '.') {
          screenResultElement.textContent += buttonValue;
          return;
        }

        screenResultElement.textContent = buttonValue;
      } else {
        screenResultElement.textContent += buttonValue;
      }
    }
  }
});
