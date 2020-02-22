// Exactly as advertised.

function initHamburger() {

    var hamburger = document.querySelector(".hamburger");
    var sidemenu = document.querySelector(".sidebar-pop");

    hamburger.addEventListener("click", function() {
        hamburger.classList.toggle("is-active");
        sidemenu.classList.toggle("visible");
    });

}

// The functions below allow us to pop out the normally-invisible
// dropdown for the navigation if the user clicks on it. There are
// two functions because of my stupid decision to make individual
// navbars for smaller and larger devices.

function dropdown(did) {
    var dropdowns = ["abu", "join", "ach"];
    dropdowns.splice( dropdowns.indexOf(did), 1 );

    document.getElementById(dropdowns[0]).classList.add("invisible");
    document.getElementById(dropdowns[1]).classList.add("invisible");

    document.getElementById(did).classList.toggle("invisible");
}

function dropdownMobile(did) {
    var dropdowns = ["abu-mobile", "join-mobile", "ach-mobile"];
    dropdowns.splice( dropdowns.indexOf(did), 1 );

    var a = document.getElementsByClassName(dropdowns[0]);
    for(i=0; i<a.length; i++) {
        a[i].classList.add("invisible");
    }

    var b = document.getElementsByClassName(dropdowns[1]);
    for(i=0; i<b.length; i++) {
        b[i].classList.add("invisible");
    }

    var c = document.getElementsByClassName(did);
    
    for(i=0; i<c.length; i++) {
        c[i].classList.toggle("invisible");
    }

}