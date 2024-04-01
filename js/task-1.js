/* Task #1*/

'use strict'; // Strict mode code

const CategoriesArr = document.querySelectorAll(".item");       // Кількість категорій, їх назва та кількість                                                              
                                                                // елементів отримані за допомогою властивостей                                                              
const CategoriesNumber = CategoriesArr.length;                  // і методів DOM - елементів

console.log(`Number of categories: ${CategoriesNumber}`);


// Дані за кожною категорією були отримані й виведені в консоль у тілі методу forEach()
CategoriesArr.forEach((category) => {

    const CategoryTitle = category.querySelector("h2").textContent;         
    console.log(`Category: ${CategoryTitle}`);

    const ElementsNumber = category.querySelectorAll(".item ul li").length;
    console.log(`Elements: ${ElementsNumber}`);

});




