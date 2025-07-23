document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const navLinksList = document.querySelectorAll('.nav-links li a'); // Select all individual nav links

    if (menuToggle && navLinks) {
        // Toggle menu visibility
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });

        // Hide menu when a link is clicked (for single-page navigation)
        navLinksList.forEach(link => {
            link.addEventListener('click', () => {
                if (navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                }
            });
        });
    }
});