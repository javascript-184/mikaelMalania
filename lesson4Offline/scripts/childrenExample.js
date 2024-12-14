let children = ["Nika", "Zuka", "Misho", "Keti", "Tako", "Mari", "Guliko", "Ajela", "Vaso", "Saba"];

let groupA = [];
let groupB = [];

for (let index = 0; index < children.length; index++) {
    if (index % 2 === 0) {
        groupA.push(children[index]);
    } else {
        groupB.push(children[index]);
    };
};

console.log(groupA);
console.log(groupB);