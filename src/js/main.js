let header = document.querySelector("header");
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");




menuIcon.onclick = () => {
  navbar.classList.toggle("hidden");
};

window.onscroll = () => {
  navbar.classList.add("hidden");
};

window.addEventListener('scroll', () => {
  header.classList.toggle("shadow", window.scrollY > 0);
  menuIcon.classList.toggle("text-textColor", window.scrollY > 0);
});

/*
=================================================
*/ 