const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.style.backgroundColor = '#f0f0f0';
        navbar.style.color = '#333';
    } else {
        navbar.style.backgroundColor = '#333';
        navbar.style.color = '#fff';
    }
});

const navLinks = document.querySelectorAll('#navbar a');

navLinks.forEach(link => {
    link.addEventListener('mouseover', () => {
        link.style.color = '#ff0000'; // Change color on hover
    });

    link.addEventListener('mouseout', () => {
        link.style.color = '#fff'; // Reset color on mouseout
    });
});
