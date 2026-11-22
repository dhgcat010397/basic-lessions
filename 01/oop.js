/*
1. Objects là gì?
Objects trong Javascript được sử  dụng để nhóm các giá trị lại với nhau.
Chúng cho phép tổ chức dữ liệu dưới dạng các cặp key-value,
trong đó key là tên của thuộc tính và value là giá trị của thuộc tính đó.
2. Cách tạo Object
Có nhiều cách để tạo Object trong Javascript, bao gồm:
- Sử dụng cú pháp Object literal: const obj = { key1: value1, key2: value2 };
- Sử dụng cú pháp Object constructor: const obj = new Object();
*/

const user = {
  // thuộc tính
  name: "Cát",
  age: 29,
  hobbies: ["Đọc sách", "Du lịch", "Chơi thể thao"],
  "giới tính": "Nam",

  // phương thức
  greet: function () {
    console.log(`Xin chào, tôi là ${this.name}.`);
    console.log(`Tôi ${this.age} tuổi.`);
    console.log(`Giới tính của tôi là ${this["giới tính"]}.`);
  },

  soThich: function () {
    console.log(`Sở thích của tôi là: ${this.hobbies.join(", ")}.`);
    return this.hobbies;
  },

  tamBiet() {
    console.log(`Tạm biệt, tôi là ${this.name}.`);
  },
};

console.log(user);
console.log(user.name);
console.log(user.age);
console.log(user["giới tính"]);
console.log(user.greet());

// class
class User {
  constructor(name, age, gender, hobbies) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.hobbies = hobbies;
  }

  greet() {
    console.log(`Xin chào, tôi là ${this.name}.`);
    console.log(`Tôi ${this.age} tuổi.`);
    console.log(`Giới tính của tôi là ${this.gender}.`);
  }

  soThich() {
    console.log(`Sở thích của tôi là: ${this.hobbies.join(", ")}.`);
    return this.hobbies;
  }

  tamBiet() {
    console.log(`Tạm biệt, tôi là ${this.name}.`);
  }
}

const user1 = new User("Cát", 29, "Nam", [
  "Đọc sách",
  "Du lịch",
  "Chơi thể thao",
]);
console.log(user1);
console.log(user1.name);
user1.greet();
user1.soThich();
user1.tamBiet();

const user2 = new User("Hà", 25, "Nữ", ["Nấu ăn", "Xem phim"]);
console.log(user2);
console.log(user2.name);
user2.greet();
user2.soThich();
user2.tamBiet();
