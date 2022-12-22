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

// object, dec object

const options = {
    name:'test',
    width:1024,
    height:1024,
    colors:{
      border:'black',
      bg:'red'
    },
    makeTest:function(){
        console.log("Test");
    }

};
options.makeTest();

const {border, bg} = options.colors;
console.log(border);

const cupboard = {
   short:'green',
   skirt:'red',
   Tshirt:'white',
   box:{
    sneakers:'white-red',
    
   }
}
// console.log(object.keys(options).length);


// let counter = 0;
// for (let key in  options){
//         if (typeof(options[key]) === 'object'){
//             for (let i in options[key]) {
//                 console.log(`Свойствро ${i},имеет значение ${options[key][i]} `)
//                counter++;
//             }
//         }else{
//             console.log(`Свойствро ${key},имеет значение ${options[key]} `)
//         counter++;
//         }
// }
// console.log(counter); 

//array and pseudo array 
 
const arr = [2,13,26,8,10]; 
arr.sort(compareNum); 
console.log(); 
 
function compareNum(a,b){ 
    return a - b; 
} 
 
// arr[99] = 0; 
// console.log(arr.length) 
// arr.pop(); 
// arr.push(10);    
 
arr.forEach(function(item,i,arr){ 
console.log(`${i}: ${item} внутри массива ${arr}`); 
}); 
 
 
// for (let i = 0;i < arr.length;i++){ 
//     console.log(arr[i]);  
// } 
 
 for (let value of arr){ 
     console.log(value) 
 } 
 const str = promt("",""); 
 const products = str.split(", "); 
 products.sort(); 
 console.log(products.join('; '));

//Передача по сыллке или по значению,Spread оператор(ES6-ES9)

 let a = 5,
     b = a;

b = b + 5;
console.log(b);
console.log(a);

const obj = {
    a:b,
    b:1
};
// const copy = obj; передаёт сыллку

// copy.a = 10;

// console.log(copy);
// console.log(obj); 

function copy (mainObj) {
   let objCopy = {};

   let key;
   for(key in mainObj){
    objCopy[key] = mainObj[key];
   }

   return objCopy;
}

const numbers = {
    a: 2,
    b:5,
    c:{
        x:7,
        y:4
    }
};

const newNumbers = copy(numbers);

newNumbers.a = 10;
newNumbers.c.x = 10;


console.log(newNumbers);
console.log(numbers);   

const add = {
  d: 17,
  e: 20
};

console.log(Object.assign({}, add));

clone.d = 20;

// console.log(add);
// console.log(clone);

// frequent

const oldArray = ['a','b','c'];
const newArray = oldArray.slice();

newArray[1] ='bhrhehuejipbn';
console.log(newArray);
console.log(oldArray);
//4 способ spread использование оператора разворота ES6 появился для массивов ES8 для объектов
//он разворачивает структуру и превращает её в набор каких-то данных
const video =['youtube','rezka','rutube'],
      blogs = ['facebook','wordpress','leivejournal'],
      internet = [...video,...blogs,'instagramm','telegramme'];
      console.log(internet);        


function log(a,b,c){
    console.log(a);
    console.log(b);
    console.log(c);
}
const gum = [2,5,7];

log(...gum)
//5 способ создание поверхностных копий объектов и нам поможет spread
//пример 
const array = ["a","b"];
const newArrays = [...array];// теперь тут копия массива который выше 

const q = {
    one:1,
    two:2
};
const newObj = {...q};

console.log(newObj);

