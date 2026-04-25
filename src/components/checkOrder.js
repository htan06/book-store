function checkOrder() {
    return `
    <div class="mb-3">
                        <h6 class="fw-bold border-bottom pb-3 pt-3">Kiểm tra đơn hàng</h6>

                        <div class="row align-items-center">
                            <div class="col-md-2">
                                <img src="./src/static/img/logo.png" class="img-fluid w-50">
                            </div>

                            <div class="col-md-6">Ten</div>

                            <div class="col-md-2 text-end">
                                <div>111.000đ</div>
                                <small class="text-muted text-decoration-line-through">150.000đ</small>
                            </div>

                            <div class="col-md-1 text-center">1</div>

                            <div class="col-md-1 text-end text-warning fw-bold">129.000đ</div>
                        </div>
                    </div>
    `
}