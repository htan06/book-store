function cartItem(item) {
    let book = books.find(b => b.id == item.bookId)

    return `
        <div class="row bg-white p-3 mt-3 rounded shadow d-flex align-items-center cart-item">
            <input type="checkbox" class="col-md-1 col-2 item-check form-check-input">
            <img src="${book.img}" class="col-md-2 col-3 rounded object-fit-contain" style="width: 80px; height: 110px;">

            <div class="col-md-4 col-7 flex-grow-1">
                <h6 class="mb-1">${book.title}</h6>

                <div class="d-flex align-items-center gap-2">
                    <span class="fw-bold text-danger price" data-price="118000">${book.price} đ</span>
                    <span class="text-muted text-decoration-line-through">${book.originalPrice} đ</span>
                </div>
            </div>

            <div class="col-md-2 col-7 d-flex align-items-center">
                <button class="btn btn-outline-secondary btn-sm minus">-</button>
                <input type="text" value="${item.qty}" class="form-control form-control-sm text-center mx-1 qty" style="width:50px;">
                <button class="btn btn-outline-secondary btn-sm plus">+</button>
            </div>

            <div class="col-md-2 col-4 text-danger fw-bold total-price pe-auto text-end">${item.qty * book.price} đ</div>

            <i class="col-1 bi bi-trash text-muted"></i>
        </div>`
}
