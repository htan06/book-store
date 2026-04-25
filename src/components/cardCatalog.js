function cardCatalog(book) {
    return `
        <div class="col-xl-3 col-md-4 col-6 p-2">
            
            <div class="card p-3">
                <a class="text-decoration-none text-black link-book-details" data-id="${book.id}" href="./book-detail.html?id=${book.id}">
                    <img class="card-img-top" src="${book.img}" alt="">
                    <p class="fs-6 card-title text-truncate">${book.title}</p>
                </a>
                <h6 class="text-danger">${book.price}</h6>
                <div class="d-flex gap-2">
                    <button class="btn btn-warning flex-fill">Mua ngay</button>
                    <button class="btn btn-outline-warning flex-fill" onclick="addToCart(${book.id})">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16">
                            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
                        </svg>
                    </button>
                </div>
            </div>
        </div>`
}