let Navbar = document.querySelector('.navbar');
let menuToggle = document.querySelector('.toggle-menu');

menuToggle.onclick = () =>{
    Navbar.classList.toggle("active")
};

// Close navbar when a link is clicked
document.querySelectorAll('.navbar a').forEach(link => {
    link.onclick = () => {
        Navbar.classList.remove("active");
    };
});

// Reload to home page on page refresh/load
window.addEventListener('load', () => {
    window.location.hash = '#home';
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
});
