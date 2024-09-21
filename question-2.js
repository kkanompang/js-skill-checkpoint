// Question #2: User Task List

const userTaskList = [
  { id: 1, task: "Buy groceries" },
  { id: 2, task: "Finish homework" },
  { id: 3, task: "Call mom" },
  { id: 4, task: "Wash dishes" },
];

// เริ่มเขียนโค้ดตรงนี้
let userTaskListUpdated = userTaskList;
userTaskListUpdated = [];
userTaskListUpdated[0] = { id: 1, task: "Buy groceries" },
userTaskListUpdated[1] = { id: 2, task: "Finish homework" },
userTaskListUpdated[2] = { id: 3, task: "Call mom" },
userTaskListUpdated[3] = { id: 4, task: "Wash dishes" },

userTaskListUpdated[4] = { id: 5, task: "Walk the dog" };
userTaskListUpdated[3].task = "Go to the gym"

userTaskListUpdated.pop()

let lastTask = userTaskListUpdated[userTaskListUpdated.length - 1];
console.log(`Task id: ${lastTask.id}, ${lastTask.task}`);


/*1) เพิ่ม Task ใหม่ชื่อว่า `"Walk the dog"` ไปที่ส่วนท้ายของ `userTaskList` ซึ่ง Task นี้จะมี `id` เป็น `5`

2) ให้แก้ไขชื่อ Task ที่มี `id` เป็น `4` จาก `"Wash dishes"` เป็น `"Go to the gym"`

3) ลบ Task สุดท้ายที่อยู่ใน Array ออก

4) ให้ Log ข้อความของ Task ตัวสุดท้ายที่อยู่ในรายการออกมาบนหน้าจอ Console

- ผลลัพธ์ที่แสดงบนหน้าจอ Console จะแสดงแบบนี้ `"Task id: 4, Go to the gym"`
*/