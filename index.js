// Functions to do the maths

let num1 = null;
let num2 = null;
let operator = null;
let answer = null;

function add(num1, num2) {
    const sumAnswer = num1 + num2;
    answer = sumAnswer;
}

function subtract(num1, num2) {
    const sumAnswer = num1 - num2;
    answer = sumAnswer;
}

function multiply(num1, num2) {
    const sumAnswer = num1 * num2;
    answer = sumAnswer;
}

function divide(num1, num2) {
    const sumAnswer = num1 / num2;
    answer = sumAnswer;
}

function operate(num1, num2, operator) {
    if (operator === 'add') {
        return add(num1, num2);
    } else if (operator === 'subtract') {
        return subtract(num1, num2);
    } else if (operator === 'multiply') {
        return multiply(num1, num2);
    } else (operator === 'divide'); {
        return divide(num1, num2)
    };
};

// Stuff to get the display working

const display = document.getElementById("display");


function appendToDisplay(input) {
    display.value += input;
}

function clearDisplay(input) {
    display.value = input;
    num1 = null;
    num1 = null;
}

function operatorPress(op) {
    num1 = parseFloat(display.value);
    operator = op;
    display.value = "";
}

function calculate() {
    num2 = parseFloat(display.value);
    operate(num1, num2, operator);
    display.value = answer;
    num1 = answer;
}

