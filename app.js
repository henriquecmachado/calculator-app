const defaultResult = 0
let currentResult = defaultResult; 

function getUserNumberInput() {
    return parseInt(userInput.value);
}

function createAndWriteOutput(resultBeforeCalc, operator, calcNumber) {
  const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
  outputResult(currentResult, calcDescription); // from vendor file
}


// ADD FUNCTION

function add() {
    const enteredNumber = getUserNumberInput(); 
    const initialResult = currentResult; 
    currentResult = currentResult + enteredNumber; 
    createAndWriteOutput(initialResult,'+', enteredNumber); 
}

// SUBTRACT FUNCTION

function subtract() {
    const enteredNumber = getUserNumberInput(); 
    const initialResult = currentResult; 
    currentResult = currentResult - enteredNumber; 
    createAndWriteOutput(initialResult,'-', enteredNumber); 
}

// MULTIPLY FUNCTION

function multiply() {
    const enteredNumber = getUserNumberInput(); 
    const initialResult = currentResult; 
    currentResult = currentResult * enteredNumber; 
    createAndWriteOutput(initialResult,'*', enteredNumber); 
}

// DIVIDE FUNCTION

function divide() {
    const enteredNumber = getUserNumberInput(); 
    const initialResult = currentResult; 
    currentResult = currentResult / enteredNumber; 
    createAndWriteOutput(initialResult,'/', enteredNumber); 
}

// FUNCTION CALLS

plusButton.addEventListener('click', add)
subtractButton.addEventListener('click', subtract)
multiplyButton.addEventListener('click', multiply)
divideButton.addEventListener('click', divide)
