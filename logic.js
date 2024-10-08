let firstNumber = null;
let secondNumber = null;
let operator = null;

console.log("conectado!");

const operations = document.querySelector("#operations");
const output = document.querySelector("#output");

operations.addEventListener("click", (event) => {
    if(output.innerText == "" || isNaN(output.innerText)) {
        output.innerText = "Error, put a number first! Start again";
        return;
    }
    if(output.innerText.includes("."))
        firstNumber = parseFloat(output.innerText, 10);
    else
        firstNumber = parseInt(output.innerText, 10);

    output.innerText = '';
    operator = event.target.id;

});

const equals = document.querySelector("#equals");
equals.addEventListener("click", () => {
    if(output.innerText == "" || isNaN(output.innerText) || firstNumber == null || operator == null) {
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
});

const numbers = document.querySelector("#numbers");
numbers.addEventListener("click", (event) => {
    if (event.target.tagName !== "BUTTON")
        return;
    if(event.target.id == "clear") {
        firstNumber = null;
        secondNumber = null;
        operator = null;
        output.innerText = "";
        return;
    }
    if(event.target.id == "delete") {
        if(!isNaN(output.innerText))
            output.innerText = output.innerText.slice(0, -1); 
        return;
    }
    if(output.innerText == "" || isNaN(output.innerText))
        output.innerText = event.target.id;
    else
        output.innerText += event.target.id;
});

const point = document.querySelector("#point");
point.addEventListener("click", () => {
    if(output.innerText !== "" && !isNaN(output.innerText) && !output.innerText.includes("."))
        output.innerText += ".";
});