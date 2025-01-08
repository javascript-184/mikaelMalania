fetch('../fakeData.json').then(async (data) => {
    console.log(await data.text())
}).catch((e) => console.log("Error happend", e))
