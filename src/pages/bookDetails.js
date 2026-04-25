function bookDetails() {
    const params = new URLSearchParams(window.location.search)
    const bookId = params.get("id")

    console.log(bookId)
    const bookData = books.find(b => b.id == bookId)

    return `
    <div class="row my-4">
        <div class="col-md-5 d-flex flex-column align-items-center rounded-2 bg-white p-4 align-self-start" style="position: sticky; top: 80px;">
            <img src="${bookData.img}" alt="" class="w-75">
            <div>
                <button class="btn btn-warning">Mua ngay</button>
                <button class="btn btn-outline-warning">Thêm vào giỏ hàng</button>
            </div>
        </div>

        <div class="col-md-7">
            <!-- Thông tin chính -->
            <div class="rounded-2 bg-white p-4 w-100 mb-3">
                <h6><b>${bookData.title}</b></h6>

                <div class="small">
                    <div>${bookData.supplier}</div>
                    <div>${bookData.publisher}</div>
                    <div>${bookData.author}</div>
                    <div>${bookData.format}</div>
                </div>

                <div class="d-flex align-items-center gap-2">
                    <b class="text-danger fw-bold fs-5">${bookData.price} đ</b>
                    <p class="text-muted text-decoration-line-through small">
                        ${bookData.originalPrice} đ
                    </p>
                    <div class="badge bg-danger rounded-2 px-2 py-1"><b>${'-' + bookData.discountPercent + '%'}</b></div>
                </div>
            </div>

            <div class="rounded-2 bg-white p-4 w-100">
                <h6 class="mb-4"><b>Thông tin chi tiết</b></h6>

                <div class="row gy-1 small">

                    <div class="col-5 text-muted">Mã hàng</div>
                    <div class="col-7 fw-medium">${bookData.sku}</div>

                    <div class="col-5 text-muted">Nhà cung cấp</div>
                    <div class="col-7">
                        <a href="#" class="text-decoration-none">${bookData.supplier}</a>
                    </div>

                    <div class="col-5 text-muted">Tác giả</div>
                    <div class="col-7">${bookData.author}</div>

                    <div class="col-5 text-muted">NXB</div>
                    <div class="col-7">${bookData.publisher}</div>

                    <div class="col-5 text-muted">Năm XB</div>
                    <div class="col-7">${bookData.publishYear}</div>

                    <div class="col-5 text-muted">Trọng lượng</div>
                    <div class="col-7">${bookData.weight}</div>

                    <div class="col-5 text-muted">Kích thước</div>
                    <div class="col-7">${bookData.size}</div>

                    <div class="col-5 text-muted">Số trang</div>
                    <div class="col-7">${bookData.pages}</div>

                    <div class="col-5 text-muted">Hình thức</div>
                    <div class="col-7">${bookData.format}</div>

                    <div class="col-5 text-muted">Sản phẩm nổi bật</div>
                    <div class="col-7">
                        <a href="#" class="text-decoration-none">
                            ${bookData.highlight}
                        </a>
                    </div>

                </div>
            </div>
        </div>
    </div>`
}