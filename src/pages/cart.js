function cart() {
    return `
    <h5 class="fw-bold mb-3">GIỎ HÀNG</h5>
            <div class="row g-3">
                <div class="col-lg-8">
                    ${chooseAll()}
                    ${cartItem(books)}
                </div>
                ${totalMoney(books)}
            </div>
    `
}

function formatCurrency(amount) {
        return amount.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
    }

    let checkAll = document.getElementById('checkAll');
    checkAll.addEventListener('change', () => {
        document.querySelectorAll('.item-check').forEach(cb => {
            cb.checked = checkAll.checked;
        });
    });

    document.querySelectorAll('.cart-item').forEach(item => {
        let plus = item.querySelector('.plus');
        let qty = item.querySelector('.qty');
        let minus = item.querySelector('.minus');

        plus.onclick = () => {
            qty.value = parseInt(qty.value) + 1;
        }

        minus.onclick = () => {
            if(qty.value > 1) {
                qty.value = parseInt(qty.value) - 1;
            }
        }
    })