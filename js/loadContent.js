// This disguisting abomination was my attempt to
// make the navigation bar easier to maintain across
// a dozen pages. It pulls HTML from "navbar.html" then
// slots it into the div where the navbar code would
// ordinarily go. If you modify navbar.html, the changes
// made take effect across all pages of the site.

function includeHTML() {
  var z, i, elmnt, file, xhttp;
  z = document.getElementsByTagName("*");
  for (i = 0; i < z.length; i++) {
    elmnt = z[i];
    file = elmnt.getAttribute("navbar-loader");
    if (file) {
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
          if (this.status == 200) {elmnt.innerHTML = this.responseText;}
          if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
          elmnt.removeAttribute("navbar-loader");
          includeHTML();
        }
      }
      xhttp.open("GET", file, false);
      xhttp.send();
      return;
    }
  }
}
