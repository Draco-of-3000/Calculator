function addition(){
    let sum = 0;
    for (let i = 0; i < arguments.length; i++){
        sum += arguments[i];
    }
    return Number(sum);
}

function subtraction(){
    let difference = arguments[0];
    for (let i = 1; i < arguments.length; i++) {
      difference -= arguments[i];
    }
    return Number(difference);
  }

function multiplication(){
    let product = 1;
    for(let i = 0; i < arguments.length; i++){
        product *= arguments[i];
    }
    return Number(product);
}

function division(){
    let remainder = arguments[0];
    for(let i = 1; i < arguments.length; i++){
        remainder /= arguments[i];
    }
    return Number(remainder);
}

const operatorButtons = document.querySelectorAll('.operators .operator');

function operate(operation, num1, num2){
    if (operation === '+'){
        return addition(num1, num2);
    }
    else if (operation === '-'){
        return subtraction(num1, num2);
    }
    else if (operation === '*'){
        return multiplication(num1, num2);
    }
    else if (operation === '/'){
        return division(num1, num2);
    }
    else {
        return "Your code failed nigga"
    }
}


let displayValue = '';


//Function To Populate Dispplay
document.addEventListener('DOMContentLoaded', function populateDisplay(){
    
    //Get all elements with class 'number'
    let numbers = document.querySelectorAll('.number');

    //Loop through all elements with class number
    numbers.forEach(number => {

    //Add event listener to each number button
      number.addEventListener('click', () => {
        console.log(typeof(number));

    //Concatenate the number to the existing display value
        displayValue += number.textContent;
        document.querySelector('.display1').textContent = displayValue;
      });
    });
});



let firstNumber = null;
let operatorClicked = false;
let equal = document.querySelector('.equals');

document.addEventListener('DOMContentLoaded', function() {
    let numbers = document.querySelectorAll('.number');
    let operation = "";
    let secondNumber = "";
    numbers.forEach(number => {
        number.addEventListener('click', () => {
            let textContent = number.textContent;
            if (!isNaN(textContent)) {
                if (!operatorClicked) {
                    firstNumber = firstNumber ? firstNumber * 10 + Number(textContent) : Number(textContent);
                } else {
                    secondNumber = secondNumber ? secondNumber * 10 + Number(textContent) : Number(textContent);
                }
                let displayValue = `${firstNumber} ${operation || ""} ${secondNumber || ""}`;
                document.querySelector(".display1").textContent = displayValue;
            } else {
                console.error("textContent is not a number:", textContent);
            }
        });
    });

    let operators = document.querySelectorAll('.operator');
    operators.forEach(operator => {
        operator.addEventListener('click', () => {
            operatorClicked = true;
            operation = operator.textContent;
            let displayValue = `${firstNumber} ${operation}${secondNumber ? "" : " "}`;
            document.querySelector(".display1").textContent = displayValue;
        });
    });

    let equals = document.querySelector(".equals");
    equals.addEventListener("click", function() {
        let num1 = Number(firstNumber);
        let num2 = Number(secondNumber);
        result = operate(operation, num1, num2);
        document.querySelector('.display2').textContent = result;
        firstNumber = result;
        secondNumber = null;
        operation = "";
        operatorClicked = false;
    });
});

