// The disgusting abomination below was my attempt to make
// the navbar and footer easier to maintain across a dozen
// pages. This code will pull HTML from "navbar.html" and
// "footer.html" and slot it into their respective places
// across all pages, so if you modify those files, the changes
// made take place across the entire site.

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
