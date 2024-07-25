//For loop

let i;
// let table = 2;
// for(i=1; i<=10; i++){
    // console.log("2 X ", i, " = ", 2*i);
// let o = 2*i;
    // console.log(`2 X ${i} = ${o}`);
// }

// While Loop
 i = 111;
// while(i <= 10)
// {
// console.log(i);
// i++;
// } 


// do while loop

// do{
// console.log(i);
// i++;
// }
// while(i <= 10);


// For of (String / array)
// let a = "Jawahar";

// for(let val of a){
//     console.log(val);
   
// }


// // array
// let cars = ['BMW', 'FORD', 'Audi', 'Jaguar'];
// for (let car of cars){
//     console.log(car);
// }



// For in (Object)

let car = {
    color: "white",
    engine: "BS6",
    cc: 1499,
    company: "Ford",
    Fuel: "deisel",
    Active: true
};
// console.log(car.color);
// console.log(car[color]);

for (let c in car){
    console.log(c + ': ' + car[c]);
}





// Mixed Nested Loops
let products = [
    {name: 'Laptop', price: 50000},
    {name: 'Tablet', price: 10000},
    {name: 'Phone', price: 8000}
];

for (let product of products){
    for(let key in product){
     console.log(key + ': ' + product[key]);   
    }
    console.log('----------');
}