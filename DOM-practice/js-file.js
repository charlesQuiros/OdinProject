const container = document.querySelector("#container");

const p = document.createElement("p");
const h3 = document.createElement("h3");
const content = document.createElement("div");
const h1 = document.createElement("h1");
const contentP = document.createElement("p");

p.style.color = "red";
p.textContent = "Hey I'm red!";

h3.style.color = "blue";
h3.textContent = `I'm a blue h3!`;

content.setAttribute("style", "border: black; background-color: pink");

// content.style.border = "black";
// content.style.backgroundColor = "pink";

content.appendChild(h1);
content.appendChild(contentP);

h1.textContent = `I'm in a div`;
contentP.textContent = `ME TOO!`;

container.appendChild(p);
container.appendChild(h3);
container.appendChild(content);

const btn = document.querySelector("#btn");
btn.addEventListener("click", (e) => {
  e.target.style.background = "blue";
});
