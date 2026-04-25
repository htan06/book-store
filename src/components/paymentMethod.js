function paymentMethod() {
    return`
        <div class="mb-3">
            <h6 class="fw-bold border-bottom pb-3 pt-3">Phương thức thanh toán</h6>
            <div class="list-group">
                <label class="list-group-item d-flex gap-3 align-items-start">
                    <input class="form-check-input mt-1" type="radio" name="payment">
                    <div class="fw-semibold">Ví ZaloPay</div>
                </label>
                
                <label class="list-group-item d-flex gap-3 align-items-start">
                    <input class="form-check-input mt-1" type="radio" name="payment">
                    <div class="fw-semibold">VNPAY</div>
                </label>

                <label class="list-group-item d-flex gap-3 align-items-start">
                    <input class="form-check-input mt-1" type="radio" name="payment">
                    <div class="fw-semibold">Ví MoMo</div>
                </label>

                <label class="list-group-item d-flex gap-3 align-items-start">
                    <input class="form-check-input mt-1" type="radio" name="payment">
                    <div class="fw-semibold">ATM / Internet Banking</div>
                </label>

                <label class="list-group-item d-flex gap-3 align-items-start">
                    <input class="form-check-input mt-1" type="radio" name="payment">
                    <div class="fw-semibold">Visa / Master / JCB</div>
                </label>

                <label class="list-group-item d-flex gap-3 align-items-start">
                    <input class="form-check-input mt-1" type="radio" name="payment" checked>
                    <div class="fw-semibold">Thanh toán khi nhận hàng</div>
                </label>
            </div>
        </div>
    `
}