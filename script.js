
let menuBtn = document.querySelector(".menu-btn");
let navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("open")
})