function registerForm() {
    return `
    <div id="registerForm" class="d-none">
                    <h4 class="text-center text-black mb-4">ĐĂNG KÝ</h4>
                    <form>
                        <div class="mb-3">
                            <input type="text" class="form-control" placeholder="Tên đăng nhập">
                        </div>
                        <div class="mb-3">
                            <input type="email" class="form-control" id="email" onblur="checkEmail()" placeholder="Email">
                            <span id="emailError" class="text-danger"></span>
                        </div>
                        <div class="mb-3">
                            <input type="password" class="form-control" id="registerPassword" onblur="checkPassword()" placeholder="Mật khẩu">
                            <span id="passwordError" class="text-danger"></span>
                        </div>
                        <div class="mb-3">
                            <input type="password" class="form-control" id="confirmPassword" onblur="checkPassword()" placeholder="Xác nhận mật khẩu">
                            <span id="confirmPasswordError" class="text-danger"></span>
                        </div>
                        <button type="submit" class="btn btn-warning w-100">Đăng ký</button>
                    </form>

                    <div class="text-center mt-3">
                        <p>
                            Đã có tài khoản? <a href="#" onclick="showLoginForm()" class="text-decoration-none">Đăng nhập ngay</a>
                        </p>
                    </div>
                </div>
            </div>`
}