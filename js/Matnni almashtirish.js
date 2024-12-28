const paragraphs = document.querySelectorAll('#p');

paragraphs.forEach(paragraph => {
    paragraph.addEventListener('click', function() {
        paragraph.innerText = "Salom, dunyo!";
    });
});
