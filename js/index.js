"use strict";

window.addEventListener("DOMContentLoaded", () => {
    AOS.init({ duration: 1500, delay: 200 });
    window.addEventListener("scroll", stickyNav);
    hamburger.addEventListener("click", hamburgerIsActive);
});

const nav = document.querySelector(".main-nav");
const contactNav = document.querySelector(".contact-nav");
const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".navigation");

const stickyNav = () => {
    let windowPosition = window.scrollY;
    if (windowPosition >= 914) {
        nav.classList.add("sticky");
    } else {
        nav.classList.remove("sticky");
    }
};

const hamburgerIsActive = () => {
    hamburger.classList.toggle("is-active");
    menu.classList.toggle("is-active");
};
