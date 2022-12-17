"use strict"
let number0fFilms;   

// practice 3.
function start(){
    number0fFilms = +prompt('Скільки фільмів ви вже продивилися?','');

    while (number0fFilms == '' || number0fFilms == null || isNaN(number0fFilms)){
      number0fFilms = +prompt('Скільки фільмів ви вже продивилися?','');
    }
}
const personalMovieDb = {
   count: number0fFilms,
   movies:{},
   actors:{},
   genres:[],
   privat:false
};

// practice 2  conditions and cycles{
for(let i = 0;i < 2;i++){
    const  a = prompt('Один из последних просмотренных фильмов?',''),
      b = prompt('На сколько оцените его?', '');

      if (a != null & b != null && a != '' && b != '' && a.length < 50){
        personalMovieDb.movies[a] = b;
        console.log('done');
      } else{
        console.log('error ');
        i--;
      }
}

if(personalMovieDb.count < 10){
    console.log("Просмотренно довольно мало фильмов");
}else if(personalMovieDb.count >= 10 && personalMovieDb.count < 30){
    console.log("вы класичесский зритель")
}else if(personalMovieDb.count >= 30){;
    console.log("Вы киноман");
}else if(a != null & b != null ){
    console.log("true");
}else if (personalMovieDb.count != Number){
    console.log("Произошла ошибка напишите пожалуста цифрами")
}
console.log(personalMovieDb);


let num = 20;
//{

// 1 lessons function {

function showFirstMessage(text){
   console.log(text);
   let num = 10;
   console.log(num);
}
showFirstMessage("Hello World!");
console.log(num);q

//++//
function calc(a,b){
    return(a + b);
}

console.log(calc(4,3));
console.log(calc(5,6));
console.log(calc(10,6));

//
function ret(){
    let num = 50;
    return num;
}

const anotherNum = ret();
cons.log(anotherNum);

//

const logger = function(){
console.log("Hello");

};
logger();

//
const calc = (a,b) =>  a + b;

const calc = (a,b) =>  {
    console.log('1');
    return a + b;
};
// }
// 2 lessons function
// translate money

 const usdCurr = 28;
 const discount = 0.9;

 function convert(amount, curr){
     return curr * amount;
 }

 function promotion(result){
     console.log(result * discount);
 }
const res = convert(500, usdCurr)

promotion(res);

// 3 lessons function return
 function test(){
    for(let i = 0;i < 5;i++){
        console.log(i);
        if(i === 3 )return
    }
    console.log('Done');
 }
 test();

 function doNothing(){}
 console.log(doNothing() === undefined);

// const usdCurr = 28;
// const eurCurr = 32;


// function convert(amount, curr){
//     console.log(curr * amount);
// }

// convert(500, usdCurr); 
// convert(500, eurCurr);  

//lessons callback

function first(){
    //Do
    setTimeout(function () {
        console.log(1);
    },500);
}

function second(){
    console.log(2);     
}

first();
second();

function  learnJS(lang, callback){
  console.log(`Я учу:${lang}`);
  callback();
}

function done() {
    console.log('Я прошёл этот урок!');  
}

learnJS('JavaScript',done);