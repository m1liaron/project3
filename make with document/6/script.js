//1 touchstart при косании
//2 touchmove  если палец при косании к елементу двигаеться 
//3 touchend   как только палец оторвался от елемента 
//4 touchenter когда ведём пальцем по екрану и при этом на наскакивам,наскальзываем на какой-то елемент на который повешено это событие
//5 touchleave когда палец продолжил скользить и ушёл за предел елемента 
//6 touchcancel точка соприкосновения больше не регестрируется на поверхности

window.addEventListener('DOMContentLoaded',() =>{
 const box = document.querySelector('.box');

 box.addEventListener('touchstart',(e) =>{
     e.preventDefault();
     console.log('start');
 });
 box.addEventListener('touchmove',(e) =>{
    e.preventDefault();
    console.log('Move');
});
box.addEventListener('touchend',(e) =>{
    e.preventDefault();
    console.log('End');
});
});

//3 главных свойства при работе с сенсорными устройставми
//1. touches  свойство выдаёт список всех  пальцев которые сейчас взаимодействуют с екраном
//2.targetTouches свойство выдаёт список всех  пальцев которые сейчас взаимодействуют с етим елементом 
//3.changedTouches свойство выдаёт список всех  пальцев которые сейчас участвуют в текущем событии