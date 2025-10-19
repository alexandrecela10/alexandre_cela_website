// Personal Website JavaScript
// This file will handle interactivity and animations

document.addEventListener('DOMContentLoaded', function() {
    console.log('Website loaded successfully!');
    
    // Fade in animation for intro section
    const introSection = document.querySelector('.intro-section');
    if (introSection) {
        setTimeout(() => {
            introSection.style.opacity = '1';
        }, 100);
    }
    
    // Scroll-triggered animations
    const observerOptions = {
        threshold: 0.2,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);
    
    // Observe sections for scroll animations
    const valueSection = document.querySelector('.value-section');
    const sideSection = document.querySelector('.side-section');
    
    if (valueSection) {
        observer.observe(valueSection);
    }
    
    if (sideSection) {
        observer.observe(sideSection);
    }
    
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
