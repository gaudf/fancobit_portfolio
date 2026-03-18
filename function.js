// Smooth scrolling for navigation links
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

// Navigation glow effect
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.style.background = 'rgba(15, 23, 42, 0.9)';
        nav.style.boxShadow = '0 0 30px rgba(59, 130, 246, 0.2)';
    } else {
        nav.style.background = 'rgba(15, 23, 42, 0.5)';
        nav.style.boxShadow = 'none';
    }
});

// Form transmission handler
document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('textarea').parentElement;
    if (form) {
        const button = form.querySelector('button');
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const name = form.querySelector('input[type="text"]').value;
            const email = form.querySelector('input[type="email"]').value;
            const message = form.querySelector('textarea').value;
            
            if (name && email && message) {
                // Success feedback effect
                const originalText = button.textContent;
                button.style.background = 'linear-gradient(90deg, #3b82f6, #60a5fa)';
                button.style.boxShadow = '0 0 30px rgba(59, 130, 246, 0.6)';
                button.textContent = 'Message Sent! ✓';
                button.disabled = true;
                
                setTimeout(() => {
                    form.reset();
                    button.textContent = originalText;
                    button.style.background = '';
                    button.style.boxShadow = '';
                    button.disabled = false;
                }, 2500);
            } else {
                alert('Please fill in all fields to send your message.');
            }
        });
    }
});

// Add pulse animations
const pulseElements = document.querySelectorAll('.animate-pulse');
pulseElements.forEach(el => {
    el.style.animation = 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite';
});

// Scroll reveal animations for operation cards
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('[id="work"] > div > div > div').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});
