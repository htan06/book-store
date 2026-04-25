function confirm() {
    return `
    <div class="row justify-content-end">
                    <div class="col-md-12">
                        <div class="d-flex justify-content-between mb-2">
                            <span>Thành tiền</span>
                            <span>129.000đ</span>
                        </div>

                        <div class="d-flex justify-content-between mb-2">
                            <span>Phí vận chuyển</span>
                            <p><span id="shippingCost">0</span>đ</p>
                        </div>

                        <div class="d-flex justify-content-between fw-bold fs-5">
                            <span>Tổng Số Tiền (gồm VAT)</span>
                            <span class="text-warning">159.000đ</span>
                        </div>
                    </div>
                    <button class="btn btn-warning px-5 py-2 fw-bold fs-5" data-bs-toggle="modal" data-bs-target="#successModal">Xác nhận đặt hàng</button>
                </div>
    `
}