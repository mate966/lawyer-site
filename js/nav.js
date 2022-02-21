const requestButton = document.querySelector(".request-button"),
    aboutSection = document.querySelector("#about"),
    specializationsSection = document.querySelector("#specializations"),
    contactSection = document.querySelector("#contact"),
    homeButton = document.querySelector(".home-nav"),
    aboutButton = document.querySelector(".about-nav"),
    specializationsButton = document.querySelector(".specializations-nav"),
    contactButton = document.querySelector(".contact-navi");

homeButton.addEventListener("click", () => {
    window.scrollTo(0, 0);
    hamburger.classList.remove("is-active");
    menu.classList.remove("is-active");
});

requestButton.addEventListener("click", () => {
    contactSection.scrollIntoView({ behavior: "smooth" });
    hamburger.classList.remove("is-active");
    menu.classList.remove("is-active");
});
aboutButton.addEventListener("click", () => {
    aboutSection.scrollIntoView({ behavior: "smooth" });
    hamburger.classList.remove("is-active");
    menu.classList.remove("is-active");
});
specializationsButton.addEventListener("click", () => {
    specializationsSection.scrollIntoView({ behavior: "smooth" });
    hamburger.classList.remove("is-active");
    menu.classList.remove("is-active");
});
contactButton.addEventListener("click", () => {
    contactSection.scrollIntoView({ behavior: "smooth" });
    hamburger.classList.remove("is-active");
    menu.classList.remove("is-active");
});
