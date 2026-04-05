let books = [
    {
        "img": "https://cdn1.fahasa.com/media/catalog/product/8/9/8935278605546.jpg",
        "title": "30 Tuổi - Mọi Thứ Chỉ Mới Bắt Đầu",
        "price": "100.000 VND"
    },
    {
        "img": "https://cdn1.fahasa.com/media/catalog/product/c/h/chu-nghia-khac-ky-_tb-2023__bia-1.jpg",
        "title": "Chủ Nghĩa Khắc Kỷ - Phong Cách Sống Bản Lĩnh Và Bình Thản (Tái Bản)",
        "price": "104.000 đ"
    },
    {
        "img": "https://cdn1.fahasa.com/media/catalog/product/9/7/9786044009674.jpg",
        "title": "Con Đường Chẳng Mấy Ai Đi",
        "price": "99.000 đ"
    },
    {
        "img": "https://cdn1.fahasa.com/media/catalog/product/8/9/8936225390492.jpg",
        "title": "Phương Pháp Đặt Câu Hỏi Của Socrates - Khai Mở Tư Duy Phản Biện Và Hiểu Biết Sâu Sắc",
        "price": "69.300 đ"
    },
    {
        "img": "https://cdn1.fahasa.com/media/catalog/product/_/2/_2024_-thay_doi_ti_hon_hieu_qua_bat_ngo-tb8-02.jpg",
        "title": "Atomic Habits - Thay Đổi Tí Hon Hiệu Quả Bất Ngờ (Tái Bản 2023)",
        "price": "132.000 đ"
    },
    {
        "img": "https://cdn1.fahasa.com/media/catalog/product/l/e/lennui-front_1.jpg",
        "title": "Lên Đỉnh Núi Mở Tiệm Bánh Mì - Triết Lí Wazawaza - Những Con Người Hạnh Phúc, 2 Loại Bánh Mì, Và Doanh Thu Thường Niên 300 Triệu Yên",
        "price": "84.000 đ"
    }
]

function home() {
    let html = ''
    html += banner("./static/img/banner.jpg")
    html += section("Sách mới", books)
    html += section("Sách bán chạy", books)
    return html
}

function section(title, books) {
    let listCardHtml = books.map(book => card(book.img, book.title, book.price, 2)).join('\n');

    let html = 
        `<div class="justify-content-center text-center p-4 bg-light rounded-2 my-2">
            <h2>${title}</h2>
            <div class="row">
                ${listCardHtml}
            </div>
            <button class="catalog-link btn btn-outline-warning w-25" type="button">Xem thêm</button>
        </div>`
    return html
}

function card(img, title, price, col) {
    return `
        <div class="col-md-${col} col-6 p-3">
            
            <div class="card p-3">
                <a class="text-decoration-none text-black link-book-details" href="">
                    <img class="card-img-top" src="${img}" alt="">
                    <p class="card-title text-truncate">${title}</p>
                </a>
                <h6 class="text-danger">${price}</h6>
                <div>
                    <a href="#" class="btn btn-warning">Mua ngay</a>
                    <a href="#" class="btn btn-outline-warning">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16">
                            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
                        </svg>
                    </a>
                </div>
            </div>
            
        </div>`
}

function banner(img) {
    return `
        <div class="row m-3">
            <img src="${img}">
        </div>`
}