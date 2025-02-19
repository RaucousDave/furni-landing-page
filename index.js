const scale_up = document.querySelectorAll(".scale-up");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    entry.target.classList.toggle("show", entry.isIntersecting);
    console.log(entry);
  }),
    {
      threshold: 1,
    };
});

scale_up.forEach((scale) => {
  observer.observe(scale);
});

const menu = document.querySelector(".menu");
const close = document.querySelector(".close");
const mobileMenu = document.querySelector(".mobile-menu");

menu.addEventListener("click", () => {
  mobileMenu.classList.toggle("show");
  menu.classList.toggle("active");
});
