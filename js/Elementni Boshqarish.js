const square = document.querySelector('#square');
const upButton = document.querySelector('#up');
const downButton = document.querySelector('#down');
const leftButton = document.querySelector('#left');
const rightButton = document.querySelector('#right');

let marginLeft = 0;
let marginTop = 0;

upButton.addEventListener('click', function() {
    marginTop -= 20;
    square.style.marginTop = marginTop + 'px';
});

downButton.addEventListener('click', function() {
    marginTop += 20;
    square.style.marginTop = marginTop + 'px';
});

leftButton.addEventListener('click', function() {
    marginLeft -= 20;
    square.style.marginLeft = marginLeft + 'px';
});

rightButton.addEventListener('click', function() {
    marginLeft += 20;
    square.style.marginLeft = marginLeft + 'px';
});
