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

//conditions {
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
//}

// cycles

let pum = 50;


// while (pum< 55){
//     console.log(pum)
//     pum++;
// }; 

// do {
//     console.log(pum)
//     pum++;
// }

while(pum < 55);

for (let i = 1;i < 10; i++) {
    if ( i === 6){
        // break;
        continue;
    }
    console.log(i)
}


for (let i =0; i < 3; i++){
    console.log(i);
    for (let j =0; j < 3; j++){
        console.log(j);
        
    }
}

// *
// **
// ***
// ****
// *****
// ******
// *******

let result = '';
const length = 7;

for(let i = 1; i < length; i++){
     
    for(let j =1; j < i; j++){
        result += '*';
    }

    result += '\n'
}
 
console.log(result);

first: for (let i =0; i < 3; i++){
    console.log(`First level: ${i}`);
    for (let j =0; j < 3; j++){
        console.log(`Second level: ${j}`);
        for (let k =0; k < 3; k++){
            if (k === 2) break first;
            console.log(`First level:${k}`);
            
        }    
    }
}

//practice 3

const personalMovieDB = { 
    count: 0, 
    movies: {}, 
    actors: {}, 
    genres: [], 
    privat: false, 
    start: function() { 
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', ''); 

        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) { 
            personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', ''); 
        } 
    }, 
    rememberMyFilms:function() { 
        for (let i = 0; i < 2; i++) { 
            const a = prompt('Один из последних просмотренных фильмов?', ''), 
                  b = prompt('На сколько оцените его?', ''); 
         
            if (a != null && b != null && a != '' && b != '' && a.length < 50) { 
                personalMovieDB.movies[a] = b; 
                console.log('done'); 
            } else { 
                console.log('error'); 
                i--; 
            } 
        } 
    }, 
    detectPersonalLevel:function() { 
        if (personalMovieDB.count < 10) { 
            console.log("Просмотрено довольно мало фильмов"); 
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) { 
            console.log("Вы классический зритель"); 
        } else if (personalMovieDB.count >= 30) { 
            console.log("Вы киноман"); 
        } else { 
            console.log("Произошла ошибка"); 
        } 
    }, 
    showMyDB:function (hidden) { 
        if (!hidden) { 
            console.log(personalMovieDB); 
        } 
    }, 
    toggleVisibleMyDB:function() { 
        if(personalMovieDB.privat) { 
            personalMovieDB.privat = false; 
        }else{ 
            personalMovieDB.privat = true; 
        } 
    }, 
    writeYourGenres:function() { 
        for (let i = 1; i <= 3; i++) { 
            // let genre = prompt(`Ваш любимый жанр под номером ${i}`); 
            // if(genre === '' || genre === null ){ 
            //     consol.log('Вы ввели не корректные данные ') 
            //     i--; 
            // }else{ 
            //     personalMovieDB.genres[i - 1] = genre;  
            // } 
            let genres = prompt(`Введите ваши любимые жанры через запятую`).toLocaleLowerCase; 
            if(genres === '' || genre === null ){ 
                consol.log('Вы ввели не корректные данные ') 
                i--; 
            }else{ 
                personalMovieDB.genres = genres.split(', ');  
                personalMovieDb.sort(); 
            } 
        } 
        personalMovieDB.genres.forEach((item,i) =>{//item єто жанр в которм мы перебираем i это номер по порядку 
         console.log(`Любимый жанр${i + 1} - это ${item}`); 
        }); 
    } 
};

// задачи с собеседования на понимание основа .41
//1)
let x = 5;alert(x++);
//*5 */
let y = 5;alert(++x);
//*6 */
//2)
// [] + false - null + true
console.log(typeof([] + false)) //*false*(string)
console.log([] + false - null + true) //*NaN*

//3)
let d = 1; 
let c = y = 2; //с право на лево
alert(x); 
//4)
console.log([] + 1 + 2); //*12*
//5)
alert("1"[0]);//*1*
//6)
console.log(2 && 1 && null && 0 && undefined);//*null*
//7)
console.log(!!(a &&  b ) === (a && b));
//8)
           //3
alert(null || 2 & 3 || 4);
//*3* */
//9)
const a = [1,2,3];
const b = [1,2,3];

console.log(a === b);
//10)
alert(+"Infinity")
//11)
console.log("Ежик" > "яблоко");
//12)
console.log(0 || "" || 2 || undefined || true || false);