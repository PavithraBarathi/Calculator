let display = document.getElementById('display');
let historyList = document.getElementById('history-list');
let currentInput = '';
let history = [];

function appendToDisplay(value) {
    currentInput += value;
    display.value = currentInput;
}

function clearDisplay() {
    currentInput = '';
    display.value = '';
}

function calculate() {
    try {
        const result = eval(currentInput).toString();
        display.value = result;
        history.push(currentInput + ' = ' + result);
        displayHistory();
        currentInput = '';
    } catch (error) {
        currentInput = '';
        display.value = 'Error';
    }
}

function displayHistory() {
    historyList.innerHTML = '';
    for (let i = 0; i < history.length; i++) {
        const listItem = document.createElement('li');
        listItem.textContent = history[i];
        historyList.appendChild(listItem);
    }
}

