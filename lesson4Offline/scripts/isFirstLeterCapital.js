// უნდა გავიქოთ პაროლის პირველი სიმბოლო არის თუ არა დიდი ასობგერით დაწერილი

let password = "P@ssw0rd";

if (password.at(0) === password.at(0).toUpperCase()) {
    console.log("Its capital letter")
} else {
    console.log("Its not a capital letter")
}