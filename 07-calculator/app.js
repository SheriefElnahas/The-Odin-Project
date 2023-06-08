const screenLastElement = document.querySelector('.screen__last');
const screenResultElement = document.querySelector('.screen__result');
const calculatorButtons = document.querySelector('.calculator__buttons');



calculatorButtons.addEventListener('click', handleButtonClick);


function isNumber(value) {
  return !isNaN(value);
}


function handleButtonClick(e) {
  if (e.target.tagName === 'BUTTON') {
    const buttonValue = e.target.textContent;

    if (buttonValue === '.') {
      handleDecimalPointClick(buttonValue);
    }

    // If buttonValue is a number then call handleNumberClick
    if (isNumber(buttonValue)) {
      handleNumberClick(buttonValue);
    }

    // If buttonValue is not a number then call handleOpeartion
  }
}

function handleNumberClick(buttonValue) {
  const currentValue = screenResultElement.textContent;

  if (currentValue === '0') {
    screenResultElement.textContent = buttonValue;
  } else {
    screenResultElement.textContent += buttonValue;
  }
}

function handleDecimalPointClick(buttonValue) {
  const currentValue = screenResultElement.textContent;

  // If number already have a decimal point then return and dont do anything
  if (currentValue.includes('.')) {
    return;
  }
  // Else add the decimal point to the number
  screenResultElement.textContent += buttonValue;
}