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

const lines = 5;
let resault = '';

for(let i = 0;i <= lines;i++ ){
    for(let j = 0;j < lines - i;j++){
        resault += " ";
    }
    for(let j = 0;j < 2 * i + 1;j++){
        resault +="*";
        if (j === 3){
            break;
        }
        
        // if(j = 4){
        //     for(j = 2; j < 3;){
        //         resault +=" ";
        //     for(j = 2; j < 3;){
        //         resault +="("
        //     }
        //     }
        // }
    }
    resault +="\n";
}
console.log(resault);


//     *
//    ***
//   *****
//  *******
// *********
//    ***



const linec = 5;
let result = '';

for(let i = 0;i <= linec;i++){
   for(let j = 0;j < 25;j++){
      result +="*";
   }
   if (linec.length === 2){
    for(let k = 5;k < 6;k++);
    break;
   }
   result +="\n";
}
console.log(result);    

// **************************************   
// **************************************
// ***********     **
// ********** *   *
// **********  ***  
// **********
// **********
// **********
// **********