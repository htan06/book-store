function cartItem() {
    return `
        <div class="bg-white p-3 mt-3 rounded shadow d-flex align-items-center cart-item">
        <input type="checkbox" class="item-check form-check-input me-3">
        <img src="" class="me-3 rounded " style="width: 80px; height: 110px;">

        <div class="flex-grow-1">
            <h6 class="mb-1">Title</h6>

            <div class="d-flex align-items-center gap-2">
                <span class="fw-bold text-danger price" data-price="118000">118.000₫</span>
                <span class="text-muted text-decoration-line-through">198.000₫</span>
            </div>
        </div>

        <div class="d-flex align-items-center me-4">
            <button class="btn btn-outline-secondary btn-sm minus">-</button>
            <input type="text" value="1" class="form-control form-control-sm text-center mx-1 qty" style="width:50px;">
            <button class="btn btn-outline-secondary btn-sm plus">+</button>
        </div>

        <div class="text-danger fw-bold me-4 total-price">0₫</div>

        <i class="bi bi-trash text-muted"></i>
    </div>
    `
}
