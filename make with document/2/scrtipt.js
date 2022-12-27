const box = document.getElementById('box'),
     btns = document.getElementsByTagName('button'),
     circles = document.getElementsByClassName('circle'),
     hearts = document.querySelectorAll('heart'),
     oneHeart = document.querySelector('.heart'),
     wrapper = document.querySelector('.wrapper');
    
box.style.backgroundColor = 'red';
box.style.width = '500px';

box.style.cssText = 'background-color:blue;witdh:500px'

btn[1].style.borderRadius = '100%';
circles[0].style.backgroundColor = 'red';

// for(let i = 1;1 < hearts.length;i++){
//      hearts[i].style.backgroundColor = 'blue';
// }

hearts.forEach(item =>{
     item.style.backgroundColor = 'blue';
});

const div = document.createElement('div');
const text = document.createTextNode('Тут був я');//используется редко 

div.classList.add('black');

document.body.append(div);//берём тег body и в самый конец добовляем div
document.querySelector('.wrapper').append(div);   

