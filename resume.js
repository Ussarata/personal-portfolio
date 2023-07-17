function downloadPDF() {
    var link = document.createElement('a');
    link.href = './Resume - Ussama Mustafa.pdf';
    link.download = 'resume.pdf';
    link.click();
}