"use strict"
const number0fFilms = prompt('Скільки фільмів ви вже продивилися?','');

const personalMovieDb = {
   count: number0fFilms,
   movies:{},
   actors:{},
   genres:[],
   privat:false
};


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

function showFirstMessage(text){
   console.log(text);
   let num = 10;
   console.log(num);
}
showFirstMessage("Hello World!");
console.log(num);

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