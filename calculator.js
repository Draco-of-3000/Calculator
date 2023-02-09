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


let displayValue = ''; //Declare display variable to be used later


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
        document.querySelector('.display1').textContent = displayValue; // Copy content of .display1 into displayValue variable
      });
    });
});



let firstNumber = null;
let operatorClicked = false;


document.addEventListener('DOMContentLoaded', function() {
    let numbers = document.querySelectorAll('.number'); // Add event listener to every element with class "number"
    let operation = ""; //Declare operation(operater clicked by user) variable
    let secondNumber = ""; //Declare second number variable

    //Function to declare first and second number after an operator is clicked
    numbers.forEach(number => {
        number.addEventListener('click', () => {
            let textContent = number.textContent;
            if (!isNaN(textContent)) {
                if (!operatorClicked) { //If operatorClicked !== true, make the clicked numbers the first number 
                    firstNumber = firstNumber ? firstNumber * 10 + Number(textContent) : Number(textContent);
                } else {
                    secondNumber = secondNumber ? secondNumber * 10 + Number(textContent) : Number(textContent); //If operatorClicked == true, make the clicked numbers the first number 
                }
                let displayValue = `${firstNumber} ${operation || ""} ${secondNumber || ""}`; //Display numbers and operators clicked
                document.querySelector(".display1").textContent = displayValue;
            } else {
                console.error("textContent is not a number:", textContent);
            }
        });
    });

    let operators = document.querySelectorAll('.operator'); // Add event listener to every element with class "operator"
    operators.forEach(operator => {
        operator.addEventListener('click', () => {
            operatorClicked = true; //When operator is clicked, update operatorClicked variable to true
            operation = operator.textContent; //Copy value of operator clicked into operation variable
            let displayValue = `${firstNumber} ${operation}${secondNumber ? "" : " "}`; //Display numbers and operators clicked
            document.querySelector(".display1").textContent = displayValue;
        });
    });

    //Function to evaluate firstNumber and secondNumber when an operator and equals button is clicked 
    let equals = document.querySelector(".equals"); // Add event listener to every element with class "equals"
    equals.addEventListener("click", function() {
        let num1 = Number(firstNumber); // Copy firstNumber variable into num1
        let num2 = Number(secondNumber); // Copy secondNumber variable into num2
        result = operate(operation, num1, num2); //Copy result of operate function into result variable
        document.querySelector('.display2').textContent = result; //Update display2 with the rrsult of the operate function
        firstNumber = result; // update firstNumber with result
        secondNumber = null;  // update secondNumber to null
        operation = "";
        operatorClicked = false;
    });

    //Function to clear calculator history after clear button is clicked
    let clear = document.querySelector(".clear");
    clear.addEventListener("click", function() {
        firstNumber = null;
        secondNumber = null;
        operation = null;
        operatorClicked = false;
        displayValue = "";
        document.querySelector(".display1").textContent = displayValue;
        document.querySelector('.display2').textContent = "";
    });
    

});
