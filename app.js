// const modals = document.querySelectorAll("[data-modal]");

// modals.forEach(function (trigger) {
//   trigger.addEventListener("click", function (event) {
//     event.preventDefault();
//     const modal = document.getElementById(trigger.dataset.modal);
//     modal.classList.add("open");
//     const exits = modal.querySelectorAll(".modal-exit");
//     exits.forEach(function (exit) {
//       exit.addEventListener("click", function (event) {
//         event.preventDefault();
//         modal.classList.remove("open");
//       });
//     });
//   });
// });

const modals = document.querySelectorAll(".modal");
const menuButton = document.querySelectorAll(".menu-button");
const mobileMenu = document.querySelector(".mobile-menu");

function closeModal(id) {
  document.getElementById(id).classList.remove("open");
}

menuButtons.forEach((button) => {
  button.addEventListener("click", () => {
    mobileMenu.classList.toggle("menu-open");
  });
});

// modals.forEach((modal) => {
//   modal.querySelector("button").addEventListener("click", () => {
//     closeModal(modal.classList[1]);
//   });

//   modal.addEventListener("click", (event) => {
//     if (event.target === modal) {
//       closeModal(modal.classList[1]);
//     }
//   });
// });
