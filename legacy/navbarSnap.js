window.onscroll = function() {navbarSnap()};

var navbarHeader = document.getElementById("sticky-header-snap");
var sticky = navbarHeader.offsetTop;

function navbarSnap() {
    if ((window.pageYOffset > sticky)) {
        navbarHeader.classList.add("visible-header-snap");
        navbarHeader.classList.remove("invisible");
    }
    else {
        navbarHeader.classList.remove("visible-header-snap");
        navbarHeader.classList.add("invisible");
    }
}
