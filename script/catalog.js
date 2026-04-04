function catalog() {
    return `
    <div class="row gx-5 my-2">
        ${filter()}
        ${listCard(books)}
    </div>`
}

function listCard(books) {
    return `
        <div class="col-12 col-md-9 p-4 bg-light rounded-2">
            <div class="row">
            ${books.map(book => card(book.img, book.title, book.price, 3)).join('\n')}
            </div>
        </div>`
}

function filter() {
    return `
    <div class="col-12 col-md-3 p-1">
                <div class="p-3 h-100 bg-light rounded-2">
                    <h4>Bộ lọc</h4>

                    <form class="d-flex my-2" action="" role="filter">
                        <label for="the-loai">Thể loại</label>
                        <select class="form-select" id="the-loai">
                            <optgroup label="Thể loại">
                                <option value="aaaa">Chọn thể loại</option>
                                <option value="bbbb">bbbb</option>
                                <option value="vvvv">nnnn</option>
                            </optgroup>
                        </select>
                    </form>

                    <form class="d-flex my-2" action="" role="filter">
                        <label for="the-loai">Giá</label>
                        <input class="form-control mx-4" type="text" placeholder="Thấp nhất">
                        <input class="form-control me-auto" type="text" placeholder="Cao nhất">
                    </form>
                </div>
            </div>`
}