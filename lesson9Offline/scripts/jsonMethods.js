const personData = {
    firstName: "Nika",
    lastName: "Beridze",
    age: 23
};

console.log(personData.firstName);
console.log(JSON.stringify(personData).at(3), personData.firstName);

const personDataString = '{"firstName":"Nika","lastName":"Beridze","age":123}';

console.log(JSON.parse(personDataString)['lastName']);