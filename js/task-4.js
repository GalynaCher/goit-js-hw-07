'use strict'; 

const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", (ev) => {   // Прослуховується подія submit

    ev.preventDefault();                         // Під час відправлення форми сторінка не перезавантажується

    const form = ev.currentTarget;

    const fieldEmailValue = form.elements.email.value.trim();
    const fieldPasswordValue = form.elements.password.value.trim();

    if (fieldEmailValue === "" || fieldPasswordValue === "") {

        alert("All form fields must be filled in"); // Якщо при сабміті у формі є незаповнені поля, виводиться alert

    } else {                                    // При сабміті в консоль виводиться об’єкт з двома властивостями, 
                                                // де ключі — це ім’я інпутів, а значення — відповідні значення 
        const loginValues = {                   // цих інпутів, очищені від пробілів по краях
            email: fieldEmailValue,
            password: fieldPasswordValue
        };
        
        console.log(loginValues); 

        form.reset();                           // Після сабміту елементи форми очищаються

     }
});




