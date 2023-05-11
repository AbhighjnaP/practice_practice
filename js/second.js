//function openModal(imagePath) {
   // var modalContainer = document.getElementById("modal-container");
  //  var modalImage = document.getElementById("modal-image");
   // modalImage.src = imagePath;
  //  modalContainer.style.display = "block";
//  }
  
 // function closeModal() {
//    var modalContainer = document.getElementById("modal-container");
 //   modalContainer.style.display = "none";
  //}
  var modalContainer = document.getElementById("modal-container");
  var modalImage = document.getElementById("modal-image");

  function toggleModal(imageSrc) {
    if (modalContainer.style.display === "block") {
      closeModal();
    } else {
      openModal(imageSrc);
    }
  }

  function openModal(imageSrc) {
    modalImage.src = imageSrc;
    modalContainer.style.display = "block";
  }
  
  function closeModal() {
    var modalContainer = document.getElementById("modal-container");
    modalContainer.style.display = "none";
  }

  function redirectToForm() {
    window.location.href = "Featured.html";
  }
  
  