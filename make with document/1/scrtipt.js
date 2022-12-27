//получение елементов со строницы урок 42    

//1)
const box = document.getElementById('box');
console.log(box);
// 2 категории 
// 1 существуют давно
// 2 и новые

const btns = document.getElementsByTagName('button');

console.log(btns[1]);

const circles = document.getElementsByClassName('circle');

console.log(circles);

//2) have +
// . єто класс обязательно нужно ставить
const hearts = document.querySelectorAll('.heart');

hearts.forEach(item =>{//item -каждый елемент 
    console.log(item);
});
// console.log(hearts);

const oneHeart = document.querySelector('.heart');//один елемент,или первый
console.log(oneHeart); 