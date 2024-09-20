const calculator = document.querySelector(".calculator");
const resultBox = document.querySelector(".result_box")
calculator.addEventListener("click", (e) => handleClick(e));

function add(...args) {return args.reduce((accumulator, curr) => accumulator + curr);}

function subtract(...args) {return args.reduce((accumulator, curr) => accumulator - curr);}

function multiply(...args) {return args.reduce((accumulator, curr) => accumulator * curr);}

function divide(...args) {return args.reduce((accumulator, curr) => accumulator / curr);}

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
    }
}

function resetCalculator() {n1 = "", n2 = "", operator = null, result = null;}

function handleClick(event) {
    button = event.target;
    button_classList = button.classList;
    if (button_classList.contains("number")) {
        if (operator == null) {
            n1 += button.id;
            resultBox.textContent = n1;
        } else {
            n2 += button.id;
            resultBox.textContent = n2;
        }
    } else if (button.id == "=") {
        resultBox.textContent = String(operate(parseInt(n1), parseInt(n2), operator));
        n1 = resultBox.textContent, n2 = "", operator = null, result = null;
    } else if (button.id == "clear") {
        n1 = "", n2 = "", operator = null, result = null;
        resultBox.textContent = 0;
    } else if (button_classList.contains("operator")) {
        if (operator != null) {
            resultBox.textContent = String(operate(parseInt(n1), parseInt(n2), operator));
            n1 = resultBox.textContent, n2 = "", result = null
        }
        operator = button.id;
        console.log(n1, operator);
    }
}

let n1 = "", n2 = "", operator = null;
