function listCard(books) {
    return `
        <div class="col-12 col-md-9 p-4 bg-light rounded-2">
            <div class="row">
            ${books.map(book => cardCatalog(book.id, book.img, book.title, book.price)).join('\n')}
            </div>
        </div>`
}