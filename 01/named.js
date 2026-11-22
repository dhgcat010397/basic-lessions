// Cách 1: Khai báo hàm, biến, class rồi export
const myVar = 20;

function myFunction() {
  const myVar = 10;
  console.log(myVar);
}

export { myFunction, myVar };

// Cách 2: Khai báo và export trực tiếp
export const myVar2 = 30;

export function myFunction2() {
  const myVar2 = 15;
  console.log(myVar2);
}

// Arrow function
let myFunction3 = () => {
  const myVar3 = 25;
  console.log(myVar3);
};

export { myFunction3 };
