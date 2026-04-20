function shippingMethod() {
    return`
        <div class="mb-3">
                        <h6 class="fw-bold border-bottom pb-3 pt-3">Phương thức vận chuyển</h6>
                        <div class="form-check">    
                            <input type="radio" name="shipping" class="form-check-input shippingMethod" value="0" checked>
                            <label class="form-check">
                                Giao hàng tiêu chuẩn (3-5 ngày làm việc) - Miễn phí
                            </label>

                            <input type="radio" name="shipping" class="form-check-input shippingMethod" value="30000">
                            <label class="form-check">
                                Giao hàng nhanh (1-2 ngày làm việc) - 30.000đ
                            </label>
                        </div>
                    </div>
    `
}