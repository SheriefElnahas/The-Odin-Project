const screenLastElement = document.querySelector('.screen__last');
const screenResultElement = document.querySelector('.screen__result');

const calculatorButtons = document.querySelector('.calculator__buttons');

calculatorButtons.addEventListener('click', handleButtonClick);


function isNumberOrDecimalPoint(value) {
  return !isNaN(value) || value === '.';
}

function handleButtonClick(e) {
  if (e.target.tagName === 'BUTTON') {
    const buttonValue = e.target.textContent;

    // If buttonValue is a number or decimal point then call handleButtonClick function
    if (isNumberOrDecimalPoint(buttonValue)) {
      handleNumberClick(buttonValue);
    }


    // If buttonvalue is not a number then call handleopeartion
  }
}

function handleNumberClick(buttonValue) {
  const currentValue = screenResultElement.textContent;

  // prevent the user from enterting more than one .
  if (screenResultElement.textContent.includes('.') && buttonValue === '.') {
    return;
  }

  if (currentValue === '0') {
    // handle the case to allow the user to enter floating numbers!
    if (buttonValue === '.') {
      screenResultElement.textContent += buttonValue;
      return;
    }
    screenResultElement.textContent = buttonValue;
  } else {
    screenResultElement.textContent += buttonValue;
  }
}



