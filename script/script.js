var firstNumber = document.getElementById("firstNumber");
var plusBtn = document.getElementById("plusBtn");
var equalsBtn = document.getElementById("equalsBtn");
var result = document.getElementById("result");
var currentArithmetic = document.getElementById("currentArithmetic");
var counter = 0;
var sumNumbers = 0;
var numbers = [];
var currentArray = [];

function addNumbers() {
    numbers.push(parseFloat(firstNumber.value));
    sumNumbers += numbers[counter];
    counter++;
}

function subtractNumbers() {
    numbers.push(parseFloat(firstNumber.value));
    sumNumbers -= numbers[counter];
    counter++;
}

function multiplyNumbers() {
    numbers.push(parseFloat(firstNumber.value));
    sumNumbers *= numbers[counter];
    counter++;
}

function divideNumbers() {
    numbers.push(parseFloat(firstNumber.value));
    sumNumbers /= numbers[counter];
    counter++;
}

function equalBtn(){
    numbers.push(parseFloat(firstNumber.value));
    sumNumbers += numbers[counter];
    result.innerHTML = "= " + sumNumbers;
}

function clearBtn(){
    firstNumber.value = 0;
    result.innerHTML = "0";
}


