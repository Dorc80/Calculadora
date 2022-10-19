var num;
var operator;
var isCalculateClicked = false;
var isOperatorClicked = false;

var display = document.querySelector('#display');

function press(pressnum) {

    if(isCalculateClicked) {
        num = ejecutarOperacion(num, operator, pressnum);
        display.innerText = num;
        return;
    }

    if(isOperatorClicked) {
        display.innerHTML = 0;
        isOperatorClicked = false;
    }

    display.innerText = (display.innerText == 0 ? '' : display.innerText) + pressnum;

}

function setOP(pressoperator) {
    num = display.innerHTML;
    operator = pressoperator;
    isCalculateClicked = false;
    isOperatorClicked = true;
}

function calculate() {

    if(!(num && operator)) {
        return;
    }
    
    num = ejecutarOperacion(num, operator, display.innerText);
    display.innerText = num;
    isCalculateClicked = true
}

function clr() {
    isCalculateClicked = false;
    operator = null;
    num = null;
    display.innerText = 0;
}

function ejecutarOperacion(num1, op, num2) {
    let token = num1 + op + num2;
    return eval(token);
}