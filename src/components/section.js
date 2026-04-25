function section(title, books) {
    return `
        <div class="justify-content-center text-center p-4 bg-light rounded-2 my-2">
            <h2>${title}</h2>
            <div class="row">
                ${books.map(book => card(book)).join('\n')}
            </div>
            <a href="./catalog.html">
                <button class="catalog-link btn btn-outline-warning w-25" type="button">Xem thêm</button>
            </a>
        </div>`
}