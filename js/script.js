function toggleMenu() {
    var menu = document.getElementById('menuCollapse');
    var contact = document.getElementById('contactButton');

    if (menu.className == "open") {
        menu.style.display = "none";
        menu.className = "collapsed";
        contact.style.display = "none";
    } else {
        menu.style.display = "flex";
        menu.className = "open";
        contact.style.display = "block";
    }
}