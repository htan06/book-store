function login() {
    return `
    <div class="d-flex justify-content-center align-items-center p-5">
        ${loginForm()}
        ${registerForm()}
    </div>`
}

function showRegisterForm() {
    document.getElementById('loginForm').classList.add('d-none');
    document.getElementById('registerForm').classList.remove('d-none');
}

function showLoginForm() {
    document.getElementById('registerForm').classList.add('d-none');
    document.getElementById('loginForm').classList.remove('d-none');
} 

function checkEmail() {
    const email = document.getElementById('email').value;
    const emailInput = document.getElementById('email');
    const emailError = document.getElementById('emailError');
    const regexEmail = /[a-zA-Z0-9._%+-]+\@[a-z0-9.-]+\.[a-z]{2,}$/;

    if (!regexEmail.test(email)) {
        emailInput.classList.add('is-invalid');
        emailError.textContent = 'Email không hợp lệ';
        return false;
    }
    else {
        emailInput.classList.remove('is-invalid');
        emailError.textContent = '';
    }
}

function checkPassword() {
    const password = document.getElementById('registerPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const passwordInput = document.getElementById('registerPassword');
    const confirmPasswordInput = document.getElementById('confirmPassword');
    const passwordError = document.getElementById('passwordError');
    const confirmPasswordError = document.getElementById('confirmPasswordError');

    if (password.length < 6) {
        passwordInput.classList.add('is-invalid');
        passwordError.textContent = 'Mật khẩu phải có ít nhất 6 ký tự';
        return false;
    }
    else {
        passwordInput.classList.remove('is-invalid');
        passwordError.textContent = '';
    }

    if (confirmPassword !== password) {
        confirmPasswordInput.classList.add('is-invalid');
        confirmPasswordError.textContent = 'Mật khẩu xác nhận không khớp';
        return false;
    }
    else {
        confirmPasswordInput.classList.remove('is-invalid');
        confirmPasswordError.textContent = '';
    }   
}