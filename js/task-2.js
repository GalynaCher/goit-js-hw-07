'use strict';

const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  }
];

const gallery = document.querySelector(".gallery");

gallery.style.display = "inline-flex";

const markup = images
  .map((image) => `<li class="gallery-item" style="width: 360px; height: 300px; list-style-type: none; margin-right: 24px;">
                    <img style="width: 100%; height: 100%; object-fit: cover;" src = ${image.url} alt = "${image.alt}"/></li>`)
  .join("");

gallery.insertAdjacentHTML("afterbegin", markup);  


// Не зрозуміла з завдання чи треба створити вручну css файл і додати в нього стилі для images,
// або треба додати стилі через атрибут style в скрипті? 