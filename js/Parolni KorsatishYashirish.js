const passwordInput = document.querySelector('#passwordInput');
const togglePasswordButton = document.querySelector('#togglePassword');

togglePasswordButton.addEventListener('click', function() {
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        togglePasswordButton.textContent = 'Yashirish';
    } else {
        passwordInput.type = 'password';
        togglePasswordButton.textContent = 'Korsatish';
    }
});
