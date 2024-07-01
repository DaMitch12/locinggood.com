// Floating header fade effect
window.addEventListener('scroll', function() {
    var header = document.getElementById('floating-header');
    var scrollPosition = window.scrollY;
    if (scrollPosition > 100) {
        header.style.opacity = Math.max(0, 1 - scrollPosition / 300);
    } else {
        header.style.opacity = 1;
    }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Contact form submission handling
document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    this.reset();
});
