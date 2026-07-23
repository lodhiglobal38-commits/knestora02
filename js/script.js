// ==========================
// Knestora Main Script
// ==========================

document.addEventListener("DOMContentLoaded", () => {

    const menuBtn = document.getElementById("menu-btn");
    const closeBtn = document.getElementById("close-btn");
    const sideMenu = document.getElementById("side-menu");
    const overlay = document.getElementById("overlay");

    if (menuBtn && closeBtn && sideMenu && overlay) {

        menuBtn.addEventListener("click", () => {
            sideMenu.classList.add("active");
            overlay.classList.add("active");
        });

        closeBtn.addEventListener("click", () => {
            sideMenu.classList.remove("active");
            overlay.classList.remove("active");
        });

        overlay.addEventListener("click", () => {
            sideMenu.classList.remove("active");
            overlay.classList.remove("active");
        });

    }

});