'use strict';

let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


function rememberMyFilms() {
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
}

rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log("Просмотрено довольно мало фильмов");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log("Вы классический зритель");
    } else if (personalMovieDB.count >= 30) {
        console.log("Вы киноман");
    } else {
        console.log("Произошла ошибка");
    }
}

detectPersonalLevel();

function showMyDB (hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.privat);

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
    }
}

writeYourGenres();

// №3
function fourthTask() {
   let i = 2;

   while (i <= 16) {
       if (i % 2 === 0) {
           i++;
           continue;
       } else {
           console.log(i);
       }
       i++;
   }
}
fourthTask()

function fifthTask() {
   const arrayOfNumbers = [];

   for (let i = 5;i < 11; i++) {
   arrayOfNumbers[i - 5] = i;
   }
   console.log(arrayOfNumbers);
   return arrayOfNumbers;
}
fifthTask()
for (let i = 5;i < 11; i++) {

   console.log(i)

}
//№4
function firstTask() {
   // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
   const arr = [3, 5, 8, 16, 20, 23, 50];
   const result = [];

   for(let i = 0;i < arr.length;i++){
     result[i] = arr[i];
   }
   
   console.log(result);
   return result;
}
firstTask()

//

function secondTask() {
   const data = [5, 10, 'Shopping', 20, 'Homework'];

   for (let i = 0; i < data.length; i++) {
       if (typeof(data[i]) === 'number') {
           data[i] = data[i] * 2;
       } else if (typeof(data[i]) === 'string') {
           data[i] = `${data[i]} - done`;
       }
   }

   console.log(data);
   return data;
}

secondTask();


//
function thirdTask() {
   const data = [5, 10, 'Shopping', 20, 'Homework'];
   const result = [];

   for(let i = 1;i <= data.length;i++){
     result[i - 1] = data[data.length - i];
   }
   
   console.log(result);
   return result;
}
thirdTask()

//№5


//     *
//    ***
//   *****
//  *******
const lines = 5;
let result = '';

for(let i = 0;i <= lines;i++){
   for(let j = 0;j < lines - i;j++){
     result +=" ";
     
   }
   for(let j = 0;j < 2 * i + 1;j++){
      result +="*";
   }
   result +="\n"
}
console.log(result);


//№6
 //1.

 function sayHello(name) {
   return `Привет, ${name}!`;
}

sayHello('Alex');

//2.

function returnNeighboringNumbers(num){
   return[num - 1, num, num + 1 ];
}
returnNeighboringNumbers(5);

//3.

function getMathResult(num, times) {
   if (typeof(times) !== 'number' || times <= 0) {
       return num;
   }

   let str = '';

   for (let i = 1; i <= times; i++) {
       if (i === times) {
           str += `${num * i}`;
           // Тут без черточек в конце
       } else {
           str += `${num * i}---`;
           // Это тоже самое, что и
           // str = str + num * i + "---"
       }
   }

   return str;
}

getMathResult(10, 5);



              
let str = "teSt";
// console.log(str[2]);      

console.log(str.toLowerCase());
console.log(str);               

               
const fruit = "Some fruit";
console.log(fruit.indexOf("fruit"));

const logg = "Hello World!"
// console.log(logg.slice(6,11));

// console.log(logg.substring(6,11));

console.log(logg.substr(6,5));

const num = 13.4;
console.log(Math.round(num));

const test = "12.2px";
console.log(parseInt(test));
console.log(parseFloat(test));


//N7

//1
function calculateVolumeAndArea(length) {
   if (typeof (length) !== 'number' || length < 0 || !Number.isInteger(length)) {
       return "При вычислении произошла ошибка";
   }

   let volume = 0,
       area = 0;

   volume = length * length * length;
   area = 6 * (length * length);

   return `Объем куба: ${volume}, площадь всей поверхности: ${area}`;
}

calculateVolumeAndArea(5);
calculateVolumeAndArea(15);
calculateVolumeAndArea(15.5);

//2.
function getCoupeNumber(seatNumber){
 if (typeof(seatNumber) !== 'number' || !Number.isInteger(seatNumber)){
   return "Ошибка. Проверьте правильность введенного номера места" ;
 }
 if(seatNumber === 3 || seatNumber  >=36 ){
   return "Таких мест в вагоне не существует";
 }
 return Math.ceil(seatNumber / 4);
}

getCoupeNumber(33);


