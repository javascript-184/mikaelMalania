const users = ["Anna", "Tekle", "Nia", "irakli", "eka"];

const clonedUsers = [...users];
clonedUsers.pop()

// deep clone
const clonedUsersV2 = JSON.parse(JSON.stringify(users));

const clonedUsersV3 = users;

// clonedUsersV3.pop()
// console.log(users);
// console.log(users, clonedUsers, clonedUsersV2);
let newArr = users.concat();
newArr.pop()
console.log(newArr, users)