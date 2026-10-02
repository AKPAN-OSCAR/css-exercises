const openButton = document.getElementById('trigger-modal');
const closeButton = document.getElementById('close-modal');

function toggleModal() {
  const modalDiv = document.querySelector('.my-popup');
  const backdrop = document.querySelector('.backdrop');
  modalDiv.classList.toggle('show');
  backdrop.classList.toggle('show');
}

openButton.addEventListener('click', toggleModal);
closeButton.addEventListener('click', toggleModal);