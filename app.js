let numOne = 32;
let numTwo = 45;
let operator = prompt("Choose your operator !!")


operate(numOne, numTwo , operator);



function operate(a , b , operator ) {
    if (operator == "+") {
        add(a ,b)
    }
    else if (operator == "-") {
        subtract(a,b);
    }
    else if (operator == "x") {
        multiply(a,b)
    }
    else if(operator == "/") {
        divide(a,b)
    }
}

function add(a , b ) {
    console.log(a +b) 
}

function subtract(a, b) {
    console.log(a-b) ;
}

function multiply(a,b) {
    console.log(a*b) ;
}

function divide(a,b) {
    console.log(a/b) ;
}