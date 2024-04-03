
const hex = document.querySelector(".hexCode");
const btn = document.querySelector(".generate");
const body = document.querySelector("body");

const randomColor = Math.random().toString(16).sub;
console.log(randomColor);


const generateHexColor = () => {
    const randomColor = Math.random().toString(16)
    body.style.backgroundColor = "#" + randomColor
    hex.innerHTML = "#" + randomColor
}

btn.addEventListener("click", generateHexColor)
btn.addEventListener("mousewheel", generateHexColor)