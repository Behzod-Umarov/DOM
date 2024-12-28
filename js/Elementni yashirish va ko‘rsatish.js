const hideButton = document.querySelector('#hideButton');
const showButton = document.querySelector('#showButton');
const paragraphs = document.querySelectorAll('.content'); 

hideButton.addEventListener('click', function() {
    paragraphs.forEach(function(paragraph) {
        paragraph.style.display = 'none';
    });
});

showButton.addEventListener('click', function() {
    paragraphs.forEach(function(paragraph) {
        paragraph.style.display = 'block';
    });
});
