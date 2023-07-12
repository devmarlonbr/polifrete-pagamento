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