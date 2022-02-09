const stickyNav = () => {
    const nav = document.querySelector(".main-nav");
    let windowPosition = window.scrollY;
    if (windowPosition >= 914) {
        nav.classList.add("sticky");
        nav.classList.remove("wrapper");
    } else {
        nav.classList.add("wrapper");
        nav.classList.remove("sticky");
    }
};

window.addEventListener("scroll", stickyNav);
