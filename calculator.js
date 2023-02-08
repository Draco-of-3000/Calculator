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


function operate(operator, num1, num2){
    switch(operator){
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
                let tempFirstNumber = Number(number.textContent);
                firstNumber = tempFirstNumber;
                displayValue = firstNumber;
            }
            else {
                secondNumber = Number(number.textContent);
                displayValue = `${firstNumber} ${operation} ${secondNumber}`;
            };
            document.querySelector(".display1").textContent = displayValue;
        });
    });      
})



document.addEventListener('DOMContentLoaded', function() {
    let operators = document.querySelectorAll('.operator');
    operators.forEach(operator => {
        operator.addEventListener('click', () => {
            operatorClicked = true;
            operation = operator.textContent;
            firstNumber = Number(displayValue);
            displayValue = `${firstNumber} ${operation}` + " ";
            document.querySelector(".display1").textContent = displayValue;
        });
    });
})



document.addEventListener("DOMContentLoaded", function() {
    let equals = document.querySelector(".equals");
    console.log(equals);
  
    equals.addEventListener("click", function() {
        result = operate(operation, firstNumber, secondNumber);
        document.querySelector('.display2').textContent = result;
    });
});