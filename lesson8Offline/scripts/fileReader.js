function saveFile() {}

function loadFile() {
    return new Promise((resolve, reject) => {
        const fileInput = document.getElementById('fileInput');
        console.log(fileInput.files[0])
        const file = fileInput.files[0];

        if (file) {
            const reader = new FileReader();
            
            reader.readAsText(file);

            reader.onload = function (event) {
                document.getElementById('textInput').value = event.target.result;
            };

        }
    })
}

function saveFile() {
    const textToSave = document.getElementById('textInput').value;
    const blob = new Blob([textToSave], {type: 'text/plain'});
    const fileName = prompt('Enter file name: ', 'note.txt');

    if (fileName) {
        const downloadLink = document.getElementById('downloadLink');
        downloadLink.href = window.URL.createObjectURL(blob);
        downloadLink.download = fileName;
        downloadLink.style.display = 'block';
    }
}