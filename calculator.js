const expressionBox = document.querySelector("#expressionBox");
const resultBox = document.querySelector("#result_box");
const clearBtn = document.querySelector("#clear");
const deleteBtn = document.querySelector("#delete");
const numberBtns = document.querySelectorAll(".number");
const operatorBtns = document.querySelectorAll(".operator");
const equalsBtn = document.querySelector("#equals");
const dotBtn = document.querySelector("#dot");

clearBtn.addEventListener("click", () => clear());
deleteBtn.addEventListener("click", () => deleteNumber());
numberBtns.forEach((btn) => btn.addEventListener("click", () => inputNumber(btn)));
operatorBtns.forEach((btn) => btn.addEventListener("click", () => setOperator(btn)));
equalsBtn.addEventListener("click", () => evaluate());
dotBtn.addEventListener("click", () => inputNumber(dotBtn));

let n1 = "", n2 = "", operator = null

function add(n1, n2) {return parseFloat((n1 + n2).toFixed(2));}

function subtract(n1, n2) {return parseFloat((n1 - n2).toFixed(2));}

function multiply(n1, n2) {return parseFloat((n1 * n2).toFixed(2));}

function divide(n1, n2) {
    if (n2 == 0) {
        return "MATH ERROR";
    } else {
        return (n1 / n2).toFixed(2);
    }
}

function operate(n1, n2, operator) {
    switch(operator) {
        case "+":
            return add(n1, n2);
        case "-":
            return subtract(n1, n2);
        case "x":
            return multiply(n1, n2);
        case "÷":
            return divide(n1, n2);
        default:
            return "MATH ERROR";
    }
}

function clear() {
    n1 = "";
    n2 = "";
    operator = null;
    resultBox.textContent = 0;
    expressionBox.textContent = "";
}

function deleteNumber() {
    resultBox.textContent = resultBox.textContent?.slice(0, -1);
}

function inputNumber(button) {
    if (resultBox.textContent == "0" || (operator != null && resultBox.textContent == n1)) {
        resultBox.textContent = button.textContent;
    } else {
        resultBox.textContent += button.textContent;
    }
}

function setOperator(button) {
    if (!n1) {
        n1 = resultBox.textContent;
    }
    if (operator != null) {
        evaluate()
    }
    operator = button.textContent;
    expressionBox.textContent = `${n1} ${operator}`;
}

function evaluate() {
    n2 = resultBox.textContent;
    if (operator == null || !n1 || !n2) {
        return;
    }
    let result = String(operate(parseFloat(n1), parseFloat(n2), operator));
    resultBox.textContent = result;
    expressionBox.textContent += ` ${n2} = `;
    n1 = result, n2 = "", operator = null;
}