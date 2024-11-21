let display = document.getElementById('display');
let currentInput = '';
let operator = '';
let firstOperand = null;

function appendNumber(number) {
  currentInput += number;
  display.value = currentInput;
}

function appendOperator(op) {
  if (currentInput === '') return; // Prevent operator input without number
  if (firstOperand === null) {
    firstOperand = parseFloat(currentInput);
    currentInput = '';
  }
  operator = op;
  display.value = '';
}

function clearDisplay() {
  currentInput = '';
  operator = '';
  firstOperand = null;
  display.value = '';
}

function calculate() {
  if (currentInput === '' || firstOperand === null) return;
  let secondOperand = parseFloat(currentInput);
  let result = 0;

  switch (operator) {
    case '+':
      result = firstOperand + secondOperand;
      break;
    case '-':
      result = firstOperand - secondOperand;
      break;
  }

  display.value = result;
  firstOperand = result;
  currentInput = '';
  operator = '';
}
