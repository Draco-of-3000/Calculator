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

function operate(operation, num1, num2) {
    if (num1 === 0 || num2 === 0) {
        return "Invalid operation, you didn't select an operand before and after an operator or you tried to to divide by zero";
    }
    
    if (operation === '+') {
        return addition(num1, num2);
    } else if (operation === '-') {
        return subtraction(num1, num2);
    } else if (operation === '×') {
        return multiplication(num1, num2);
    } else if (operation === '÷') {
        return division(num1, num2);
    } else {
        return "Your code failed nigga";
    }
}



const operatorButtons = document.querySelectorAll('.operators .operator');
operatorButtons.forEach(button => {
    button.addEventListener('click', event => {
      let operation;
      if (event.target.classList.contains('plus')) {
        operation = '+';
      } else if (event.target.classList.contains('minus')) {
        operation = '-';
      } else if (event.target.classList.contains('multiplication')) {
        operation = '*';
      } else if (event.target.classList.contains('division')) {
        operation = '/';
      }
  
      // Add code here to get the values for num1 and num2
  
      const result = operate(operation, num1, num2);
      console.log(result);
    });
});



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
let equalsClicked = false;
let decimalClicked = false

document.addEventListener('DOMContentLoaded', function calculate() {
    let numbers = document.querySelectorAll('.number'); // Add event listener to every element with class "number"
    let operation = ""; //Declare operation(operater clicked by user) variable
    let secondNumber = ""; //Declare second number variable

  //Function to declare first and second number after an operator is clicked
  numbers.forEach(number => {
    number.addEventListener('click', () => {
      let textContent = number.textContent;
      if (!isNaN(textContent) || textContent === '.') {
        if (textContent === '.' && decimalClicked) {
          return;
        }
        if (textContent === '.') {
          decimalClicked = true;
        }
        if (!operatorClicked) { 
          //If operatorClicked !== true, make the clicked numbers the first number 
          firstNumber = firstNumber ? firstNumber + textContent : textContent;
        } else {
          secondNumber = secondNumber ? secondNumber + textContent : textContent; //If operatorClicked == true, make the clicked numbers the first number 
        }
        let displayValue = `${firstNumber} ${operation || ""} ${secondNumber || ""}`; //Display numbers and operators clicked
        document.querySelector(".display1").textContent = displayValue;
      } else {
        console.error("textContent is not a number:", textContent);
      }
    });
  });

  let operators = document.querySelectorAll('.operator'); // Select all elements with class 'operator' and store them in the variable 'operators'

  // Loop through each operator and attach a click event listener
  operators.forEach(operator => {
    operator.addEventListener('click', () => {
      // Check if firstNumber, secondNumber, and operation are all not null
      if (firstNumber !== null && secondNumber !== null && operation !== "") {
        let num1 = Number(firstNumber);
        let num2 = Number(secondNumber); 
        firstNumber = operate(operation, num1, num2); // Call the operate function with the values of operation, num1, and num2 and store the result in firstNumber
        operation = operator.textContent; // Set operation to the text content of the current operator
        secondNumber = null; // Set secondNumber to null
      } else {
        operatorClicked = true; // Set operatorClicked to true
        operation = operator.textContent; // Set operation to the text content of the current operator
      }
      // Construct the display value by concatenating firstNumber, operation, and (if secondNumber is not null) secondNumber
      let displayValue = `${firstNumber} ${operation}${secondNumber ? "" : " "}`;
      // Set the text content of the element with class '.display1' to the value of displayValue
      document.querySelector(".display1").textContent = displayValue;
      decimalClicked = false;
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
    let clear = document.querySelector(".clear"); //Add event listener to clear button
    clear.addEventListener("click", function() {
        firstNumber = null;
        secondNumber = null;
        operation = null;
        operatorClicked = false;
        displayValue = "";
        document.querySelector(".display1").textContent = displayValue;
        document.querySelector('.display2').textContent = "";
    });

    let backspaceButton = document.querySelector('.backspace');

    backspaceButton.addEventListener('click', () => {
        displayValue = displayValue.slice(0, -1);
        document.querySelector('.display1').textContent = displayValue;
    
        // Split the displayValue variable based on the current operator
        let displayValues = displayValue.split(' ');
        if (displayValues.length > 0) {
            // Update firstNumber with the first value in the displayValues array
            firstNumber = displayValues[0];
    
            // If there is an operator, update secondNumber with the second value in the displayValues array
            if (displayValues.length > 1) {
                operation = displayValues[1];
                secondNumber = displayValues[2];
            } else {
                operation = '';
                secondNumber = '';
            }
        }
    });
    

});
