// Question #8: Fetching User List from Server

// เริ่มเขียนโค้ดตรงนี้
let getUsers = async () => {
    const response = await fetch ("https://jsonplaceholder.typicode.com/users");
    const data = await new Promise(resolve => setTimeout(() => resolve(response.json())));
    return data;
};

async function getNewUsers() {
    const Users = await getUsers();
    const newUsers = Users.map(function (user){return user.name}); 
    console.log(newUsers);
  }
   
getNewUsers();

/* map +function async
- ให้ Fetch ข้อมูล User จาก Server ของ Jsonplaceholder ด้วย Built-in `fetch` Function
- โดยกำหนดให้ Endpoint ในการ Fetch ข้อมูล User เป็น `https://jsonplaceholder.typicode.com/users`
- จากนั้น ให้แปลงโครงสร้างข้อมูลที่ได้จาก Server ให้เป็น Array ของชื่อ User แล้วเก็บไว้ใน Variable ชื่อว่า `newUsers`
- แล้วให้ Log ดู Value ของ `newUsers` มาแสดงบนหน้าจอ Console
- ผลลัพธ์ที่แสดงบน Console จะเป็น */