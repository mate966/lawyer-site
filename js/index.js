"use strict";

window.addEventListener("DOMContentLoaded", () => {
    window.addEventListener("scroll", stickyNav);
    hamburger.addEventListener("click", hamburgerIsActive);
});

const nav = document.querySelector(".main-nav");
const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".navigation");

const stickyNav = () => {
    let windowPosition = window.scrollY;
    if (windowPosition >= 914) {
        nav.classList.add("sticky");
        nav.classList.remove("wrapper");
    } else {
        nav.classList.add("wrapper");
        nav.classList.remove("sticky");
    }
};

const showMenu = () => {};

const hamburgerIsActive = () => {
    hamburger.classList.toggle("is-active");

    showMenu();
};
