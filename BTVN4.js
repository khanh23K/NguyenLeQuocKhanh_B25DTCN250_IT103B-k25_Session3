let tongSoSach = 0;
let sachMat = 0;
let sachHetHang = 0;
let sachTonKhoNhieu = 0;
let sachTonKhoBinhThuong = 0;

while (true) {
    let tiepTuc = prompt("Tiếp tục kiểm kê sách tiếp theo? (có/không)");

    if (tiepTuc.toLowerCase() === "không") {
        break;
    }

    if (tiepTuc.toLowerCase() !== "có") {
        alert("Vui lòng nhập 'có' hoặc 'không'");
        continue;
    }

    let maSach;
    do {
        maSach = prompt("Nhập mã sách (không được để trống):");
    } while (!maSach);

    let tenSach = prompt("Nhập tên sách:");

    let soLuong;
    while (true) {
        soLuong = parseInt(prompt("Nhập số lượng thực tế (>= 0):"));
        if (Number.isInteger(soLuong) && soLuong >= 0) break;
        alert("Số lượng không hợp lệ, nhập lại!");
    }

    let tinhTrang;
    while (true) {
        tinhTrang = parseInt(prompt(
            "Nhập tình trạng sách:\n1 - Bình thường\n2 - Mất"
        ));
        if (tinhTrang === 1 || tinhTrang === 2) break;
        alert("Tình trạng không hợp lệ!");
    }

    if (tinhTrang === 2) {
        console.log(maSach + " - " + tenSach + ": Sách mất");
        sachMat++;
    } else if (soLuong === 0) {
        console.log(maSach + " - " + tenSach + ": Sách hết hàng");
        sachHetHang++;
    } else if (soLuong >= 10) {
        console.log(maSach + " - " + tenSach + ": Sách tồn kho nhiều");
        sachTonKhoNhieu++;
    } else {
        console.log(maSach + " - " + tenSach + ": Sách tồn kho bình thường");
        sachTonKhoBinhThuong++;
    }

    tongSoSach++;
}

console.log("----- BÁO CÁO KIỂM KÊ -----");
console.log("Tổng số sách đã kiểm kê: " + tongSoSach + " cuốn");
console.log("Số sách mất: " + sachMat + " cuốn");
console.log("Số sách hết hàng: " + sachHetHang + " cuốn");
