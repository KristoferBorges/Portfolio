document.getElementById('button-cv').addEventListener('click', function() {
    var fileUrl = 'https://drive.google.com/file/d/1racF38dJgbW8eSoKCH3Z_e6c7xBHgxSB/view'; // Link do arquivo no Google Drive

    // Abra o arquivo em uma nova aba
    window.open(fileUrl, '_blank');
});