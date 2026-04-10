function catalog() {
    return `
    <div class="row gx-5 my-2">
        ${filter()}
        ${listCard(books)}
    </div>`
}