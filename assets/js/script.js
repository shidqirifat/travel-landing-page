const menuBtn = document.querySelector(".menu-icon");
const menuNav = document.querySelector(".menu-nav");
const closeNav = document.querySelector(".close-nav");
const headerNav = document.querySelector("header nav");
const btnTop = document.querySelector(".btn-top");

const links = document.querySelectorAll(".link");
const sections = document.querySelectorAll("section");

const activeLink = () => {
  let sectionLength = sections.length;
  while (--sectionLength && window.scrollY + 55 < sections[sectionLength].offsetTop) { }
  links.forEach(link => {
    link.classList.remove("open");
  });

  links[sectionLength].classList.add("open");
  menuNav.classList.remove("active");
}

window.addEventListener("scroll", activeLink);


window.onscroll = function () {
  if (document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20) {
    headerNav.classList.add("nav-scroll");
  }
  else headerNav.classList.remove("nav-scroll");

  if (document.body.scrollTop > 300 ||
    document.documentElement.scrollTop > 300) {
    btnTop.classList.add("active");
    btnTop.addEventListener("click", () => {
      document.documentElement.scrollTop = 0;
    })
  }
  else btnTop.classList.remove("active");
}


menuBtn.addEventListener("click", () => {
  menuNav.classList.add("active");
});

closeNav.addEventListener("click", () => {
  menuNav.classList.remove("active");
});