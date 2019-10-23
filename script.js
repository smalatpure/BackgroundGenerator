// JavaScript source code
var color1 = document.getElementById("color1");
var color2 = document.getElementById("color2");
var css = document.querySelector("h3");
var body = document.getElementById("gradient");

function setGradient() {
    body.style.background = "linear-gradient(to right, "
        + color1.value
        + ", "
        + color2.value
        + ")";

    css.textContent = body.style.background;
}

window.addEventListener("load",setGradient);

function setRandomColors() {
    var randomColor1 = getRandomColor();
    var randomColor2 = getRandomColor();

    while (randomColor2 == randomColor1) {
        randomColor2 = getRandomColor();
    }

    color1.value = randomColor1;
    color2.value = randomColor2;

    setGradient();
}

function getRandomColor() {
    return "#000000".replace(/0/g, function () { return (~~(Math.random() * 16)).toString(16); });
}
