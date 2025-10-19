// Personal Website JavaScript
// This file will handle interactivity and animations

document.addEventListener('DOMContentLoaded', function() {
    console.log('Website loaded successfully!');
    
    // Add smooth scrolling for future navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});
