let navTglBtn = document.querySelectorAll(".nav-tgl");
let navBar = document.querySelector("#nav-bar");
const mainContent = document.querySelector("main");

navTglBtn.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    event.stopPropagation();
    if (navBar.classList.contains("-translate-x-full")) {
      navBar.classList.remove("-translate-x-full");
    } else {
      navBar.classList.add("-translate-x-full");
    }
  });
});
mainContent.addEventListener("click", (e) => {
  if (!navBar.classList.contains("-translate-x-full")) {
    navBar.classList.add("-translate-x-full");
  }
});
