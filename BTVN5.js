let tongYeuCau = 0;
let datThanhCong = 0;
let biTuChoi = 0;
let choXetDuyet = 0;

while (true) {
    let tiepTuc = prompt("Có yêu cầu đặt mượn trước mới không? (có/không)");

    if (tiepTuc.toLowerCase() === "không") {
        break;
    }

    if (tiepTuc.toLowerCase() !== "có") {
        alert("Vui lòng nhập 'có' hoặc 'không'");
        continue;
    }

    let tenBanDoc = prompt("Nhập tên bạn đọc:");
    let maSach = prompt("Nhập mã sách muốn đặt trước:");
    let tenSach = prompt("Nhập tên sách (tham khảo):");

    let soNgayCho;
    while (true) {
        soNgayCho = parseInt(prompt("Nhập số ngày dự kiến chờ (>= 1):"));
        if (Number.isInteger(soNgayCho) && soNgayCho >= 1) break;
        alert("Số ngày không hợp lệ, nhập lại!");
    }

    let uuTien;
    while (true) {
        uuTien = parseInt(prompt(
            "Nhập mức ưu tiên:\n1 - Sinh viên\n2 - Giảng viên/NCS\n3 - Nhân viên thư viện"
        ));
        if (uuTien === 1 || uuTien === 2 || uuTien === 3) break;
        alert("Mức ưu tiên không hợp lệ!");
    }

    if (soNgayCho > 45) {
        console.log("Từ chối: Thời gian chờ quá lâu (>45 ngày)");
        biTuChoi++;
    } else if (uuTien === 3) {
        console.log("Đặt trước thành công - Ưu tiên đặc cách cao nhất");
        datThanhCong++;
    } else if (uuTien === 2 && soNgayCho <= 30) {
        console.log("Đặt trước thành công - Ưu tiên giảng viên/nghiên cứu");
        datThanhCong++;
    } else if (uuTien === 1 && soNgayCho <= 21) {
        console.log("Đặt trước thành công");
        datThanhCong++;
    } else {
        console.log("Đặt trước tạm thời - Chờ xét duyệt thêm");
        choXetDuyet++;
    }

    tongYeuCau++;
}

console.log("----- BÁO CÁO CUỐI CA -----");
console.log("Tổng số yêu cầu đã xử lý: " + tongYeuCau);
console.log("Số yêu cầu đặt trước thành công: " + datThanhCong);
console.log("Số yêu cầu bị từ chối: " + biTuChoi);
console.log("Số yêu cầu chờ xét duyệt: " + choXetDuyet);
