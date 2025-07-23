// Typing Animation
const typed = new Typed('.multiple-text', {
    strings: ['Web Developer', 'UI/UX Designer'],
    typeSpeed: 100,
    backSpeed: 60,
    backDelay: 1000,
    loop: true,
    showCursor: true,
    cursorChar: '|',
    smartBackspace: true
});

// Sticky Header
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    header.classList.toggle('sticky', window.scrollY > 0);
    
    // Update navbar animation position
    const activeLink = document.querySelector('.navbar a.active');
    if (activeLink) {
        const animation = document.querySelector('.navbar .animation');
        animation.style.width = `${activeLink.offsetWidth}px`;
        animation.style.left = `${activeLink.offsetLeft}px`;
    }
});

// Navbar animation on load
document.addEventListener('DOMContentLoaded', () => {
    const activeLink = document.querySelector('.navbar a.active');
    if (activeLink) {
        const animation = document.createElement('div');
        animation.className = 'animation';
        animation.style.width = `${activeLink.offsetWidth}px`;
        animation.style.left = `${activeLink.offsetLeft}px`;
        document.querySelector('.navbar').appendChild(animation);
    }
});

// Navbar link click handler
document.querySelectorAll('.navbar a').forEach(link => {
    link.addEventListener('click', function(e) {
        // Update active class
        document.querySelectorAll('.navbar a').forEach(a => a.classList.remove('active'));
        this.classList.add('active');
        
        // Update animation position
        const animation = document.querySelector('.navbar .animation');
        animation.style.width = `${this.offsetWidth}px`;
        animation.style.left = `${this.offsetLeft}px`;
    });
});

// Scroll Reveal Animation
ScrollReveal({ 
    reset: false,
    distance: '80px',
    duration: 1500,
    delay: 200,
    easing: 'cubic-bezier(0.5, 0, 0, 1)'
});

// Custom reveal configurations
ScrollReveal().reveal('.home-content, .heading', { 
    origin: 'top',
    interval: 200
});

ScrollReveal().reveal('.home-image, .skills-container, .about-img, .contact form', { 
    origin: 'bottom',
    interval: 200
});

ScrollReveal().reveal('.home-content h1, .about-content', { 
    origin: 'left',
    distance: '100px'
});

ScrollReveal().reveal('.home-content p, .about-content p', { 
    origin: 'right',
    distance: '100px'
});

// Form Submission with validation
const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Simple validation
    const name = form.querySelector('input[type="text"]');
    const email = form.querySelector('input[type="email"]');
    const subject = form.querySelector('input[type="text"][placeholder="Email Subject"]');
    const message = form.querySelector('textarea');
    
    if (!name.value || !email.value || !subject.value || !message.value) {
        alert('Please fill all required fields!');
        return;
    }
    
    // Simulate form submission
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    
    submitBtn.innerHTML = '<i class="bx bx-loader-alt bx-spin"></i> Sending...';
    submitBtn.disabled = true;
    
    setTimeout(() => {
        submitBtn.innerHTML = '<i class="bx bx-check"></i> Sent!';
        
        setTimeout(() => {
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
            form.reset();
            
            // Show success message
            const successMsg = document.createElement('div');
            successMsg.className = 'success-message';
            successMsg.innerHTML = 'Message sent successfully! <i class="bx bx-check-circle"></i>';
            form.appendChild(successMsg);
            
            setTimeout(() => {
                successMsg.remove();
            }, 3000);
        }, 1500);
    }, 2000);
});

// Add smooth scrolling to all links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Add active class to navbar links on scroll
window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY + 100;
    
    document.querySelectorAll('section').forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            document.querySelectorAll('.navbar a').forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                    
                    // Update animation position
                    const animation = document.querySelector('.navbar .animation');
                    if (animation) {
                        animation.style.width = `${link.offsetWidth}px`;
                        animation.style.left = `${link.offsetLeft}px`;
                    }
                }
            });
        }
    });
});

// Initialize with home section active
document.querySelector('.navbar a[href="#home"]').classList.add('active');