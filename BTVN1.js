let input = parseInt(prompt("Hôm nay co bao nhiêu lượt mượn sách?"));

let tongLuotMuon = 0;
if (input > 0) {
    for (let i = 1; i <= input; i++){
       let tenNguoiDung = prompt("Nhập lên người dùng: ");
       let tenSach = prompt("Nhập tên sách của bạn: ");
       let soNgayMuon = parseInt(prompt("Nhập số ngày mượn (1-30 ngày):"));
        
       if(soNgayMuon > 14) {
        console.log("Cảnh báo: Thời gian mượn vượt quy định (tối đa 14 ngày) ");
       }else{
        console.log("Mượn thành công");
       }
       tongLuotMuon++;
    }
    console.log("tổng số lượt mượn của trong ngày: " + tongLuotMuon);
}else{
    console.log("số lượt mượn không hợp lệ!");
}