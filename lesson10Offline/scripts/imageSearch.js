async function Searcher() {
    // searchTerm
    let searchTerm = document.getElementById("searchTerm").value.trim();

    let apiData = await fetch(`https://robohash.org/${searchTerm}`)
    
    let img = document.createElement("img");

    img.src = apiData.url;
    
    let picAndBtn = document.querySelector('.resImg');

    picAndBtn.appendChild(img)
}