function myFunction() {
    var x = document.getElementById("myNavList");
    if (x.className === "nav-list") {
        x.className += " responsive";
    } else {
        x.className = "nav-list";
    }
}
