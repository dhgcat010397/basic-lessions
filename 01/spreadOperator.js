// Spread Operator (...)

// Spread operator với mảng
let soThich = ["Đọc sách", "Nghe nhạc"];
let soThichMoi = "Du lịch";
soThich = [...soThich, soThichMoi];
console.log(soThich); // ["Đọc sách", "Nghe nhạc", "Du lịch"]

let soThich2 = ["Chơi thể thao", "Xem phim"];
soThich = [...soThich, ...soThich2];
console.log(soThich); // ["Đọc sách", "Nghe nhạc", "Du lịch", "Chơi thể thao", "Xem phim"]

// Spread operator với object
let user = {
  id: 1,
  name: "Toàn",
  email: "toan@gmail.com",
};
// Thêm thuộc tính mới vào object
const updates = {
  address: "Hà Nội",
  role: "admin",
};
user = { ...user, ...updates };
console.log("Thông tin người dùng sau khi cập nhật:", user);
/*
Kết quả:
Thông tin người dùng sau khi cập nhật: {
  id: 1,
  name: 'Toàn',
  email: 'toan@gmail.com',
  address: 'Hà Nội',
  role: 'admin'
}
*/
