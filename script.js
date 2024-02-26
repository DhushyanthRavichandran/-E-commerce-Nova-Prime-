var sideenav = document.querySelector(".sidenav")
var navMenu = document.querySelector(".nav-menu")

function shownavbar() {
    sideenav.style.left = "0";
}

function hidenavbar() {
    sideenav.style.left = "-60%"; // Adjust the value to match your side navbar width
}

navMenu.addEventListener("click", function () {
    shownavbar();
});

sidenav.addEventListener("click", function () {
    hidenavbar();
});
