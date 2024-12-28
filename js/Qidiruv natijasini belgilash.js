// const textElement = document.querySelector('#text');
// const searchInput = document.querySelector('#searchInput');
// const searchButton = document.querySelector('#searchButton');

// searchButton.addEventListener('click', function() {
//     const searchTerm = searchInput.value;  
//     const regex = new RegExp(searchTerm, 'gi');

//     if (searchTerm.trim() !== '') {
//         const highlightedText = textElement.innerHTML.replace(regex, function(match) {
//             return `<span style="background-color: yellow">${match}</span>`;
//         });
//         textElement.innerHTML = highlightedText;
//     } else {
//         alert('Iltimos, qidirilayotgan sozni kiriting.');
//     }
// });





const a = document.querySelectorAll('#m');
const b = document.getElementById("text")
const d = document.getElementById("button");


button && button.addEventListener('click', function(){
    if(b.value){
        let texMes = a.innerHTML.trim();
        texMes = texMes.replaceAll(b.value , `<span style="color: "red"></span>`)
    }
})