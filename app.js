let numOne = '';
let numTwo = '';
let operator = '';
let isOperatorClicked = false;
let result = 0;
// const one = document.querySelector(".one");
// const two = document.querySelector(".two");
// const three = document.querySelector(".three");
// const four = document.querySelector(".four");
// const five = document.querySelector(".five");
// const six = document.querySelector(".six");
// const seven = document.querySelector(".seven");
// const eight = document.querySelector(".eight");
// const nine = document.querySelector(".nine");
// const zero = document.querySelector(".zero");
const screen = document.querySelector(".screen");
const numbers = document.querySelectorAll("#numbers");
const operators = document.querySelectorAll("#operator")
userInput(numOne)
operatorInput()





function operatorInput() {
    operators.forEach(op => {
        op.addEventListener("click" , function() {
            operate(numOne , numTwo , operator);
            operator = op.textContent;
            
            if(isOperatorClicked) {
                // numTwo = parseInt(numTwo);
                
                screen.textContent = result;
                numOne = result;
                console.log(numOne)
                console.log(result)
                numTwo = '';
            } else {
            //    numOne = parseInt(numOne);
               isOperatorClicked = true;
               console.log(numOne);
            }
            if (operator === "=") {
                numOne = '';
                numTwo = '';
                isOperatorClicked = false;
          
            }
            
        })
    })
}



function userInput(a) {
    numbers.forEach(element => {
        element.addEventListener('click' , function() {
            if (isOperatorClicked) {
                numTwo += element.textContent;
                screen.textContent = numTwo;
                numTwo = parseInt(numTwo)
            } else {
                numOne += element.textContent;
                screen.textContent = numOne;
                numOne = parseInt(numOne)

            }
            
            
        })
       
    })
}













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
    result = (a +b) 
}

function subtract(a, b) {
    result = (a-b) ;
}

function multiply(a,b) {
    result = (a*b) ;
}

function divide(a,b) {
    result = (a/b) ;
}