// Question #7: Array Merging

const firstProductList = [
  { id: 1, name: "Laptop", price: 1000 },
  { id: 2, name: "Smartphone", price: 700 },
];

const secondProductList = [
  { id: 3, name: "Tablet", price: 500 },
  { id: 4, name: "Headphones", price: 150 },
];

// เริ่มเขียนโค้ดตรงนี้
let newProductList = [];
for (let i = 0; i < firstProductList.length; i++) {
  newProductList.push(firstProductList[i]);
}
for (let i = 0; i < secondProductList.length; i++) {
  newProductList.push(secondProductList[i]);
}
console.log(newProductList);

/* loop+push สร้าง array เปล่า ให้มันเข้าไป */
/* - ให้เขียนโค้ดในการรวม Value ของ Array `firstProductList` เข้ากับ `secondProductList`
- จากนั้นให้นำผลลัพธ์ใส่ไว้ใน Variable ชื่อว่า `newProductList`
- แล้วให้ Log เพื่อดู Value ของ `newProductList`
- ผลลัพธ์ที่แสดงบนหน้าจอ Console จะได้ */