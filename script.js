
let numberContainer1;
let numberContainer2;
let sumCalc;
let operator;



let displayVariable = "";
displayValue = document.getElementById("display");
displayValue.innerHTML = displayVariable

let number0 = document.getElementById("number0");
number0.addEventListener("click",populateNumber0)    

let number1 = document.getElementById("number1");
number1.addEventListener("click",populateNumber1)    

let number2 = document.getElementById("number2");
number2.addEventListener("click",populateNumber2)    

let number3 = document.getElementById("number3");
number3.addEventListener("click",populateNumber3)    

let number4 = document.getElementById("number4");
number4.addEventListener("click",populateNumber4)    

let number5 = document.getElementById("number5");
number5.addEventListener("click",populateNumber5)    

let number6 = document.getElementById("number6");
number6.addEventListener("click",populateNumber6)    

let number7 = document.getElementById("number7");
number7.addEventListener("click",populateNumber7)    

let number8 = document.getElementById("number8");
number8.addEventListener("click",populateNumber8)

let number9 = document.getElementById("number9");
number9.addEventListener("click",populateNumber9)

let clearButton = document.getElementById("clear");
clearButton.addEventListener("click",clearEverything);



let plusOperator = document.getElementById("operatorplus");
plusOperator.addEventListener("click",plusOperation);

let minusOperator = document.getElementById("operatorminus")
minusOperator.addEventListener("click",minusOperation);

let multiplyOperator = document.getElementById("operatormultiply")
multiplyOperator.addEventListener("click",multiplyOperation);

let divisonOperator = document.getElementById("operatordivision")
divisonOperator.addEventListener("click",divisonOperation);

let equals = document.getElementById("equals");
equals.addEventListener("click",equalsOperation)


plusOperator.disabled = true;
minusOperator.disabled = true;
multiplyOperator.disabled = true;
divisonOperator.disabled = true;


function clearEverything(){
    displayVariable = "";
    displayValue.innerHTML = 0
    numberContainer1 = undefined;
}


function populateNumber0(){
    displayVariable = "" + displayVariable + 0;
    displayValue.innerHTML = displayVariable;

    plusOperator.disabled = false;
    minusOperator.disabled = false;
    multiplyOperator.disabled = false;
    divisonOperator.disabled = false;
    equals.disabled = false;
    }

   
function populateNumber1(){
    displayVariable = "" + displayVariable + 1;
    displayValue.innerHTML = displayVariable;

    plusOperator.disabled = false;
    minusOperator.disabled = false;
    multiplyOperator.disabled = false;
    divisonOperator.disabled = false;
    }
    
function populateNumber2(){
    displayVariable = "" + displayVariable + 2;
    displayValue.innerHTML = displayVariable;

    plusOperator.disabled = false;
    minusOperator.disabled = false;
    multiplyOperator.disabled = false;
    divisonOperator.disabled = false;
    }

function populateNumber3(){
    displayVariable = "" + displayVariable + 3;
    displayValue.innerHTML = displayVariable;

    plusOperator.disabled = false;
    minusOperator.disabled = false;
    multiplyOperator.disabled = false;
    divisonOperator.disabled = false;
    }

function populateNumber4(){
    displayVariable = "" + displayVariable + 4;
    displayValue.innerHTML = displayVariable;

    plusOperator.disabled = false;
    minusOperator.disabled = false;
    multiplyOperator.disabled = false;
    divisonOperator.disabled = false;
    }

function populateNumber5(){
    displayVariable = "" + displayVariable + 5;
    displayValue.innerHTML = displayVariable;

    plusOperator.disabled = false;
    minusOperator.disabled = false;
    multiplyOperator.disabled = false;
    divisonOperator.disabled = false;
    }

function populateNumber6(){
    displayVariable = "" + displayVariable + 6;
    displayValue.innerHTML = displayVariable;

    plusOperator.disabled = false;
    minusOperator.disabled = false;
    multiplyOperator.disabled = false;
    divisonOperator.disabled = false;
    }

function populateNumber7(){
    displayVariable = "" + displayVariable + 7;
    displayValue.innerHTML = displayVariable;

    plusOperator.disabled = false;
    minusOperator.disabled = false;
    multiplyOperator.disabled = false;
    divisonOperator.disabled = false;
    }

function populateNumber8(){
    displayVariable = "" + displayVariable + 8;
    displayValue.innerHTML = displayVariable;

    plusOperator.disabled = false;
    minusOperator.disabled = false;
    multiplyOperator.disabled = false;
    divisonOperator.disabled = false;
    }

