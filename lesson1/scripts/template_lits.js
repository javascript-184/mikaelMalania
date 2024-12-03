let fullName = prompt("Enter your name:"); // ყოველთვის შემოსული მონაცემების დამახსოვრება ხდება როგორც სტრიქონი.
let birthYear = prompt("Enter your birth year:");
alert(`Hello, ${fullName}! As I see you're ${2024-Number(birthYear)}`); // <== დინამიური მონაცემი

console.log("Hello,"+fullName+" As I see you're "+(2024-Number(birthYear)))