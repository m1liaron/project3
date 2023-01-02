const box = document.getElementById('box'),
     btns = document.getElementsByTagName('button'),
     circles = document.getElementsByClassName('circle'),
     wrapper = document.querySelector('.wrapper'),
     hearts = wrapper.querySelectorAll('.heart'),//эти переменные пойду только те елементы которые подойдут по определённому селектору и находятся только в нутри елемента wrapper
     oneHeart = wrapper.querySelector('.heart');
    
// box.style.backgroundColor = 'blue';
// box.style.width = '500px';

box.style.cssText = 'background-color:blue;width:500px';
// box.style.cssText = 'background-color:blue;width:${num}x';

btns[1].style.borderRadius = '100%';
circles[0].style.backgroundColor = 'red';

// for(let i = 0;i < hearts.length;i++){
//      hearts[i].style.backgroundColor = 'blue';
// }

hearts.forEach(item =>{
     item.style.backgroundColor = 'blue';
});

const div = document.createElement('div');
// const text = document.createTextNode('Тут був я');//используется редко 

div.classList.add('black'); 

wrapper.append(div);
// document.body.append(div);//берём тег body и в самый конец добовляем div
// document.querySelector('.wrapper').append(div); 

// wrapper.prepend(div);
// wrapper.appendChild(div);

// hearts[0].before(div);
// hearts[0].after(div);

// circles[0].remove();
// wrapper.removeChild(hearts[1]);//старый метод

// hearts[0].replaceWith(circles[0]);   

//старые методы но могут быть нужными

// wrapper.insertBefore(div,hearts[1]);//первый который вставляем второй перед каким вставляем


wrapper.replaceChild(circles[0],hearts[0]);//1 на который хотим что-то поменять 2 который меняется 

//1 метод
div.innerHTML = "<h1>Hello World</h1>"; 
//2 метод
// div.textContent = "Hi guys!";
// div.insertAdjacentHTML("beforebegin",'<h2>Hello World</h2>');//перед елементом
// div.insertAdjacentHTML("afterbegin",'<h2>Hello World</h2>');//в начало елемента
// div.insertAdjacentHTML("beforeend",'<h2>Hello World</h2>');//в конец елемента
// div.insertAdjacentHTML("afterend",'<h2>Hello World</h2>');//после елемента
