// modal
const modals = document.querySelectorAll(".modal");
const menuButtons = document.querySelectorAll(".menu-button");
const mobileMenu = document.querySelector(".mobile-menu");

function closeModal(id) {
  document.getElementById(id).classList.remove("open");
}

menuButtons.forEach((button) => {
  button.addEventListener("click", () => {
    mobileMenu.classList.toggle("menu-open");
  });
});

// pc slider
// const slides = document.querySelectorAll(".slide-1");

// let counter = 1;

// const timer = () => {
//   setInterval(() => {
//     if (counter > slides.length - 1) {
//       counter = 1;
//       console.log(counter);
//       carouselTiming();
//     } else {
//       counter++;
//       console.log(counter);
//       carouselTiming();
//     }
//   }, 1000);
// };

// const carouselTiming = () => {
//   slides.forEach(function (slide) {
//     slide.style.transform = `translateY(-${counter * 100}%)`;

//   });
// };

// timer();

var Swipes = new Swiper(".swiper-container", {
  slidesPerView: 4,
  spaceBetween: 0,
  loop: true,
  cssMode: true,
  // navigation: {
  //   nextEl: ".swiper-button-next",
  //   prevEl: ".swiper-button-prev",
  // },
  // pagination: {
  //   el: ".swiper-pagination",
  // },
  mousewheel: true,
  keyboard: true,
  breakpoints: {
    1024: {
      slidesPerView: 9,
    },
  },
});
