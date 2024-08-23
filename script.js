// // let div = document.querySelector("div");

// // div.style.backgroundColor = "green";
// // div.style.backgroundColor = "purple";
// // div.style.visibility = "hidden";

// // div.style.fontSize = "10px";

// // div.innerText = "Hello!";

// let newBtn = document.createElement("button");
// newBtn.innerText = "Click me!";
// console.log(newBtn);


// let p = document.querySelector("p");
// p.after(newBtn);

// let newHeading = document.createElement("h1");
// newHeading.innerHTML = " <i> Hi, i am new! </i>";

// document.querySelector("body").prepend(newHeading);

// let para = document.querySelector("p");
// para.remove();

let newwBtn = document.createElement("button");
newwBtn.innerText = "Click Me!";

newwBtn.style.backgroundColor = "red";
newwBtn.style.color = "white";

document.querySelector("body").prepend(newwBtn);

let para = document.querySelector("p");

para.classList.add("newClass");