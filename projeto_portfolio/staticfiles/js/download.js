document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('button-cv').addEventListener('click', function() {
        var fileUrl = 'https://drive.google.com/file/d/1ehFr_wDa-HQD9grmfybzPi3h4QonNvC6/view?usp=drive_link'; // Link do arquivo no Google Drive
    
        // Abra o arquivo em uma nova aba
        window.open(fileUrl, '_blank');
    });
});
