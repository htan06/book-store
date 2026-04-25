function addToCart(bookId) {
    let cart
    try {
        cart = JSON.parse(localStorage.getItem('cart')) || []
    } catch (e) {
        cart = []
    }

    let item = cart.find(i => i.bookId == bookId)

    if (item) item.qty++
    else cart.push({bookId: bookId, qty: 1})
    
    localStorage.setItem('cart', JSON.stringify(cart))
}