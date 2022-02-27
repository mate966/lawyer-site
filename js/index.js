"use strict";

window.addEventListener("DOMContentLoaded", () => {
    AOS.init({ duration: 1000 });
    window.addEventListener("scroll", stickyNav);
    hamburger.addEventListener("click", hamburgerIsActive);
});

const nav = document.querySelector(".navigation");
const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");

const stickyNav = () => {
    let windowPosition = window.scrollY;
    if (windowPosition >= 814) {
        nav.classList.add("sticky");
        nav.classList.remove("wrapper");
    } else {
        nav.classList.remove("sticky");
        nav.classList.add("wrapper");
    }
};

const hamburgerIsActive = () => {
    hamburger.classList.toggle("is-active");
    menu.classList.toggle("is-active");
};
