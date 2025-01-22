sessionStorage.setItem('name', 'Chris'); // ახალი ელემენტის შექმნა გასაღებით: name და მნიშვნელობით Chris
sessionStorage.setItem('surname', 'Lee'); // ახალი ელემენტის შექმნა გასაღებით: surname და მნიშვნელობით Lee

let name = sessionStorage.getItem('name'); // ელემენტის მნიშვნელობის წამოღება გასაღების მითითებით

console.log(name);

sessionStorage.removeItem('name'); // ერთი ელემენტის წაშლა გასაღების მიხედვით ამ შემთხვევაში name წაიშლება

sessionStorage.clear(); // ყველა ელემენტის წაშლა