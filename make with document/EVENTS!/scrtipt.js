//events - сигнал от браузера что что-что у нас произошло

const btns = document.querySelector('button');
       overlay = document.querySelector('.overlay');  
// btn.onclick = function(){
//     alert('Click');
// };

// btn.onclick = function(){
//     alert('Select Selected');
// };
// let i = 0;
const deleteElement =  (event)=>{
     console.log(event.target);
     console.log(event.type);
    // console.log(event.currentTarget);
    // console.log(event.type);
    // i++;
    // if(i === 1){
    //     btn.removeEventListener('click',deleteElement);
    // }
};

// btn.addEventListener('click',deleteElement);
// overlay.addEventListener('click',deleteElement);

btns.forEach(btn => {
  btn.addEventListener('click',deleteElement,{once:true});
});

const link = document.querySelector('a');

link.addEventListener('click', function(event){
event.preventDefault();

console.log(event.target);
});

// btn.addEventListener('click', (event)=>{
//     console.log(event.target);
//     event.target.remove();
//     // console.log('Click');
// });

// btn.addEventListener('click', ()=>{
//     alert('Second click');
// });

