let Navbar = document.querySelector('.navbar');
let menuToggle = document.querySelector('.toggle-menu');

menuToggle.onclick = () => {
    Navbar.classList.toggle("active");
    document.body.classList.toggle("menu-open");
};

// Close navbar when a link is clicked
document.querySelectorAll('.navbar a').forEach(link => {
    link.onclick = () => {
        Navbar.classList.remove("active");
        document.body.classList.remove("menu-open");
    };
});

// Close menu when clicking outside the menu panel
document.addEventListener('click', (e) => {
    if (!Navbar.classList.contains("active")) return;

    const isClickInsideNavbar = Navbar.contains(e.target);
    const isClickOnToggle = menuToggle.contains(e.target);

    if (!isClickInsideNavbar && !isClickOnToggle) {
        Navbar.classList.remove("active");
        document.body.classList.remove("menu-open");
    }
});
