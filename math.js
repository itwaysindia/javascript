// Basic Math Functions

/*
1. Math.abs()
2. Math.ceil()
3. Math.floor()
4. Math.round()
5. Math.max()
6. Math.min()
*/

// let num = -15
// let absVal = Math.abs(num);
// console.log(absVal);

// let num = 15.01
// let absVal = Math.ceil(num);
// console.log(absVal);

// let num = 15.99
// let absVal = Math.floor(num);
// console.log(absVal);

// let num = 15.50
// let absVal = Math.round(num);
// console.log(absVal);

// let maxVal = Math.max(1,2,5,10,15,7);
// console.log(maxVal);


// Trigonometric Functions

/*
1. Math.sin()
2. Math.cos()
3. Math.tan()
*/


// Exponential and Logarithmic Functions

/*
1. Math.exp()
2. Math.log()
2. Math.pow()
2. Math.sqrt()
*/ 

// let exp = Math.exp(2);
// console.log(exp);

// let logVal = Math.log(10);
// console.log(logVal);

// let base = 2;
// let exponent = 3;
// let pV = Math.pow(base, exponent);
// console.log(pV);



// Generate Random 
// let randomVal = Math.random();
// console.log(randomVal);


// Generating Random Integers

function getRandomInt(min, max){  //1,6
//     let random = Math.random();
//     console.log(random);
//     let num = Math.floor(random*max + 1) + min;
// console.log(num);

    return Math.floor(Math.random()*(max-min +1)) + min;
}
let randomNum = getRandomInt(1111, 9999);
console.log(randomNum);