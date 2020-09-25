// CONNECT THE BUTTONS WITH CONST

const userInput = document.getElementById('user-input')
const plusButton = document.getElementById('plus-button')
const subtractButton =  document.getElementById('subtract-button')
const multiplyButton = document.getElementById('multiply-button')
const divideButton = document.getElementById('divide-button')


const firstResult =  document.getElementById('default-result')
const lastResult = document.getElementById('current-result')


// CONVERT A STRING A PROPERTIE IN A STRING

function outputResult(result, text) {
    lastResult.textContent = result; 
    firstResult.textContent = text;
};