/* Task #3*/

'use strict'; 

const textInput = document.querySelector("input#name-input");
const output = document.querySelector("span#name-output");

textInput.addEventListener("input", (ev) => {          // На елементі input#name-input прослуховується подія input

    const outputValue = ev.currentTarget.value.trim(); // Значення в інпуті очищене від пробілів по краях

    if (outputValue === "") {
        output.textContent = "Anonymous";   // Якщо інпут порожній або містить лише пробіли, то замість імені 
    } else {                                // у спан має підставлятися рядок "Anonymous"
        output.textContent = outputValue;   // Під час набору тексту в інпуті його поточне значення 
    }                                       // підставляється в span#name-output як ім’я для привітання
        
});