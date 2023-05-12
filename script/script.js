var firstNumber = document.getElementById("firstNumber");
var plusBtn = document.getElementById("plusBtn");
var equalsBtn = document.getElementById("equalsBtn");
var result = document.getElementById("result");
var counter = 0;
var sumNumbers = 0;
var numbers = [];
var currentArray = [];
var operation = "default";

function addNumbers() {
    numbers.push(parseFloat(firstNumber.value));
    counter++;
    operation = "plus";
}

function subtractNumbers() {
    numbers.push(parseFloat(firstNumber.value));
    counter++;
    operation = "minus";
}

function multiplyNumbers() {
    numbers.push(parseFloat(firstNumber.value));
    counter++;
    operation = "multiply";
}

function divideNumbers() {
    numbers.push(parseFloat(firstNumber.value));
    counter++;
    operation = "divide";
}

function equalBtn(){
    if(operation === "plus"){
    numbers.push(parseFloat(firstNumber.value));
    sumNumbers = numbers[counter] + numbers[counter-1];
    }
    if(operation === "minus"){
        numbers.push(parseFloat(firstNumber.value));
        sumNumbers = numbers[counter-1] - numbers[counter];
    }
    if(operation === "multiply"){
        numbers.push(parseFloat(firstNumber.value));
        sumNumbers = numbers[counter] * numbers[counter-1];
    }
    if(operation === "divide"){
        numbers.push(parseFloat(firstNumber.value));
        sumNumbers = numbers[counter-1] - numbers[counter];
    }
    result.innerHTML = sumNumbers;
}

function clearBtn(){
    numbers = [];
    firstNumber.value = 0;
    result.innerHTML = "0";
}
