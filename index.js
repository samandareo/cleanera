// Get the modal and buttons
const modal = document.getElementById("modal");
const openModalBtn = document.getElementById("openModal");
const closeModalBtn = document.getElementById("closeModal");

// Open modal when button is clicked
openModalBtn.addEventListener("click", () => {
  modal.style.display = "flex";
});

// Close modal when 'x' is clicked
closeModalBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

// Close modal when clicking outside the modal content
window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});

function navigateToPage(url) {
    window.location.href = url;
}