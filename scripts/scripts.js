//Declaración de variables para usar y no escribir codigo de más.
let numberOfSquares = 6;
let colors = generateRandomColors(numberOfSquares);
let pickedColor = pickColor();
let divCuadrados = document.querySelectorAll(".square");
let h1BC = document.querySelector("#h1");
let colorClicked;
let spanRgb = document.querySelector("#colorDisplay");
let spanMessage = document.querySelector("#message");
let msjCorrecto = "¡Correcto!";
let msjIncorrecto = "Intentalo nuevamente";
let resetBtn = document.querySelector("#reset");
let hardBtn = document.querySelector("#hard");
let easyBtn = document.querySelector("#easy");
let buttonsDif = document.querySelectorAll(".difficulty-btn");
spanRgb.textContent = pickedColor;

//Botones: Hard Button setea el funcionamineto del juego en dificil
hardBtn.addEventListener("click", function () {
    numberOfSquares = 6;
    colors = generateRandomColors(numberOfSquares);
    hardBtn.classList.toggle("selected");
    easyBtn.classList.remove("selected");
    pickedColor = pickColor();
    hardCuadrados();
    reset();
})
//Easy Button setea el funcionamineto del juego en facil
easyBtn.addEventListener("click", function () {
    numberOfSquares = 3;
    colors = generateRandomColors(numberOfSquares);
    easyBtn.classList.toggle("selected");
    hardBtn.classList.remove("selected");
    pickedColor = pickColor();
    ocultarCuadrados();
    reset()
})
// Reset Button: resetea el juego
resetBtn.addEventListener("click", function () {
    reset();
})

// Iteración del array colors
for (let i = 0; i < colors.length; i++) {
    //dandole color a los cuadrados segun el elemneto del array correspondiente:
    divCuadrados[i].style.backgroundColor = colors[i];
    divCuadrados[i].addEventListener("click", function () {
        colorClicked = divCuadrados[i].style.backgroundColor = colors[i];
        //Si el color clickeado es correcto asignamos la respueta del juego:
        if (colorClicked === pickedColor) {
            resetBtn.textContent = "Play Again?";
            spanMessage.textContent = msjCorrecto;
            h1BC.style.backgroundColor = pickedColor;
            changeColors(pickedColor);
        }
        //Si el color clickeado es incorrecto asignamos la respuesta incorrecta:
        else {
            spanMessage.textContent = msjIncorrecto;
            divCuadrados[i].style.backgroundColor = "#232323";
        }
    })
}


//Tomamos los cuadrados y le damos el color del RGB ganador, uso esta funcion cuando el usuario acierta el color.
function changeColors(color) {
    let squares = document.querySelectorAll('.square');
    squares.forEach(function (square) {
        square.style.backgroundColor = pickedColor;
    });
}
//Funcion para tomar aleatoriamente un color rgb del array generado:
function pickColor() {
    let randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
}
//Funcion para generar mediante template literals colores rgbs que luego seran psuheados al array colors.
function randomColor() {
    let num1 = Math.floor(Math.random() * 256);
    let num2 = Math.floor(Math.random() * 256);
    let num3 = Math.floor(Math.random() * 256);
    let rgb = `rgb(${num1}, ${num2}, ${num3})`;
    return rgb;
}
// funcion para generar colores en el array aleatoriamente usando previamente la funcion randomColor()
function generateRandomColors(num) {
    colorsArray = []
    for (let i = 0; i < num; i++) {
        let color = randomColor()
        colorsArray.push(color);
    }
    return colorsArray
}
//funcion para resetear los valores del juego al usar botones.
function reset() {
    colors = generateRandomColors(numberOfSquares);
    pickedColor = pickColor();
    resetBtn.textContent = "Nuevos Colores";
    spanRgb.textContent = pickedColor;
    h1BC.style.backgroundColor = "#232323";
    spanMessage.textContent = "";

    for (let i = 0; i < colors.length; i++) {

        divCuadrados[i].style.backgroundColor = colors[i];
        divCuadrados[i].addEventListener("click", function () {

            colorClicked = divCuadrados[i].style.backgroundColor = colors[i];

            if (colorClicked === pickedColor) {
                resetBtn.textContent = "Play Again?";
                spanMessage.textContent = msjCorrecto;
                h1BC.style.backgroundColor = pickedColor;
                changeColors(pickedColor);
            }
            else {
                spanMessage.textContent = msjIncorrecto;
                divCuadrados[i].style.backgroundColor = "#232323";
            }
        })
    }
}
//funcion utilizada para ocultar los cuadrados en modo "Facil".
function ocultarCuadrados() {
    for (let i = 3; i < divCuadrados.length; i++) {
        divCuadrados[i].style.display = "none";
        divCuadrados[i].style.backgroundColor = colors[i];


        divCuadrados[i].addEventListener("click", function () {
            colorClicked = divCuadrados[i].style.backgroundColor = colors[i];

            if (colorClicked === pickedColor) {
                resetBtn.textContent = "Play Again?"
                spanMessage.textContent = msjCorrecto;
                h1BC.style.backgroundColor = pickedColor;
                changeColors(pickedColor);
            }
            else {
                spanMessage.textContent = msjIncorrecto;
                divCuadrados[i].style.backgroundColor = "#232323";
            }
        })
    }
}
//funcion utilizada para volver a colocar 6 cuadrados de colores en el modo "dificil".
function hardCuadrados() {
    for (let i = 3; i < divCuadrados.length; i++) {
        divCuadrados[i].style.display = "block";
        divCuadrados[i].style.backgroundColor = colors[i];

        divCuadrados[i].addEventListener("click", function () {
            colorClicked = divCuadrados[i].style.backgroundColor = colors[i];

            if (colorClicked === pickedColor) {
                resetBtn.textContent = "Play Again?";
                spanMessage.textContent = msjCorrecto;
                h1BC.style.backgroundColor = pickedColor;
                changeColors(pickedColor);
            }
            else {
                spanMessage.textContent = msjIncorrecto;
                divCuadrados[i].style.backgroundColor = "#232323";
            }
        })
    }
}
