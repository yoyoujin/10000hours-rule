// js file

const modal = document.getElementById('cont-modal');
const modalOpen = document.getElementById('btn-open');

modalOpen.addEventListener('click', (event) => {
  event.preventDefault();
  modal.classList.add('active');
});
