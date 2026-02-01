

let ok = 0, no = 0;

while (true) {
    let ans = prompt("Gia hạn? (có/không)");
    
    if (ans === null || ans.toLowerCase() === "không") break;
    if (ans.toLowerCase() !== "có") {
        alert("Nhập 'có' hoặc 'không'");
        continue;
    }
    
    let name = prompt("Tên bạn đọc:");
    let book = prompt("Tên sách:");
    
    let borrow;
    do {
        borrow = Number(prompt("Số ngày đã mượn:"));
    } while (isNaN(borrow) || borrow < 1);
    
    let extend;
    do {
        extend = Number(prompt("Gia hạn thêm (ngày):"));
    } while (isNaN(extend) || extend < 1);
    
    let total = borrow + extend;
    
    console.log("--- GIA HẠN ---");
    console.log("Bạn đọc: " + name);
    console.log("Sách: " + book);
    
    if (total > 60) {
        console.log("Không được gia hạn: Vượt 60 ngày");
        no++;
    } else if (borrow > 45) {
        console.log("Không được gia hạn: Đã mượn quá lâu");
        no++;
    } else if (total <= 30) {
        console.log("Gia hạn OK");
        ok++;
    } else {
        console.log("Không được gia hạn");
        no++;
    }
}

console.log("=== THỐNG KÊ ===");
console.log("Thành công: " + ok);
console.log("Thất bại: " + no);