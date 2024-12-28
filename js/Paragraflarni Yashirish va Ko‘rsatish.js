const hideButtons = document.querySelectorAll('.hide-btn');

hideButtons.forEach(button => {
    button.addEventListener('click', function() {
        const paragraph = button.parentElement;
        paragraph.style.display = "none";
    });
});
