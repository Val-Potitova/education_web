// DOM

// // 1 ex
// const elAttr = 
//     document.querySelectorAll('[data-say-hi]');
// console.log(elAttr);
// // .getAttribute('data-say-hi')
// console.log(elAttr[0].getAttribute("data-say-hi"));

// // 2 ex
// const liColl = document.querySelectorAll('li');
// console.log(liColl);
// let elYonchi
// for (let el of liColl) {
//     if (el.textContent == "Йончи") {
//         elYonchi = el;
//     }
// }
// console.log(elYonchi);

// // 3 ex
// const likeColl = document.querySelectorAll('.like');
// console.log(likeColl);

// // 4 ex
// const listColl = document.querySelector('ul');
// console.log(listColl);
// listColl.insertAdjacentHTML(
// 	'beforeend',
// 	`<li>Текст</li>`
// );



// SIZE SCROLL COORDINATES

// const mainElement = document.documentElement;
// let widthScrollLine = mainElement.clientWidth - document.body.offsetWidth
// console.log(widthScrollLine)

// setTimeout(scrollBy(0, 100), 3000);

// function setScrollBy() {
//     window.scrollBy(0, 50);
//     const windowScrollTop = window.pageYOffset;
//     console.log(windowScrollTop);
// }
// setTimeout(setScrollBy(), 1500);

// window.scrollBy(0, 100);

/*
const item = document.querySelector('.like');
const getItemTopCoord = item.getBoundingClientRect();
const getItemTopDocumentCoord = getItemTopCoord + window.pageYOffset;
console.log(getItemTopCoord);
console.log(getItemTopDocumentCoord);

const itemTwo = document.querySelector('.like subscribe');
const getItemTopCoordTwo = item.getBoundingClientRect().top;
const getItemTopDocumentCoordTwo = getItemTopCoordTwo + window.pageYOffset;
console.log(getItemTopCoordTwo);
console.log(getItemTopDocumentCoordTwo);
*/



/*
// Задача №1.
Узнать ширину полосы прокрутки

// Задача №2.
Заставьте браузер прокрутиться на 100px сверху
спустя секунду после открытия страницы

// Задача №3.
Получите координаты любых трех элементов на странице
*/