function populateNumber9(){
    displayVariable = "" + displayVariable + 9;
    displayValue.innerHTML = displayVariable;

    plusOperator.disabled = false;
    minusOperator.disabled = false;
    multiplyOperator.disabled = false;
    divisonOperator.disabled = false;
    }



function add(num1,num2){
    let sum = num1 + num2;
    return sum;
}

function subtract(num1,num2){
    let sum = num1 - num2;
    return sum;
}

function multiply(num1,num2){
    let sum = num1 * num2;
    return sum;
}

function division(num1,num2){
    let sum = num1 / num2;
    if(num2 == 0){
        
        return "Nice try bro. Dividing with 0 is not good."
        
    }
    else{
        return sum;
    }
    
}

function operate(operator,num1,num2){
    if(operator == "+"){
        

        displayVariable = add(parseInt(numberContainer1),parseInt(displayVariable));
        displayValue.innerHTML = displayVariable;
        numberContainer1 = displayVariable;
    }
    else if(operator == "-"){
        
        displayVariable = subtract(parseInt(numberContainer1),parseInt(displayVariable));
        displayValue.innerHTML = displayVariable;
        numberContainer1 = displayVariable;
        
        
    }
    else if(operator == "*"){

        displayVariable = multiply(parseInt(numberContainer1),parseInt(displayVariable));
        displayValue.innerHTML = displayVariable;
        numberContainer1 = displayVariable;
        
    }
    else if(operator == "/"){

        displayVariable = division(parseInt(numberContainer1),parseInt(displayVariable));
        displayValue.innerHTML = displayVariable;
        numberContainer1 = displayVariable;
        
    }

}




function equalsOperation(){
    
    if(numberContainer1 == undefined){
        
    }
    else{
        
        operate(operator,numberContainer1,parseInt(displayVariable));
        //so that we can calculate with the nubmer that comes from pressing the equals button
        //numberContainer1 = undefined;
        //So that our inputs dont get concatenated onto each other if we press the equals button
        
        displayVariable = "";
    }
    
    
    
}



function plusOperation(){   

    if(numberContainer1 == undefined){
        
        numberContainer1 = parseInt(displayVariable);
        
    }
    else{
        
        if(numberContainer1 !== undefined && displayVariable !== ""){
            operate(operator,numberContainer1,displayVariable)
            
        }
        
    }

    displayVariable = "";
    operator = "+"

    plusOperator.setAttribute("disabled","disabled");
    minusOperator.setAttribute("disabled","disabled");
    multiplyOperator.setAttribute("disabled","disabled");
    divisonOperator.setAttribute("disabled","disabled");
}

function minusOperation(){

    
    
    if(numberContainer1 == undefined){
        numberContainer1 = parseInt(displayVariable);
    }
    else{

        if(numberContainer1 !== undefined && displayVariable !== ""){
            operate(operator,numberContainer1,displayVariable)
            
        }

        
    }

    displayVariable = "";
    operator = "-"

    plusOperator.setAttribute("disabled","disabled");
    minusOperator.setAttribute("disabled","disabled");
    multiplyOperator.setAttribute("disabled","disabled");
    divisonOperator.setAttribute("disabled","disabled");
}

function multiplyOperation(){   

    if(numberContainer1 == undefined){
        numberContainer1 = parseInt(displayVariable);
    }
    else{

        if(numberContainer1 !== undefined && displayVariable !== ""){
            operate(operator,numberContainer1,displayVariable)
            
        }
        
    }

    displayVariable = "";
    operator = "*"

    plusOperator.setAttribute("disabled","disabled");
    minusOperator.setAttribute("disabled","disabled");
    multiplyOperator.setAttribute("disabled","disabled");
    divisonOperator.setAttribute("disabled","disabled");
}

function divisonOperation(){   

    if(numberContainer1 == undefined){
        numberContainer1 = parseInt(displayVariable);
    }
    else{

        if(numberContainer1 !== undefined && displayVariable !== ""){
            operate(operator,numberContainer1,displayVariable)
            
        }

        
    }

    displayVariable = "";
    operator = "/"

    plusOperator.setAttribute("disabled","disabled");
    minusOperator.setAttribute("disabled","disabled");
    multiplyOperator.setAttribute("disabled","disabled");
    divisonOperator.setAttribute("disabled","disabled");
}



