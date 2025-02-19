"use strict"

let currentInput = "";

function appendNumber(number) {
    if (currentInput === "0" && number !== ".") {
        currentInput = number.toString();
    } else {
        currentInput += number;
    }
    document.getElementById('result').value = currentInput;
}

function appendOperator(operator) {
    if (currentInput !== "" && !isOperator(currentInput.slice(-1))) {
        currentInput += operator;
        document.getElementById('result').value = currentInput;
    }
}

function clearDisplay() {
    currentInput = "";
    document.getElementById('result').value = "";
}

function calculate() {
    try {
        currentInput = eval(currentInput).toString();
        document.getElementById('result').value = currentInput;
    } catch (e) {
        document.getElementById('result').value = "エラー";
        currentInput = "";
    }
}

function isOperator(char) {
    return ['+', '-', '*', '/'].includes(char);
}

function addDot() {
    if (currentInput !== "" && !isOperator(currentInput.slice(-1))) {
        if (!currentInput.includes(".")) {
            currentInput += ".";
            document.getElementById('result').value = currentInput;
        }
    }
}

function backspace() {
    currentInput = currentInput.slice(0, -1);
    document.getElementById('result').value = currentInput;
}

document.getElementById('btn-0').addEventListener('click', () => appendNumber(0));
document.getElementById('btn-1').addEventListener('click', () => appendNumber(1));
document.getElementById('btn-2').addEventListener('click', () => appendNumber(2));
document.getElementById('btn-3').addEventListener('click', () => appendNumber(3));
document.getElementById('btn-4').addEventListener('click', () => appendNumber(4));
document.getElementById('btn-5').addEventListener('click', () => appendNumber(5));
document.getElementById('btn-6').addEventListener('click', () => appendNumber(6));
document.getElementById('btn-7').addEventListener('click', () => appendNumber(7));
document.getElementById('btn-8').addEventListener('click', () => appendNumber(8));
document.getElementById('btn-9').addEventListener('click', () => appendNumber(9));

document.getElementById('btn-plus').addEventListener('click', () => appendOperator('+'));
document.getElementById('btn-minus').addEventListener('click', () => appendOperator('-'));
document.getElementById('btn-multiply').addEventListener('click', () => appendOperator('*'));
document.getElementById('btn-divide').addEventListener('click', () => appendOperator('/'));

document.getElementById('btn-clear').addEventListener('click', clearDisplay);
document.getElementById('btn-equal').addEventListener('click', calculate);

document.getElementById('btn-dot').addEventListener('click', addDot); 
document.getElementById('btn-backspace').addEventListener('click', backspace); 
