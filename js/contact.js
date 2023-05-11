function downloadBook() {
  // Replace "book-url" with the actual URL of your book file
  var bookUrl = "E:\Mentoons\practice_practice\Images\Book 2 - Electronic gadgets and kids-01.jpg";
  var filename = "Gadgets and you.pdf"; // replace "book.pdf" with the desired filename for the downloaded file

  var a = document.createElement('a');
  a.href = bookUrl;
  a.download = filename;
  a.click();
}
function goBack() {
  window.history.back();
}