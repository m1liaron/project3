"use strict"
const number0fFilms = prompt('Скільки фільмів ви вже продивилися?','');

const personalMovieDb = {
   count: number0fFilms,
   movies:{},
   actors:{},
   genres:[],
   privat:false
};

const a = prompt('Один из последних просмотренных фильмов?',''),
      b = prompt('На сколько оцените его?', ''),
      c = prompt('Один из последних просмотренных фильмов?',''),
      d = prompt('На сколько оцените его?', '');

personalMovieDb.movies[a] = b;
personalMovieDb.movies[c] = d;


console.log(personalMovieDb);

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




while (i <= 16) {
   if (i % 2 === 0) {
       i++;
       continue;
   } else {
       console.log(i);
   }
   i++;
}


   //   while(j <=11){
   //    if (j % '**'=== 1) {
   //    i++;
   //    continue;
   //    }else{
   //       console.log(j);
   //    }
   //   }

   //   if(j === '**'){
   //    continue;
   //   }
   //   for(let k = 4;k >= j;k--){
   //    result +=''; 
   //  } 