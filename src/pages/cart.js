function cart() {
    let cart
    try {
        cart = JSON.parse(localStorage.getItem('cart')) || []
    } catch (e) {
        cart = []
    }

    let price = 0
    let totalPrice = 0

    for (let i of cart) {
        let book = books.find(b => b.id == i.bookId)
        price += book.price * i.qty
        totalPrice += book.price * 1.05 * i.qty
    }
    console.log(price)

    return `
    <h5 class="fw-bold mb-3">GIỎ HÀNG</h5>
            <div class="row g-3">
                <div class="col-8">
                    ${chooseAll()}
                    ${cart.map(e => cartItem(e)).join('\n')}
                </div>
                <div class="col-4 ps-3">
                    ${totalMoney(price, totalPrice)}
                </div>
            </div>`
}

// function formatCurrency(amount) {
//         return amount.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
//     }



//     let checkAll = document.getElementById('checkAll');
//     checkAll.addEventListener('change', () => {
//         document.querySelectorAll('.item-check').forEach(cb => {
//             cb.checked = checkAll.checked;
//         });
//     });

//     document.querySelectorAll('.cart-item').forEach(item => {
//         let plus = item.querySelector('.plus');
//         let qty = item.querySelector('.qty');
//         let minus = item.querySelector('.minus');

//         plus.onclick = () => {
//             qty.value = parseInt(qty.value) + 1;
//         }

//         minus.onclick = () => {
//             if(qty.value > 1) {
//                 qty.value = parseInt(qty.value) - 1;
//             }
//         }
//     })