function successModal() {
    return `
        <div class="modal fade" id="successModal" tabindex="-1">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="successModalLabel">THÔNG BÁO</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        Đặt hàng thành công!
                        <i class="fa-solid fa-check fa-lg" style="color: rgb(99, 230, 190);"></i>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-primary" data-bs-dismiss="modal" ><a href="/index.html" class="nav-link">Đóng</a></button>
                    </div>
                </div>
            </div>
        </div>
    `
}