// JavaScript for hamburger menu
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('change', function() {
    if (this.checked) {
        navLinks.style.display = 'flex';
    } else {
        navLinks.style.display = 'none';
    }
});
