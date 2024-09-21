// Question #1: Inventory Management

const inventory = {
  apple: { price: 35, quantity: 100 },
  banana: { price: 10, quantity: 50 },
};

// เริ่มเขียนโค้ดตรงนี้
let inventoryManagement = [];
inventoryManagement[0] = {name: "Apple", price: 35, quantity: 100},
inventoryManagement[1] = {name: "Banana", price: 10, quantity: 50},

inventoryManagement[0].price = 200;
inventoryManagement[2] = {name: "Orange", price: 20, quantity: 300}

let totalInventoryValue = 0;
for (let i = 0; i < inventoryManagement.length; i++) {
  let productItem = inventoryManagement[i];
  let totalValue = productItem.price * productItem.quantity;
  totalInventoryValue += totalValue;
}
console.log("Total inventory value: " + totalInventoryValue + " " + "baht");

/*
Question #1: *Inventory Management*

- สมมุติว่าคุณกำลังสร้างระบบการจัดการสินค้าสำหรับร้านขายของชำ
- สินค้าแต่ละชนิดถูกแทนด้วย Object ที่มี Property เช่น name, price และ quantity
- สิ่งที่ต้องทำคือ
    1. ให้แก้ไขจำนวนสินค้า Apple จาก 100 เป็น 200
    2. เพิ่มสินค้าใหม่ที่ชื่อ "orange" ที่มีราคา 20 บาท และมีจำนวน 300 ชิ้นในสต็อก
    3. คำนวณมูลค่ารวมของจำนวนสินค้าทั้งหมดในสต็อกด้วย Loop
    4. สุดท้าย ให้ Log มูลค่ารวมของจำนวนสินค้าทั้งหมดในสต็อกแสดงออกมาทางหน้าจอ Console ว่า `Total inventory value: <total-value> baht`
        - `<total-value>` คือ มูลค่ารวมของจำนวนสินค้าทั้งหมดในสต็อก
        - เช่น ถ้ามูลค่ารวมที่คำนวณออกมาแล้วเป็น 35000 บาท
        - ข้อความควรจะแสดงว่า `Total inventory value: 35000 baht`
*/