const readMoreButtons = document.querySelectorAll('.read-more');
readMoreButtons.forEach(button => {
  button.addEventListener('click', () => {
    const item = button.parentNode;
    const fullContent = item.querySelector('.full-content');
    fullContent.classList.toggle('show');
    button.textContent = fullContent.classList.contains('show') ? 'Read less' : 'Read more';
  });
});

function toggleCollapsible(button) {
  var content = button.nextElementSibling;
  if (content.style.display === "block") {
    content.style.display = "none";
  } else {
    content.style.display = "block";
  }
}

function downloadFile() {
  var link = document.getElementById("download-link");
  link.click();
}
