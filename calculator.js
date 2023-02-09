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

function operate(operator, num1, num2){
    num1 = parseInt(num1);
    num2 = parseInt(num2);

    switch (operator) {
        case '+':
            return addition(num1, num2);
        case '-':
            return subtraction(num1, num2);
        case '*':
            return multiplication(num1, num2);
        case '/':
            return division(num1, num2);
        default:
            return "Select an operator";
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



let firstNumber;
let secondNumber;
let operation;
let operatorClicked = false;
let numbers = document.querySelectorAll('.number')
let equal = document.querySelector('.equals');

document.addEventListener('DOMContentLoaded', function(){
    numbers.forEach(number => {
        number.addEventListener('click', () => {
            if(!operatorClicked){
                let tempFirstNumber = parseInt(number.textContent);
                firstNumber = tempFirstNumber;
                displayValue = firstNumber;
                console.log(typeof(firstNumber));
            }
            else {
                secondNumber = parseInt(number.textContent);
                displayValue = `${firstNumber} ${operation} ${secondNumber}`;
                console.log(typeof(secondNumber));
            };
            document.querySelector(".display1").textContent = displayValue;
        });
    });      
})



document.addEventListener('DOMContentLoaded', function() {
    let operators = document.querySelectorAll('.operator');
    operators.forEach(operator => {
        operator.addEventListener('click', () => {
            console.log("Operator clicked: " + operator.textContent);
            operatorClicked = true;
            operation = operator.textContent;
            firstNumber = parseInt(displayValue);
            displayValue = `${firstNumber} ${operation}` + " ";
            document.querySelector(".display1").textContent = displayValue;
        });
    });
})



document.addEventListener("DOMContentLoaded", function() {
    let equals = document.querySelector(".equals");
    equals.addEventListener("click", function() {
        let num1 = parseInt(firstNumber);
        let num2 = parseInt(secondNumber);
        console.log("typeof num1:", typeof num1);
        console.log("value of num1:", num1);
        console.log("typeof num2:", typeof num2);
        console.log("value of num2:", num2);
        result = operate(operation, num1, num2);
        document.querySelector('.display2').textContent = result;
        console.log(result);
    });
});