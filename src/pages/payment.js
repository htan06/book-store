function payment() {
    return `
    <div class="row g-3">
        <div class="col-12">
            ${address()}
            ${shippingMethod()}
            ${paymentMethod()}
            ${checkOrder()}
        </div> 
    </div>

    <div class="p-4 rounded shadow-sm mb-3">
        ${confirm()}
    </div>

    `
}

function checkName() {
    const name = document.getElementById("name").value;
    const nameInput = document.getElementById("name");
    const nameError = document.getElementById("nameError");

    if(name.trim() === "") {
        nameInput.classList.add("is-invalid");
        nameError.textContent = "Vui lòng nhập họ và tên người nhận.";
        return false;
    }
    else {
        nameInput.classList.remove("is-invalid");
        nameError.textContent = "";
        return true;
    }
}

function checkEmail() {
    const email = document.getElementById("email").value;
    const emailInput = document.getElementById("email");
    const emailError = document.getElementById("emailError");
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(!emailRegex.test(email)) {
        emailInput.classList.add("is-invalid");
        emailError.textContent = "Vui lòng nhập email hợp lệ.";
        return false;
    }
    else {
        emailInput.classList.remove("is-invalid");
        emailError.textContent = "";
        return true;
    }
}

function checkPhone() {
    const phone = document.getElementById("phone").value;
    const phoneInput = document.getElementById("phone");
    const phoneError = document.getElementById("phoneError");
    const phoneRegex = /(09|08|07|06|05|04|03|02|01)+([0-9]{8})$/;

    if(!phoneRegex.test(phone)) {
        phoneInput.classList.add("is-invalid");
        phoneError.textContent = "Vui lòng nhập số điện thoại hợp lệ (10 số, bắt đầu bằng 0).";
        return false;
    }
    else {
        phoneInput.classList.remove("is-invalid");
        phoneError.textContent = "";
        return true;
    }
}

function checkWard() {
    const ward = document.getElementById("ward").value;
    const wardInput = document.getElementById("ward");
    const wardError = document.getElementById("wardError");

    if(ward.trim() === "") {
        wardInput.classList.add("is-invalid");
        wardError.textContent = "Vui lòng nhập phường.";
        return false;
    }
    else {
        wardInput.classList.remove("is-invalid");
        wardError.textContent = "";
        return true;
    }  
}

function checkAddress() {
    const address = document.getElementById("address").value;
    const addressInput = document.getElementById("address");
    const addressError = document.getElementById("addressError");

    if(address.trim() === "") {
        addressInput.classList.add("is-invalid");
        addressError.textContent = "Vui lòng nhập địa chỉ nhận hàng.";
        return false;
    }
    else {
        addressInput.classList.remove("is-invalid");
        addressError.textContent = "";
        return true;
    }
}

const radios = document.querySelectorAll('.shippingMethod');
const shippingCostElement = document.getElementById("shippingCost");

radios.forEach(radio => {
    radio.addEventListener("change", () => {
        const shippingCost = parseInt(document.querySelector('.shippingMethod:checked').value);
        shippingCostElement.textContent = shippingCost.toLocaleString("vi-VN");
    });
});
