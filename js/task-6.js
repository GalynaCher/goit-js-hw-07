function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const createBtn   = document.querySelector("#controls [data-create]");
const destroyBtn  = document.querySelector("#controls [data-destroy]");
const inputField  = document.querySelector("#controls input");
const boxes       = document.querySelector("#boxes");

function createBoxes(amount) { 
      let blockSize = 30;
      let boxesMarkup = "";

  for (let i = 1; i <= amount; i++){ 
        // квадрати в div#boxes різнокольорові і мають фон випадкового кольору
        boxesMarkup += `<div style="width: ${blockSize}px; height: ${blockSize}px; margin-top: 8px;
                          background-color: ${getRandomHexColor()};"></div>`; 
        
        blockSize += 10;    // кожен наступний квадрат на 10px вищий і ширший від попереднього
      }      
      return boxesMarkup;
};


createBtn.addEventListener("click", ev => {
  const divNumbers = inputField.value;

  if (divNumbers > 0 && divNumbers <= 100) {    // якщо в input значення <> 1-100, нічого не відбувається
    boxes.innerHTML = createBoxes(divNumbers);  // додається кількість різнокольорових квадратів яка = input
  }

  inputField.value = "";                        // Значення input очищається
});


destroyBtn.addEventListener("click", ev => {
  boxes.innerHTML = "";                         // усі квадрати з div#boxes мають видалятися
  inputField.value = "";                        // Значення input очищається
});

