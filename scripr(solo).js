"use strict"

function Interpolation (t,A){
    var mid,low = 0,high = A.length-1;
    while (A[low] < t){
        mid = low = Math.floor((t - A[low])*(high-low)/(A[high])-A[low]);
        if(A[mid] < t) low = mid+1;
        else if (A[mid] > t) high = mid -1;
        else return mid;
    }
    if (A[low === t] ) return low;
    else if (A[high] === t) return high;
    else return -1;
    
}



const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start:function() {
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
    
        while (personalMovieDB.count == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
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
    
    toggleVisibleMyDB:function(){
        if(personalMovieDB.privat){
 personalMovieDB.privat = true;
        }else{
            personalMovieDB.privat = false;
        }
    },
   
    showMyDB:function (hidden) {
        for (let i = 1; i <= 3; i++) {
            let genre = prompt(`Ваш любимый жанр под номером ${i}`);
        }
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },
    writeYourGenres:function() { 
        let genre = 0;
        if(genre === null || genre === ' '){
            console.log('Сообщение введенно не коректнно');
            i--;
        }
      personalMovieDB.genres.forEach((item,i) =>{
        console.log(`Любимый жанр${i = 1} это${item}`)
      })
    }
};