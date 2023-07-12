const header = document.querySelector("#header");

  window.onscroll = function () {
    handleScroll();
  };

  const handleScroll = () => {
    if (window.pageYOffset > 90) {
      header.classList.add("bg-header-fixed");
    } else {
      header.classList.remove("bg-header-fixed");
    }
  };

  // callback run every time screen intersect an element
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("intersect-show");
      entry.target.classList.remove("intersect-hidden");
    } else {
      entry.target.classList.add("intersect-hidden");
      entry.target.classList.remove("intersect-show");
    }
  });
});

const elements = document.querySelectorAll(".intersect");
elements.forEach((element) => observer.observe(element));

console.log(
  `Obrigado por acessar nosso site! 😁 \n Solicite um orçamento agora em www.devmarlon.work!`
);

const navbar = document.querySelector("#navbar");
const buttonNavbar = document.querySelector("#button-navbar");

buttonNavbar.addEventListener("click", () => {
  navbar.classList.toggle("show-navbar");
  header.classList.toggle("show-navbar-header");
});

const linkNavbar = document.querySelectorAll(".link-navbar");

linkNavbar.forEach((link) =>
  link.addEventListener("click", () => {
    navbar.classList.remove("show-navbar");
    header.classList.remove("show-navbar-header");
  })
);

function checkIfIsScrolled() {
  const scrollY = window.scrollY;
  if (scrollY > 90) {
    header.classList.add("bg-header-fixed");
  }
}


checkIfIsScrolled();