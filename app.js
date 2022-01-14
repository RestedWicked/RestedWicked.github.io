let intro = document.querySelector('.intro');
let intro2 = document.querySelector('.intro2');

window.addEventListener('DOMContentLoaded', ()=>{

    setTimeout(()=>{
        intro.style.top= '-100vh';
        setTimeout(()=>{
            intro2.style.top= '-100vh';
        }, 500);
    },300);
    
    
})