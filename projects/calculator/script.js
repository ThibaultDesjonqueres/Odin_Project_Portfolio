const buttons = document.querySelectorAll('.calculator button');
let currentOperation = "";

const calc = new Calculator();

function updateDisplay(value) {
    const display = document.querySelector('.calculator .display');
    display.textContent = value; // Change display content
}

function clearDisplay() {
    currentOperation = "";           // reset the stored operation
    updateDisplay('0');              // reset the visual display
    console.log('Cleared display');
}

function handleInput(value) {
    // Map keyboard keys to calculator buttons
    if (value === 'Enter') value = '=';
    if (value === 'Delete' || value === 'Backspace') value = 'C';

    const validKeys = '0123456789+-*/.=()C';
    if (!validKeys.includes(value)) return; // Ignore invalid keys

    if (value === 'C') {
        clearDisplay();
    } 
    else if (value === '=') {
        doCalculation(currentOperation);
    } 
    else if ("+-*/".includes(value)) {
        // Same logic as in clicks: check if we already have "number operator number"
        if (/[0-9.]+[+\-*/][0-9.]+$/.test(currentOperation)) {
            const result = calc.calculate(currentOperation);
            updateDisplay(result);
            currentOperation = result + value; // continue from result
            console.log(`Intermediate calculation: ${currentOperation}`);
        } else {
            // Avoid double operators
            currentOperation = currentOperation.replace(/[+\-*/]$/, "");
            currentOperation += value;
        }
        updateDisplay(currentOperation);
    } 
    else if (value === ".") {
        // Split the currentOperation by operators to get the last number
        const parts = currentOperation.split(/[\+\-\*\/]/);
        const lastNumber = parts[parts.length - 1];
        console.log(`Last number segment: ${lastNumber}`);
        console.log("parts",parts);
        // Only append "." if the last number doesn't already have a decimal
        if (!lastNumber.includes(".")) {
            currentOperation += value;
            updateDisplay(currentOperation);
        }
    }
    else {
        // Append digits or decimal point
        currentOperation += value;
        updateDisplay(currentOperation);
    }
}

// Mouse click listener
function registerClicks() {
    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            handleInput(btn.textContent); // ✅ both clicks & keyboard reuse same function
        });
    });
}

// Keyboard listener
document.addEventListener('keydown', (event) => {
    handleInput(event.key);
});

function doCalculation(operation) {
    const result = calc.calculate(operation);
    updateDisplay(result);
    currentOperation = result.toString(); // store result for further operations
    console.log(`Calculated: ${operation} = ${result}`);
}

function Calculator() {
  this.methods = {
    "-": (a, b) => a - b,
    "+": (a, b) => a + b,
    "*": (a, b) => a * b,
    "/": (a, b) => a / b,
  };

  this.calculate = function(str) {
      let split = str.split(/(\+|\-|\*|\/)/);
      console.log(split);
      let a = +split[0],
          op = split[1],
          b = +split[2];

      if (!this.methods[op] || isNaN(a) || isNaN(b)) {
          return NaN;
      }
      return this.methods[op](a, b);
  };

  this.addMethod = function(name, func) {
      this.methods[name] = func;
  };
}

registerClicks();
