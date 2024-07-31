/*
Type of Functions in JS

1. Functional Declaration
2. Function Expression
3. Arrow Function
4. Anonymous Functions
5. IIFE - Immediately Invoked Function Expressions
6. High-Order Functions
7. Callback Functions

*/

//Function Declaration
/* 
A function declaration defines a function with a specified name. this type of function can be called before its declaration due to hoisting.
*/


// function functionName(param, param2){
// console.log("Hello This is", param);

// console.log("From", param2);
// }

// let arg1 = "ÄBC";
// let arg2 = "MP";
// functionName(arg1, arg2);



// Function Expression

// const functionExp = function(){

// }
// functionExp();


// km = 
// avg =
// fuel_cost =
// toll = 


// fuel consume = ?
// fare with toll=?
// fare without toll=?



// function add(val1, val2){
// sum = val1+val2;
// return sum;
// console.log("Hello");

// }

// const add = function (val1, val2){
// // let sum = val1+val2;
// console.log(val1+val2);
// }

// let a = add(20,10);
// consolse.log(a);


// function to find out tax of 18 %
// function to provide discount after tax in %.

// function tax(value,tax){
// let taxValue = (value*tax)/100;
// return value+taxValue;
// }

// function discount(discountValue, per){
// let disValue = (discountValue*per)/100;
// return discountValue-disValue;
// }


// let taxVal = tax(100,18);
// console.log(taxVal);
// let netVal = discount(taxVal, 10);
// console.log(netVal);



//Arrow Function

const functionName = name => {
console.log("Hello! This is", name);
 }

 functionName("Aditya");


 //Anonymous Functions
 setTimeout(function(){
    console.log("This is anonymous function");
 }, 2000);
 console.log("Test Print");



 //Immediately Invoked Function Expressions (IIFE)
 (function(name){
    console.log("This is IIFE", name);
 })("XYZ");



 //Higher-Order Function
 function wish(name){
    return function(message){
        console.log(message + ', ' + name);
    }
    // console.log("Good morning!", name);
 }
 const dW = wish("XYZ");
 dW("Good Morning");



 // Callback Functions
 function userInput(callback){
    const name = prompt("Please enter your name");
    callback(name);
 }
 function whishes(name){
    console.log("Hello, ", name);
 }

 userInput(whishes);