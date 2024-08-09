// document.write("Hello");

// let t = document.getElementById("title");
// console.log(t);

// let c = document.getElementsByClassName("list-item");
// console.log(c[2].innerText);


// let q = document.querySelectorAll("ul");
// console.log(q);
// console.log(q[1].innerText);



// let li = document.getElementsByClassName("list-item");
// li[2].innerText = "Thi is New Text";
// console.log(li[2].innerText);

// let li = document.getElementsByClassName("list-item");
// li[2].innerHTML = "<b>This is New Text</b>";
// console.log(li[2].innerHTML);

// var p = document.getElementById("para");
// console.log(p);
// p.setAttribute("class", "dark");

// console.log(p.getAttribute("class"));

// p.removeAttribute("id");
// console.log(p);


// var p = document.getElementById("para");
// //console.log(p);
// p.style.color = "Blue";
// p.style.fontSize = "24px";


// Creating Element - createElement

// let newEle = document.createElement("p");
// newEle.innerText = "New Paragraph";
// document.body.appendChild(newEle);

// //removeing Element - removeChild

// let p = document.getElementById("para");
// document.body.removeChild(p);


function clicked(){
console.log("You Clicked Me! this is old method!");
}



var button = document.getElementById("btn");
// console.log(button);
button.addEventListener("dblclick", function(){
    console.log("You clicked on new method");
    alert("you clicked on new method");
});



var div = document.getElementById("hoverDiv");
div.addEventListener("mouseover", function(){
    div.style.backgroundColor = "blue";
    console.log("BG Changed to Blue");
});
div.addEventListener("mouseout", function(){
    div.style.backgroundColor = "red";
    console.log("BG Changed to red");
});