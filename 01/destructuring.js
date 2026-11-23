// Destructuring Arrays

// giả sử chúng ta có 1 mảng như sau:
const userName = ["Toàn", "Hà", "Huy"];

// Nếu muốn lấy ra các phần tử trong mảng trên, chúng ta sẽ làm như sau:
const user1 = userName[0];
const user2 = userName[1];
const user3 = userName[2];
console.log(user1, user2, user3); // Toàn, Hà, Huy

// Nhưng nếu mảng có nhiều phần tử, thì cách trên sẽ rất dài dòng và khó đọc,
// nên chúng ta sẽ sử dụng destructuring để lấy ra các phần tử trong mảng trên:
const [userA, userB, userC] = userName;
console.log(userA, userB, userC); // Toàn, Hà, Huy

// Có thể bỏ qua phần tử không cần thiết bằng cách để dấu phẩy
const [userX, , userZ] = userName;
console.log(userX, userZ); // Toàn, Huy

// Destructuring với giá trị mặc định
const [userM, userN, userO, userP = "Nguyễn"] = userName;
console.log(userM, userN, userO, userP); // Toàn, Hà, Huy, Nguyễn

// Destructuring với rest parameter
// rest sẽ là 1 mảng chứa các phần tử còn lại, có thể đặt bất kỳ tên nào (ví dụ: userRest, ...),
// nhưng thường đặt là rest
const [userI, ...rest] = userName;
console.log(userI);
console.log(rest);

// Destructuring Objects

// giả sử chúng ta có 1 object như sau:
const user = {
  name: "Toàn",
  age: 29,
  gender: "Nam",
};

// Nếu muốn lấy ra các thuộc tính trong object trên, chúng ta sẽ làm như sau:
const uName = user.name;
const uAge = user.age;
const uGender = user.gender;
console.log(uName, uAge, uGender); // Toàn, 29, Nam

// Nhưng nếu object có nhiều thuộc tính, thì cách trên sẽ rất dài dòng và khó đọc,
// nên chúng ta sẽ sử dụng destructuring để lấy ra các thuộc tính trong object trên:
const { name, age, gender } = user;
console.log(name, age, gender); // Toàn, 29, Nam

// Có thể đổi tên biến khi destructuring bằng cách sử dụng dấu hai chấm
const { name: uName1, age: uAge1, gender: uGender1 } = user;
console.log(uName1, uAge1, uGender1); // Toàn, 29, Nam

// Destructuring với giá trị mặc định
const { name: uName2, age: uAge2, gender: uGender2, address = "Hà Nội" } = user;
console.log(uName2, uAge2, uGender2, address); // Toàn, 29, Nam, Hà Nội

// Destructuring với rest parameter
// rest sẽ là 1 object chứa các thuộc tính còn lại, có thể đặt bất kỳ tên nào (ví dụ: userRest, ...),
// nhưng thường đặt là rest
const { name: uName3, ...rest1 } = user;
console.log(uName3);
console.log(rest1);

// Destructuring trong function parameters

// giả sử chúng ta có 1 đối tương đơn hàng
const order = {
  id: 1,
  product: "Laptop",
  price: 1000,
  quantity: 2,
};

// Nếu muốn lấy ra các thuộc tính trong object trên, chúng ta sẽ làm như sau:
function processOrder(order) {
  const id = order.id;
  const product = order.product;
  const price = order.price;
  const quantity = order.quantity;
  console.log(id, product, price, quantity);
}
// gọi hàm
processOrder(order); // 1, Laptop, 1000, 2

// Nhưng nếu object có nhiều thuộc tính, thì cách trên sẽ rất dài dòng và khó đọc,
// nên chúng ta sẽ sử dụng destructuring để lấy ra các thuộc tính trong object trên:
function processOrder2({ id, product, price, quantity }) {
  console.log(id, product, price, quantity);
}
// gọi hàm
processOrder2(order); // 1, Laptop, 1000, 2
