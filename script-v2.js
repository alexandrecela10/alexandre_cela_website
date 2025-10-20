// Interactive Case Study Filtering System

document.addEventListener('DOMContentLoaded', function() {
    
    // Get all filter buttons and case study cards
    const filterButtons = document.querySelectorAll('.filter-btn');
    const caseStudyCards = document.querySelectorAll('.case-study-card');
    const offerLinks = document.querySelectorAll('.offer-link');
    
    // Filter case studies by tag
    function filterCaseStudies(filterValue) {
        caseStudyCards.forEach(card => {
            const tags = card.getAttribute('data-tags');
            
            if (filterValue === 'all') {
                card.classList.remove('hidden');
                card.style.animation = 'fadeIn 0.5s ease';
            } else {
                if (tags.includes(filterValue)) {
                    card.classList.remove('hidden');
                    card.style.animation = 'fadeIn 0.5s ease';
                } else {
                    card.classList.add('hidden');
                }
            }
        });
    }
    
    // Handle filter button clicks
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Get filter value and filter case studies
            const filterValue = this.getAttribute('data-filter');
            filterCaseStudies(filterValue);
        });
    });
    
    // Handle offer card "View Case Studies" link clicks
    offerLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Get the filter value from the link
            const filterValue = this.getAttribute('data-filter');
            
            // Scroll to case studies section
            const caseStudiesSection = document.getElementById('case-studies');
            caseStudiesSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            
            // Wait for scroll to complete, then filter
            setTimeout(() => {
                // Update active filter button
                filterButtons.forEach(btn => {
                    btn.classList.remove('active');
                    if (btn.getAttribute('data-filter') === filterValue) {
                        btn.classList.add('active');
                    }
                });
                
                // Filter the case studies
                filterCaseStudies(filterValue);
            }, 800);
        });
    });
    
    // Smooth scroll for all anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            
            // Skip if it's a filter link (already handled above)
            if (this.classList.contains('offer-link')) {
                return;
            }
            
            if (href !== '#') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
    
    // Add scroll animations for sections
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe all sections
    document.querySelectorAll('section').forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        observer.observe(section);
    });
    
    // Add hover effect to offer cards
    const offerCards = document.querySelectorAll('.offer-card');
    offerCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // Add CSS animation for fade in
    const style = document.createElement('style');
    style.textContent = `
        @keyframes fadeIn {
            from {
                opacity: 0;
                transform: translateY(20px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
    `;
    document.head.appendChild(style);
    
    // Initialize: show all case studies
    filterCaseStudies('all');
});
