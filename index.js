const inc_btn = document.getElementById('addOnePoolBtn');
const res_btn = document.getElementById('resetBtn');
const counterText = document.querySelector('.counter__value');

const COUNTER_INITIAL_VALUE = 0;

let counter = COUNTER_INITIAL_VALUE;
counterText.innerText = counter;

inc_btn.addEventListener('click',function() {
    counter = counter + parseInt(inc_btn.dataset.pools);
    counterText.innerText = counter;
});

res_btn.addEventListener('click',function(){
    counter = COUNTER_INITIAL_VALUE;
    counterText.innerText = counter;
});

