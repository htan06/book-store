function chooseAll() {
    return `
        <div class="bg-white p-3 rounded shadow d-flex align-items-center justify-content-between">
            <div>
                <input type="checkbox" id="checkAll" class="form-check-input me-2">
                Chọn tất cả
            </div>

            <div class="d-flex gap-5 text-muted">
                <span>Số lượng</span>
                <span>Thành tiền</span>
            </div>
        </div>
    `
}
