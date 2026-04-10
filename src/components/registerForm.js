function registerForm() {
    return `
    <div id="registerForm" class="d-none">
                    <h4 class="text-center text-black mb-4">ĐĂNG KÝ</h4>
                    <form>
                        <div class="mb-3">
                            <input type="text" class="form-control" placeholder="Tên đăng nhập">
                        </div>
                        <div class="mb-3">
                            <input type="email" class="form-control" placeholder="Email">
                        </div>
                        <div class="mb-3">
                            <input type="password" class="form-control" placeholder="Mật khẩu">
                        </div>
                        <div class="mb-3">
                            <input type="password" class="form-control" placeholder="Xác nhận mật khẩu">
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