async function searchImages() {
    let searchTerm = document.getElementById("searchTerm").value.trim();

    let apiData = await fetch(`https://api.pexels.com/v1/search?query=${searchTerm}&per_page=9`, {
        headers: {
            Authorization: "zZG1Wwk2Trr9IGzpiyDaPFwVQhgXxcBcAgbZw3xgvnIGuYrdlcO9ieDh"
        }
    });

    apiData = await apiData.json();

    let oldPicCollage = document.querySelector('.picCollage');
    if (oldPicCollage) {
        oldPicCollage.remove();
    }

    let picCollage = document.createElement('div');
    picCollage.className = 'picCollage';

    let imagesRow1 = document.createElement('div');
    imagesRow1.className = 'imagesRow1';

    let imagesRow2 = document.createElement('div');
    imagesRow2.className = 'imagesRow2';

    let imagesRow3 = document.createElement('div');
    imagesRow3.className = 'imagesRow3';

    apiData.photos.forEach((photo, index) => {
        let img = document.createElement('img');
        img.src = photo.src.original;
        img.alt = photo.photographer;
        img.id = "resultImg";

        if (index < 3) {
            imagesRow1.appendChild(img);
        } else if (index < 6) {
            imagesRow2.appendChild(img);
        } else {
            imagesRow3.appendChild(img);
        }
    });

    // imagesRow1.style.display = 'flex';
    // imagesRow2.style.display = 'flex';
    // imagesRow3.style.display = 'flex';

    // imagesRow1.style.justifyContent ='space-between';
    // imagesRow2.style.justifyContent ='space-between';
    // imagesRow3.style.justifyContent ='space-between';

    // // border-radius: 10px;

    // imagesRow1.style.borderRadius = 10;
    // imagesRow2.style.borderRadius = 10;
    // imagesRow3.style.borderRadius = 10;

    // picCollage.style.display = 'flex';
    // picCollage.style.flexDirection = 'column';
    // picCollage.style.alignItems = 'center';

    picCollage.appendChild(imagesRow1);
    picCollage.appendChild(imagesRow2);
    picCollage.appendChild(imagesRow3);

    document.body.appendChild(picCollage);

}