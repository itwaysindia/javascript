/* console.log("Welcome to JS, This is Console.");
console.warn("This is Warning Message");
console.error("This is error Message"); */

//Variable 
// reserved words connot be variable names.

/*
var => Function-scoped or Globally-scoped, can be re-declare and can be update.

let => block-scoped, cannot be re-declared within the same scope, also we can update the value.

contst => Block-scoped, cannot be re-declared or updated, must be initialized during declaration.
*/
var a; //declaration
var a = 10; //declaration and initialization
a = 20; //assign

let b;
b = 10;

const c = 50;


// console.log(c);



var x = 10;
let y = 20;



{
    var x = 100;
    // let y = 200;

    console.log(x); //100
    console.log(y); //200
}


console.log(x); //10 ? 100
console.log(y); //20

console.log(a);



// Data type in JS 
// Primitive Type: Number, string, Boolean, undefined, Null, Symbol

let str = "Hello";
let num = 10;
let bool = true; //true / false
let notAssign;
let nothing = null;
let sym = Symbol("unique");


console.log(typeof str);
console.log(typeof num);
console.log(typeof bool);
console.log(typeof notAssign);
console.log(typeof nothing);
console.log(typeof sym);

