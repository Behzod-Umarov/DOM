const texts = document.querySelectorAll('.text');

texts.forEach(function(text) {
    text.addEventListener('click', function() {
        text.style.fontSize = '50px';
    });
});
