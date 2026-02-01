let input = parseInt(prompt("Hôm nay có bao nhiêu lượt trả sách?"));

let tongLuotTra = 0;
if(input > 0){
 for (let i = 1; i <= input; i++) {
    let tenNguoiTra = prompt("Nhập tên của bạn:");
    let tenSach = prompt("Nhập tên sách: ");
    let soNgayMuon;
    while (true) {
        soNgayMuon = parseInt(prompt("người dùng nhập số nguyên từ (>=1)"));
        if (soNgayMuon >=1 ) {
            break;
        }else{
            console.log("Lỗi vui lòng nhập lại!");
        }
    }
        
        if (soNgayMuon <=14 ) {
            console.log("Trả đúng hạn");

        } else if (soNgayMuon <=21) {
            console.log("Trả muộn nhẹ + Phạt nhắc nhở");
            
        } else {
            console.log("Quá hạn nghiêm trọng + Cần ghi biên bản phạt");
            
        }
    tongLuotTra++;
 }
 console.log("tổng số lượt trả sách: " + tongLuotTra);
 
}else{
    console.log("lỗi ko có lượt sách này!!!");
    
}