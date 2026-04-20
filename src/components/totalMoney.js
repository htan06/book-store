function totalMoney() {
    return `
     <div class="col-lg-4">
        <div class="alert alert-success small">
            🚚 Miễn phí giao hàng cho đơn từ <b>500k</b> trở lên!
        </div>

        <div class="bg-white p-3 rounded shadow">
            <div class="d-flex justify-content-between">
                <span>Thành tiền</span>
                <span class="fw-bold" id="totalPrice">0₫</span>
            </div>
        </div>

        <div class="bg-white p-3 rounded shadow">
            <div class="d-flex justify-content-between">
                <span>Tổng Số Tiền (gồm VAT)</span>
                <span class="fw-bold" id="totalPrice-vat">0₫</span>
            </div>
        </div>

        <button class="btn btn-warning w-100 mt-3">Thanh toán</button>
    </div>
    `
}