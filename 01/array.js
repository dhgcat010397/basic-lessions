/* 
Array (mảng) là 1 dạng đặc bệt của object,
được thiết kế để lưu trữ các giá trị theo thứ tự và truy cập bằng chỉ số (index), bắt đầu từ 0.
*/

// 1. Tạo array: Array được tạo bằng cặp dấu ngoặc vuông []
// (ngoài ra còn có cách tạo bằng constructor,
// tham khảo thêm tại: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)

const myArray = [1, 2, 3, 4, 5];
const myArray2 = new Array("apple", "banana", "cherry");
console.log(typeof myArray); // object
console.log(typeof myArray2); // object

// 2. Truy cập phần tử trong array: Sử dụng chỉ số (index) để truy cập phần tử
console.log(myArray[0]); // 1
console.log(myArray2[1]); // banana

// 3. Thêm phần tử vào array: Sử dụng phương thức push() để thêm phần tử vào cuối mảng
myArray.push(6);
console.log(myArray); // [1, 2, 3, 4, 5, 6]

// 4. Xóa phần tử khỏi array: Sử dụng phương thức pop() để xóa phần tử cuối cùng của mảng
myArray.pop();
console.log(myArray); // [1, 2, 3, 4, 5]

// 5. Duyệt qua các phần tử trong array: Sử dụng vòng lặp for hoặc forEach()
for (let i = 0; i < myArray.length; i++) {
  console.log(myArray[i]);
}

myArray.forEach((item) => {
  console.log(item);
});

// 6. Các phương thức khác của array: map(), filter(), reduce(), find(), some(), every(), includes(), indexOf(), sort(), reverse()...
const myArray3 = [1, 2, 3, 4, 5];
const newArray = myArray3.map((item) => item * 2);
console.log(newArray); // [2, 4, 6, 8, 10]

const filteredArray = myArray3.filter((item) => item > 2);
console.log(filteredArray); // [3, 4, 5]

const sum = myArray3.reduce((acc, item) => acc + item, 0);
console.log(sum); // 15

// 7. Array là object: Array là 1 dạng đặc biệt của object, nên có thể sử dụng các phương thức của object trên array
const myArray4 = [1, 2, 3, 4, 5];
console.log(myArray4.hasOwnProperty("length"));

// 8. Array là iterable: Array có thể được lặp qua bằng for...of, for...in, forEach(), map(), filter(), reduce()...
for (const item of myArray4) {
  console.log(item);
}

// 9. Array là mutable: Array có thể thay đổi giá trị của các phần tử trong mảng, thêm hoặc xóa phần tử, sắp xếp lại mảng...
myArray4[0] = 10;
console.log(myArray4); // [10, 2, 3, 4, 5]

// 10. Array là dynamic: Array có thể thay đổi kích thước, thêm hoặc xóa phần tử, không cần khai báo trước kích thước...
myArray4.push(6);
console.log(myArray4);

// 11. Mảng lồng nhau và kiểu dữ liệ trong mảng
// Mảng có thể chứa bất kỳ loại dữ liệu nào, bao gồm:
// Số, chuỗi, boolean, object, array khác, function, null, undefined...
const myArray5 = [
  1,
  "hello",
  true,
  { name: "John" },
  [1, 2, 3],
  function () {
    return "Hello";
  },
  null,
  undefined,
];
console.log(myArray5);
console.log(myArray5[3].name); // John
console.log(myArray5[4]); // [1, 2, 3]
console.log(myArray5[4][1]); // 2
console.log(myArray5[5]()); // Hello

// findIndex() trả về chỉ số của phần tử đầu tiên trong mảng thỏa mãn điều kiện, nếu không tìm thấy thì trả về -1
const myArray6 = [1, 2, 3, 4, 5];
const index = myArray6.findIndex((item) => item > 3);
console.log(index); // 3
