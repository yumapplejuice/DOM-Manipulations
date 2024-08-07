const container = document.querySelector("#container");
const para = document.createElement("p");
const hea = document.createElement("h3");
const aldiv = document.createElement("div");
const hea1 = document.createElement("div");
const para1 = document.createElement("p");


para.style.color = "red";
para.textContent = "Hey, I'm red!"

hea.style.color = "blue";
hea.textContent = "I'm a blue h3!";

hea1.textContent = "I'm in a div"

para1.textContent = "ME TOO!"
aldiv.style.cssText = "border: black 1px solid; background-color:pink";

container.append(para)
container.append(hea)
aldiv.appendChild(hea1)
aldiv.appendChild(para1)
container.append(aldiv)

function alertFunction() {
    alert("YAY! YOU DID IT!")
}

const btn = document.querySelector("#btn");
btn.addEventListener("click", function (e){
    e.target.style.background = "blue";
});

