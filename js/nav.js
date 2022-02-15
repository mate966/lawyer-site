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
});
requestButton.addEventListener("click", () => {
    contactSection.scrollIntoView({ behavior: "smooth" });
});
aboutButton.addEventListener("click", () => {
    aboutSection.scrollIntoView({ behavior: "smooth" });
});
specializationsButton.addEventListener("click", () => {
    specializationsSection.scrollIntoView({ behavior: "smooth" });
});
contactButton.addEventListener("click", () => {
    contactSection.scrollIntoView({ behavior: "smooth" });
});
