
const $menuBtn = document.querySelector(".menu-btn");
const snbwrap = document.querySelector(".snb_wrap")
let isMenuOpen = false;
$menuBtn.addEventListener("click", () => {
  if (!isMenuOpen) {
    $menuBtn.classList.add("open");
    snbwrap.classList.add("on");
  } else {
    $menuBtn.classList.remove("open");
    snbwrap.classList.remove("on");
  }

  isMenuOpen = !isMenuOpen;
});


