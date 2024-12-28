const buttons = document.querySelectorAll('.colorButton');

buttons.forEach(function(button) {
    button.addEventListener('click', function() {
        const color = button.getAttribute('data-color');
        document.body.style.backgroundColor = color;
    });
});
