// let heroes = ["ironman", "hulk", "thor", "batman"];

// let numb = [99, 88, 43, 77, 65];
// let sum = 0;

// for (let val of numb){
//     sum += val;
// }
// let avg = sum / numb.length;
// console.log(avg);


// let mix = ["ironman", 99, "Hulk", 88];


// items = [250, 650,540,340,667, 334];
// // items[0] = 200;
// //10% off
// let dis = 10;

// let i =0;
// for (let val of items){
//     let offer = (val*dis)/100;
// console.log(offer);
// // let tv = val-offer;
// // console.log(tv);
// items[i] = items[i] - offer;

// i++;
// }

// console.log(items);

// for (let i=0; i<items.length; i++ ){
//     let offer = (items[i]*dis)/100;
//     items[i] -= offer; 
// }
// console.log(items);


/* 
var.length
length: Returns the number of elements in the array
push() : Adds a new element to the end of array.
pop() : Removes the last element from the array.
shift() : Removes the first element from the array.
unshift(): adds a new element to the beginning of the array.
splice() : Adds or removes elements from the array.
slice() : Returns a new array containing a portion of the original array.
concat() : Merges two or more arrays.
indexOf() : Returns the first index of a specified element.
includes() : Checks if an array contains a specified element.
*/


let fruits = ["Apple", "Banana", "Mango"];

// length
console.log(fruits.length); // 3

//push()
fruits.push("Papaya");
console.log(fruits);

//pop()
fruits.pop();
console.log(fruits);

// shift()
fruits.shift();
console.log(fruits);

//unshift()
fruits.unshift("Strawberry");
console.log(fruits);

//splice
fruits.splice(2, 1, "Kiwi", "Pineapple");
console.log(fruits);

//slice
let fruit = fruits.slice(1, 3);
console.log(fruit);

// 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 |


let mfruits = fruits.concat(fruit);
let morefruits = fruits.concat("Lemon", "Orange");
console.log(mfruits);

//indexOf()
console.log(fruits.indexOf("Kiwi"));

//includes()
console.log(fruits.includes("Kiwi"));

// Multidimensional Array

let matrix = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];

console.log(matrix[1][2]);