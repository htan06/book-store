function address() {
    return `
    <form class="rounded shadow-sm mt-3 mb-3 p-3">    
                        <h6 class="fw-bold border-bottom pb-3 mb-3">ĐỊA CHỈ GIAO HÀNG</h6>
                        <div class="mb-3 row">
                            <label class="col-sm-3 form-label">Họ và tên người nhận:</label>
                            <div class="col-sm-9">
                                <div class="d-flex">
                                    <input type="text" class="form-control" placeholder="họ và tên" id="name" onblur="checkName()">
                                    <span class="text-danger">*</span>
                                </div>
                                <div id="nameError" class="text-danger"></div>
                            </div>
                        </div>

                        <div class="mb-3 row">
                            <label class="col-sm-3 form-label">Email:</label>
                            <div class="col-sm-9">
                            <div class="d-flex">
                                <input type="email" class="form-control" id="email" placeholder="email@example.com" onblur="checkEmail()">
                                <span class="text-danger">*</span>
                            </div>
                                <div id="emailError" class="text-danger"></div>
                            </div>
                        </div>

                        <div class="mb-3 row">
                            <label class="col-sm-3 form-label">Số điện thoại:</label>
                            <div class="col-sm-9">
                                <div class="d-flex">
                                    <input type="text" class="form-control" id="phone" placeholder="VD: 0123456789 (10 số)" onblur="checkPhone()">
                                    <span class="text-danger">*</span>
                                </div>
                                <div id="phoneError" class="text-danger"></div>
                            </div>
                        </div>

                        <div class="mb-3 row">
                            <label class="col-sm-3 form-label">Tỉnh/Thành phố:</label>
                            <div class="col-sm-9">
                                <select class="form-control" id="city">
                                    <option value="">Chọn tỉnh/thành phố</option>
                                    <option value="hn">Hà Nội</option>
                                    <option value="hcm">TP. Hồ Chí Minh</option>
                                    <option value="dn">Đà Nẵng</option>
                                </select>
                            </div>
                        </div>

                        <div class="mb-3 row">
                            <label class="col-sm-3 form-label">Phường:</label>
                            <div class="col-sm-9">
                                <div class="d-flex">
                                    <input type="text" class="form-control" id="ward" placeholder="VD: Phường Diên Hồng" onblur="checkWard()">
                                    <span class="text-danger">*</span>
                                </div>
                                <div id="wardError" class="text-danger"></div>
                            </div>
                        </div>

                        <div class="mb-3 row">
                            <label class="col-sm-3 form-label">Địa chỉ nhận hàng:</label>
                            <div class="col-sm-9">
                                <div class="d-flex">
                                    <input type="text" class="form-control" id="address" placeholder="địa chỉ nhận hàng" onblur="checkAddress()">
                                    <span class="text-danger">*</span>
                                </div>
                                <div id="addressError" class="text-danger"></div>
                            </div>
                        </div>

                        <div class="mb-3 row">
                            <label class="col-sm-3 form-label">Ghi chú:</label>
                            <div class="col-sm-9">
                                <textarea class="form-control" placeholder="Ghi chú cho người giao hàng (nếu có)"></textarea>
                            </div>
                    </form>
    `
}