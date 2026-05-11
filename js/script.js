let Navbar = document.querySelector('.navbar');
let Fabars = document.querySelector('.fa-bars');

Fabars.onclick = () =>{
    Navbar.classList.toggle("active")
};

// Close navbar when a link is clicked
document.querySelectorAll('.navbar a').forEach(link => {
    link.onclick = () => {
        Navbar.classList.remove("active");
    };
});
