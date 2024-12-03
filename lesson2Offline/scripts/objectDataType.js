let firstName = "tekla";

// ინდექსები აღნიშნავენ მასივში არსებული ელემენტების ადგილმდებარეობებს
let firstNames = ["giorgi", "tekla", "nika"]; // array

let shopingCard = [
    {
        itemType: "clothing",
        itemName: "T-Shirt",
        itemSize: "M",
        itemBrand: "Zara"
    },
    {
        itemType: "clothing",
        itemName: "Pants",
        itemSize: "L",
        itemBrand: "Zara"
    },
];

let person = {
    firstName: "nika",
    lastName: "kopliani",
    age: 35,
    isMaried: true,
    children: [{
        firstName: "Nick",
        lastName: "kopliani",
        age: 7,
        hobbies: [{
            name: 'astronomy',
            use: 'discovery of new horizons'
        }]
    },
    {
        firstName: "Kate",
        lastName: "kopliani",
        age: 5
    } ]
} 

let persons = [
    {
        firstName: "nika",
        lastName: "kopliani",
        age: 35,
        isMaried: true,
        children: [
            {
                firstName: "Nick",
                lastName: "kopliani",
                age: 7,
                hobbies: [
                    {
                        name: 'astronomy',
                        use: 'discovery of new horizons'
                    }
                ]
            },
            {
                firstName: "Kate",
                lastName: "kopliani",
                age: 5
            }
        ]
    },
    {
        firstName: "ana",
        lastName: "beridze",
        age: 28,
        isMaried: false,
        children: []
    },
    {
        firstName: "giorgi",
        lastName: "maisuradze",
        age: 42,
        isMaried: true,
        children: [
            {
                firstName: "Luka",
                lastName: "maisuradze",
                age: 10,
                hobbies: [
                    {
                        name: 'football',
                        use: 'physical activity and teamwork'
                    },
                    {
                        name: 'painting',
                        use: 'creative expression'
                    }
                ]
            }
        ]
    }
];
// object

// ობიექტში მონაცემების დამატება
person.address = "Tbilisi";
person["profession"] = "Programmer";
// console.log(person)
// ობიექტში არსებული მონაცემების განახლება (თავზე გადაწერა)
person.age = 40;
person["profession"] = "Web developer";

// ობიექტში არსებული მონაცემების წაშლა
delete person.age;
delete person["profession"];

console.log(persons[2].children[0].hobbies[0].use);