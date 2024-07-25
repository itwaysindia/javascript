// let heroes = ["ironman", "hulk", "thor", "batman"];

// let numb = [99, 88, 43, 77, 65];
// let sum = 0;

// for (let val of numb){
//     sum += val;
// }
// let avg = sum / numb.length;
// console.log(avg);


// let mix = ["ironman", 99, "Hulk", 88];


items = [250, 650,540,340,667, 334];
// // items[0] = 200;
// //10% off
let dis = 10;

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

for (let i=0; i<items.length; i++ ){
    let offer = (items[i]*dis)/100;
    items[i] -= offer; 
}
console.log(items);



