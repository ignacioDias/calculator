let firstNumber = null;
let secondNumber = null;
let operator = null;
let reset = false;
console.log("conectado!");

const operations = document.querySelector("#operations");
const output = document.querySelector("#output");
const point = document.querySelector("#point");
const equals = document.querySelector("#equals");
const numbers = document.querySelector("#numbers");

operations.addEventListener("click", handleOperations);
numbers.addEventListener("click", handleNumber);
point.addEventListener("click", handlePoint);
equals.addEventListener("click", handleEquals);

function handleOperations(event) {
    if(output.innerText == "" || isNaN(output.innerText)) {
        clearAll();
        output.innerText = "Error, put a number first! Start again";
        return;
    }
    if(output.innerText.includes("."))
        firstNumber = parseFloat(output.innerText, 10);
    else
        firstNumber = parseInt(output.innerText, 10);

    output.innerText = '';
    operator = event.target.id;

}
function handleEquals() {
    if(output.innerText == "" || isNaN(output.innerText) || firstNumber == null || operator == null) {
        clearAll();
        output.innerText = "Error, start again!!";
        return;
    }
    if(output.innerText.includes("."))
        secondNumber = parseFloat(output.innerText, 10);
    else
    secondNumber = parseInt(output.innerText, 10);
    output.innerText = '';
    switch(operator) {
        case "add":
            firstNumber += secondNumber;
            output.innerText = firstNumber;
            break;
        case "subscract":
            firstNumber -= secondNumber;
            output.innerText = firstNumber;
            break;
        case "division":
            if(secondNumber != 0) {
                firstNumber /= secondNumber;
                output.innerText = firstNumber;
            } else {
                clearAll();
                output.innerText = "Can't divide by 0!";
            }
            break;
        case "product":
            firstNumber *= secondNumber;
            output.innerText = firstNumber;
            break;
        case "pow":
            firstNumber **= secondNumber;
            output.innerText = firstNumber;
            break;
    }
    secondNumber = null;
    operator = null;
    reset = true;
}
function handleNumber(event) {
    if (event.target.tagName !== "BUTTON")
        return;
    if(event.target.id == "clear") {
        clearAll();
        return;
    }
    if(event.target.id == "delete") {
        if(!isNaN(output.innerText))
            output.innerText = output.innerText.slice(0, -1); 
        return;
    }
    if(output.innerText == "" || isNaN(output.innerText) || reset) {
        output.innerText = event.target.id;
        reset = false;
    } else {
        output.innerText += event.target.id;
    }
}
function handlePoint() {
    if(output.innerText !== "" && !isNaN(output.innerText) && !output.innerText.includes("."))
        output.innerText += ".";
}
function clearAll() {
    firstNumber = null;
    secondNumber = null;
    operator = null;
    output.innerText = "";
}