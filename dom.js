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

var p = document.getElementById("para");
console.log(p);
p.setAttribute("class", "dark");

console.log(p.getAttribute("class"));

p.removeAttribute("id");
console.log(p);

