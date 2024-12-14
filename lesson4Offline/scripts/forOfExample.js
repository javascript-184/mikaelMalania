let children = ["Nika", "Zuka", "Misho", "Keti", "Tako", "Mari", "Guliko", "Ajela", "Vaso", "Saba"];

// for (let index = 0; index < children.length; index++) {
//     console.log(children[index], index)
// }

for (let child of children) {
    console.log(child);
};


// შექმენით პიროვნებებისაგან შემდგარი მასივი, თითოეულ პიროვნებას უნდა გააჩნდეს სახელი, გვარი, ასაკი, გაფილტრეთ ის პიროვნებები რომელთა ასაკიც ნაკლებია 18-ზე და გამოიტანეთ ისინი როგორც არასრულწოვანები ცალკე, ასევე ცალკე გამოიტანეთ იმ პიროვნებათა ასაკი რომლებიც არიან სრულწლოვანები, სტრიქონულ ფორმატში მაგ . არასრუწლოვანები: nika, misho, keti, სრულწლოვანები: tako, eldari, darejani.