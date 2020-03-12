"Use strict"

let menuItems = document.querySelectorAll(".menu .menu-item"),
    menu = document.querySelector(".menu"),
    title = document.getElementById("title"),
    adv = document.querySelector(".adv"),
    column = document.getElementsByClassName("column"),
    questionsElement = document.getElementById("prompt"),
    menuItem = document.createElement("li"),
    question = prompt('Как вы относитесь к технике apple ?', '');

menu.insertBefore(menuItems[2], menuItems[1]); // Поменял местами пункты меню
document.body.style.background = "url(../img/apple_true.jpg) center no-repeat"; // Замена фона
title.textContent = "Мы продаем только подлинную технику Apple"; // Заменил текст;
column[1].removeChild(adv); // Удалил рекламу
menuItem.classList.add("menu-item");
menuItem.textContent = ("Пятый пункт");
menu.appendChild(menuItem);
questionsElement.innerHTML = `<h1>${question}</h1>`;




console.log(prompt);
/* console.log(menuItems);
console.log(title);
console.log(adv);
console.log(column);
console.log(question); */

/* console.log(tagNameMenu);
console.log(menuItem);
console.log(menuItem[0]);
console.log(menuItem[1]);
console.log(menuItem[2]);
console.log(menuItem[3]); */

