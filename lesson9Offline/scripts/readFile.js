fetch("silabusi.txt").then(openFile => {
    openFile.text().then(res => {
        console.log(res, "Here goes data");
    });
});