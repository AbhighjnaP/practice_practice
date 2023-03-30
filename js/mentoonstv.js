const images = document.querySelectorAll('img');
let index = 0;

function showImage() {
  images.forEach(image => {
    image.style.opacity = 0;
  });
  images[index].style.opacity = 1;
  index++;
  if (index === images.length) {
    index = 0;
  }
}

setInterval(showImage, 5000);
