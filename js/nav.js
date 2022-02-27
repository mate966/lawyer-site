const navigateElements = document.querySelectorAll(".menu-element__navigate");
const requestButton = document.querySelector(".request-button");
const sections = document.querySelectorAll(".section");
const arrayOfNavigateElements = [...navigateElements];
const arrayOfSections = [...sections];

arrayOfNavigateElements.map((navigateElement) =>
    navigateElement.addEventListener("click", (e) => {
        const value = e.target.getAttribute("value");

        arrayOfSections.map((section) => {
            if (value === section.id) {
                section.scrollIntoView({ behavior: "smooth" });
                hamburger.classList.remove("is-active");
                menu.classList.remove("is-active");
            }
        });
    })
);
