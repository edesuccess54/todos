
// const add = document.querySelector('.add');
// const resetCount = document.querySelector('.reset');
// const sub = document.querySelector('.subtract');
const count = document.querySelector('.counter');
const buttons = document.querySelector('.buttons');

buttons.addEventListener('click', (e) => {
    if(e.target.classList.contains('add')) {
        count.innerHTML++;
        setColors();
    } 
    
    if(e.target.classList.contains('subtract')){
        count.innerHTML--;
        setColors();
    }
    
    if(e.target.classList.contains('reset')) {
        count.innerHTML = 0;
        setColors();
    }
});

function setColors() {
    if(count.innerHTML > 0 ) {
        count.style.color = 'yellow';
    } else if (count.innerHTML < 0) {
        count.style.color = 'orangered';
    } else {
        count.style.color = '#fff';
    }
}

// add.addEventListener('click', () => {
//   count.innerHTML++;
// });

// sub.addEventListener('click', () => {
//     count.innerHTML--;
// });

// resetCount.addEventListener('click', () => {
//     count.innerHTML = 0;
// });