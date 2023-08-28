function downloadPDF() {
    var link = document.createElement('a');
    link.href = './Resume Ussama Mustafa.pdf';
    link.download = 'Resume - Ussama Mustafa.pdf';
    link.click();
}