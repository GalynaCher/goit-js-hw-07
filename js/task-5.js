'use strict'; 

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const changeColorBtn = document.querySelector("button.change-color");
const changeColorTxt = document.querySelector("span.color");

changeColorBtn.addEventListener("click", ev => {

  const newColor = getRandomHexColor();     // При кожному кліку фон <body> зафарбовується новим рандомним кольором
  const body = document.body;

  body.style.backgroundColor = newColor;    // Фон на <body> задається тільки після кліку на button.change-color
  changeColorTxt.textContent = newColor;    // На <body> і span.color значення одного й того самого кольору

});