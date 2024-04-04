/* Task #1*/

'use strict'; // Strict mode code

const categoriesArr = document.querySelectorAll(".item");       // Кількість категорій, їх назва та кількість                                                              
                                                                // елементів отримані за допомогою властивостей                                                              
const categoriesNumber = categoriesArr.length;                  // і методів DOM - елементів

console.log(`Number of categories: ${categoriesNumber}`);


// Дані за кожною категорією були отримані й виведені в консоль у тілі методу forEach()
categoriesArr.forEach((category) => {

    const categoryTitle = category.querySelector("h2").textContent;         
    console.log(`Category: ${categoryTitle}`);

    const elementsNumber = category.querySelectorAll("ul li").length;
    console.log(`Elements: ${elementsNumber}`);

});




