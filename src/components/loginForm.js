function loginForm() {
    return `
    <div class="text-center border rounded-4 border-2 border-black p-4 w-75">
                <div id="loginForm">
                    <h4 class="text-center text-black mb-4">ĐĂNG NHẬP</h4>
                    <form>
                        <div class="mb-3">
                            <input type="text" class="form-control" placeholder="Tên đăng nhập">
                        </div>

                        <div class="mb-3">
                            <input type="password" class="form-control" placeholder="Mật khẩu">
                        </div>

                        <button type="submit" class="btn btn-warning w-100">Đăng nhập</button>
                    </form>

                    <div class="text-center mt-3">
                        <p class="mb-1">
                            Chưa có tài khoản? <a href="#" onclick="showRegisterForm()" class="text-decoration-none">Đăng ký ngay</a>
                        </p>
                        <a href="#">Quên mật khẩu?</a>
                    </div>
                </div>`
}