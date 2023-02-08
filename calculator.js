function addition(){
    let sum = 0;
    for (let i = 0; i < arguments.length; i++){
        sum += arguments[i];
    }
    return sum;
}

function subtraction(){
    let difference = arguments[0];
    for (let i = 1; i < arguments.length; i++) {
      difference -= arguments[i];
    }
    return difference;
  }

function multiplication(){
    let product = 1;
    for(let i = 0; i < arguments.length; i++){
        product *= arguments[i];
    }
    return product;
}

function division(){
    let remainder = arguments[0];
    for(let i = 1; i < arguments.length; i++){
        remainder /= arguments[i];
    }
    return remainder;
}

function operate(operator, num1, num2){
    switch(operator){
        case '+':
            return addition(num1, num2);
        case '-':
            return subtraction(num1, num2);
        case '*':
            return multiplication(num1. num2);
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

populateDisplay();


