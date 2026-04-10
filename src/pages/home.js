function home() {
    let html = ''
    html += banner("./src/static/img/banner.jpg")
    html += section("Sách mới", books)
    html += section("Sách bán chạy", books)
    return html
}