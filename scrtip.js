"use strict"

if (4 == 9){
    console.log('Ok!')
}else{
console.log('Eror');
}



// if(num <49){
//     console.log('Eror');
// }else if (num >100){
//      console.log('Много');
// }else{
//     console.log('Ok!');
// }

// (num === 50) ? console.log('Ok!') : console.log('Eror');

const num = "50";

//switch

switch(num){
    case 49:
        console.log('Неверно');
        break;
        case 100:
        console.log('Неверно');
        break;
        case '50':
            console.log('в точку'  );
        break;
    default:
        console.log('Не сегодня ');
        break;
}


// const hamburger = 5;
// const fries = 0;

// if (hamburger && fries) {
//     console.log('Я сыт!');
// }

//условия
// const hamburger = 3;
// const fries = 1;
// const cola = 0;

// console.log(hamburger === 3 && cola && fries)
// // если вначале не правда то и запинается в начале а если если правда то он возврощет последние аргумент

// console.log(1 && 0);
// console.log(1 && 5);
// console.log(null && 5);
// console.log(1 && 'gfdgfdgdf');
 



// if (hamburger === 3 && cola === 1 && fries) {
//     console.log('Все сыты!');
// }else{
//     console.log('Мы уходим!');
// }
const hamburger = 3;
const fries = 3;
const cola = 0;
const nuggets = 2;

if (hamburger ===3 && cola ===2 || fries ===3 && nuggets) {
    console.log('Все довольны!');
}else{
    console.log('Мы уходим!');
}

console.log(hamburger ===3 && (cola ===2 || fries) ===3 && nuggets)

let johnReport,alexReport, samReport, mariaeport = 'done';
console.log(johnReport|| alexReport || samReport || mariaeport) 

console.log(!0);


 
console.log( 5 === 5 && 3 > 1 || 5)


