// Mobile Menu Toggle with Animation
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    let isMenuOpen = false;
    
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', function() {
            isMenuOpen = !isMenuOpen;
            
            // Toggle hamburger animation
            mobileMenuBtn.classList.toggle('hamburger-open', isMenuOpen);
            
            // Toggle menu animation
            if (isMenuOpen) {
                mobileMenu.classList.add('open');
            } else {
                mobileMenu.classList.remove('open');
            }
        });
        
        // Close menu when clicking on a link
        const menuLinks = mobileMenu.querySelectorAll('a');
        menuLinks.forEach(link => {
            link.addEventListener('click', function() {
                isMenuOpen = false;
                mobileMenuBtn.classList.remove('hamburger-open');
                mobileMenu.classList.remove('open');
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            if (!mobileMenuBtn.contains(event.target) && !mobileMenu.contains(event.target) && isMenuOpen) {
                isMenuOpen = false;
                mobileMenuBtn.classList.remove('hamburger-open');
                mobileMenu.classList.remove('open');
            }
        });
    }
    
    // Smooth scroll behavior for navbar links
    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80; // Account for fixed navbar
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Navbar scroll effect
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('nav');
        if (window.scrollY > 50) {
            navbar.classList.add('bg-opacity-95');
        } else {
            navbar.classList.remove('bg-opacity-95');
        }
    });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
}); 