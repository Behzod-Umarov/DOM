function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
document.getElementById('changeColorButton').addEventListener('click', function() {
    let texts = document.querySelectorAll('.text, #heading');
    texts.forEach(function(text) {
        text.style.color = getRandomColor();
    });
});