let students = [
    "Alice", "Bob", "Charlie", "Diana", "Ethan", 
    "Fiona", "George", "Hannah", "Ian", "Julia", 
    "Kevin", "Lily", "Mason", "Nina", "Oliver", 
    "Paula", "Quinn", "Ryan", "Sophia", "Tom"
];

let aGroup = [];
let bGroup = [];

let index = 0;

while (index < students.length) {
    if (index % 2 === 0) {
        bGroup.push(students[index])
    } else {
        aGroup.push(students[index])
    }
    index = index + 1
}

console.log(`A group students are: "${aGroup.join(", ")}"`)
console.log(`B group students are: "${bGroup.join(", ")}"`)