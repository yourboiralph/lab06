var number =[];
var inputNumber = document.getElementById("inputNumber");
var result = document.getElementById("result");
var total = 0;
var isFirst = true;
var operator;

function sum(){
    if(isFirst){
        total += parseFloat(inputNumber.value);
        isFirst = false;
    }
    operator = "plus";
}

function subtract(){
    if(isFirst){
        total -= parseFloat(inputNumber.value);
        isFirst = false;
    }
    operator = "minus";

}

function multiply(){
    if(isFirst){
        total *= parseFloat(inputNumber.value);
        isFirst = false;
    }
    operator = "multiply";

}

function divide(){
    if(isFirst){
        total *= parseFloat(inputNumber.value);
        isFirst = false;
    }
    operator = "divide";

}

function equalBtn(){
    if(operator === "plus"){
    
        total += parseFloat(inputNumber.value);
        result.innerHTML = total;
        operator = " ";
    }

    if(operator === "minus"){
    
        total -= parseFloat(inputNumber.value);
        result.innerHTML = total;
        operator = " ";
    }
    if(operator === "multiply"){
    
        total *= parseFloat(inputNumber.value);
        result.innerHTML = total;
        operator = " ";
    }
    if(operator === "divide"){
    
        total /= parseFloat(inputNumber.value);
        result.innerHTML = total;
        operator = " ";
    }
}

function clearBtn(){
    result.innerHTML = "0";
    inputNumber.value = "0";
}