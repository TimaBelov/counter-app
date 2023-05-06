let counter = 0;

let inc_btn = document.querySelector('.increment-btn');
let res_btn = document.querySelector('.reset-btn');
let counterText = document.querySelector('.counter');

inc_btn.addEventListener('click',function() {
    counter = counter + 1;
    counterText.innerText = counter;
});

res_btn.addEventListener('click',function(){
    counter = 0;
    counterText.innerText = counter;
});

