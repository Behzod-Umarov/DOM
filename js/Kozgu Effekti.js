const b = document.querySelector('#inputField');
const a = document.querySelector('#mirrorText');

b.addEventListener('input', function() {
    a.textContent = b.value;
});
