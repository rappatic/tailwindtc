var hamburger = document.querySelector(".hamburger");
var sidemenu = document.querySelector(".sidebar-pop");

hamburger.addEventListener("click", function() {
    hamburger.classList.toggle("is-active");
    sidemenu.classList.toggle("visible");
})
