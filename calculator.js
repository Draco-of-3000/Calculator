function addition(){
    let sum = 0;
    for (let i = 0; i < arguments.length; i++){
        sum += arguments[i];
    }
    return sum;
}

function subtraction(){
    let difference = arguments[0];
    for(let i = 0; i < arguments.length; i--){
        minus -= arguemnts[i];
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


