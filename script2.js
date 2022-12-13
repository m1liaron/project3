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