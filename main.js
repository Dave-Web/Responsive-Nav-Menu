/* toggle hamburger */

const toggle = document.querySelector(".toggle");
const menu = document.querySelector(".nav-menu");

function toggleNavMenu() {
    if (menu.classList.contains("active")) {
        menu.classList.remove("active");
        /* add hamburger icon */
        toggle.querySelector("a").innerHTML = "<i class='fas fa-bars'></i>";
    } else {
        menu.classList.add("active");

        /* add X icon */
        toggle.querySelector("a").innerHTML = "<i class='fas fa-times'></i>";
    }
}

/* event listen */
toggle.addEventListener("click", toggleNavMenu, false);

/* drop down menu */

const items = document.querySelectorAll(".item");

function toggleItem() {
    if (this.classList.contains("drop-down-menu-active")) {
        this.classList.remove("drop-down-menu-active");
    } else {
        this.classList.add("drop-down-menu-active");
    }
}

/* drop down event listen */
for (let item of items) {
    if (item.querySelector(".drop-down-menu")) {
        item.addEventListener("click", toggleItem, false);
        item.addEventListener("keypress", toggleItem, false);
    }
}

/* drop down event listen */
for (let item of items) {
    if (item.querySelector(".drop-down-menu")) {
        item.addEventListener("click", toggleItem, false);
        item.addEventListener("keypress", toggleItem, false);
    }
}

/* close drop down from clicking anywhere */
function closeDropDown (event) {
    let isClickInside = menu.contains(event.target);

    if (!isClickInside && menu.querySelector(".drop-down-menu-active")) {
        menu.querySelector(".drop-down-menu-active").classList.remove("drop-down-menu-active");
    }
}

/* Listener */
document.addEventListener("click", closeDropDown, false);