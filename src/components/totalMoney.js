function totalMoney(price, totalPrice) {
    return `
        <div class="alert alert-success small">
            🚚 Miễn phí giao hàng cho đơn từ <b>500k</b> trở lên!
        </div>

        <div class="bg-white p-3 my-1 rounded shadow">
            <div class="d-flex justify-content-between">
                <span>Thành tiền</span>
                <span class="fw-bold text-danger" id="totalPrice">${price} ₫</span>
            </div>
        </div>

        <div class="bg-white p-3 my-1 rounded shadow">
            <div class="d-flex justify-content-between">
                <span>Tổng Số Tiền (gồm VAT)</span>
                <span class="fw-bold text-danger" id="totalPrice-vat">${totalPrice} ₫</span>
            </div>
        </div>

        <button class="btn btn-warning w-100 mt-3"><b>Thanh toán</b></button>`
}