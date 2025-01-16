document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('button-cv').addEventListener('click', function() {
        var fileUrl = 'https://docs.google.com/document/d/13OdKePDpeJbgNxrp3pmLH207szHNnf-E/edit?usp=sharing&ouid=101942351453446807090&rtpof=true&sd=true'; // Link do arquivo no Google Drive
    
        // Abra o arquivo em uma nova aba
        window.open(fileUrl, '_blank');
    });
});
