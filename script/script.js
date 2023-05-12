var firstNumber = document.getElementById("firstNumber");
var plusBtn = document.getElementById("plusBtn");
var equalsBtn = document.getElementById("equalsBtn");
var result = document.getElementById("result");
var currentArithmetic = document.getElementById("currentArithmetic");
var counter = 0;
var sumNumbers = 0;
var numbers = [];
var currentArray = [];
var operation = "";

function addNumbers() {
    numbers.push(parseFloat(firstNumber.value));
    sumNumbers += numbers[counter];
    counter++;
    operation = "+";
}

function subtractNumbers() {
    numbers.push(parseFloat(firstNumber.value));
    sumNumbers -= numbers[counter];
    counter++;
    operation = "-";
}

function multiplyNumbers() {
    numbers.push(parseFloat(firstNumber.value));
    sumNumbers *= numbers[counter];
    counter++;
    operation = "*";
}

function divideNumbers() {
    numbers.push(parseFloat(firstNumber.value));
    sumNumbers /= numbers[counter];
    counter++;
    operation = "/";
}

function equalBtn(){
    if(operation === "+"){
        numbers.push(parseFloat(firstNumber.value));
        sumNumbers += numbers[counter];
        result.innerHTML = sumNumbers;
    }
    if(operation === "-"){
        numbers.push(parseFloat(firstNumber.value));
        sumNumbers -= numbers[counter];
        result.innerHTML = sumNumbers;
    }
    if(operation === "*"){
        numbers.push(parseFloat(firstNumber.value));
        sumNumbers *= numbers[counter];
        result.innerHTML = sumNumbers;
    }
    if(operation === "/"){
        numbers.push(parseFloat(firstNumber.value));
        sumNumbers /= numbers[counter];
        result.innerHTML = sumNumbers;
    }
}

function clearBtn(){
    firstNumber.value = 0;
    result.innerHTML = "0";
}