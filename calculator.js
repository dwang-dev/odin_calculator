const resultBox = document.querySelector(".result_box");
const clearBtn = document.querySelector("#clear");
const deleteBtn = document.querySelector("#delete");
const numberBtns = document.querySelectorAll(".number");
const operatorBtns = document.querySelectorAll(".operator");
const equalsBtn = document.querySelector("#equals");

clearBtn.addEventListener("click", () => clear());
deleteBtn.addEventListener("click", () => deleteNumber());
numberBtns.forEach((btn) => btn.addEventListener("click", () => inputNumber(btn)));
operatorBtns.forEach((btn) => btn.addEventListener("click", () => setOperator(btn)));
equalsBtn.addEventListener("click", () => evaluate());

function add(n1, n2) {return n1 + n2;}

function subtract(n1, n2) {return n1 - n2;}

function multiply(n1, n2) {return n1 * n2;}

function divide(n1, n2) {return n1 / n2;}

function operate(n1, n2, operator) {
    switch(operator) {
        case "+":
            return add(n1, n2);
        case "-":
            return subtract(n1, n2);
        case "*":
            return multiply(n1, n2);
        case "/":
            if (n2 == 0) return "MATH ERROR";
            return divide(n1, n2);
        default:
            return "MATH ERROR";
    }
}

function clear() {
    n1 = "", n2 = "", operator = null;
    resultBox.textContent = 0;
}

function deleteNumber() {
    if (resultBox.textContent == n1) {
        n1 = n1.substring(0, n1.length - 1);
    } else if (resultBox.textContent == n2) {
        n2 = n2.substring(0, n2.length - 1);
    }
    resultBox.textContent = resultBox.textContent.substring(0, resultBox.textContent.length - 1);
}

function inputNumber(button) {
    if (operator == null) {
        n1 += button.id;
        resultBox.textContent = n1;
    } else {
        n2 += button.id;
        resultBox.textContent = n2;
    }
}

function setOperator(button) {
    if (operator != null && n2 != "") {
        resultBox.textContent = String(operate(parseInt(n1), parseInt(n2), operator));
        n1 = resultBox.textContent, n2 = "", result = null
    }
    operator = button.id;
}

function evaluate() {
    if (operator != null) resultBox.textContent = String(operate(parseInt(n1), parseInt(n2), operator));
    n1 = resultBox.textContent, n2 = "", operator = null;
}

let n1 = "", n2 = "", operator = null;