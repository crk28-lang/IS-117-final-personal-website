/* =====================================================
   NAVIGATION & SECTION SWITCHING
   ===================================================== */

document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.section');
    const contactForm = document.getElementById('contactForm');
    const hamburgerBtn = document.getElementById('hamburgerBtn');
    const sidebar = document.getElementById('sidebar');

    // Hamburger menu toggle
    if (hamburgerBtn) {
        hamburgerBtn.addEventListener('click', function() {
            hamburgerBtn.classList.toggle('active');
            sidebar.classList.toggle('active');
        });
    }

    // Close hamburger menu when clicking a nav link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (hamburgerBtn) {
                hamburgerBtn.classList.remove('active');
                sidebar.classList.remove('active');
            }
        });
    });

    // Close hamburger menu when clicking outside
    document.addEventListener('click', function(e) {
        if (hamburgerBtn && !hamburgerBtn.contains(e.target) && !sidebar.contains(e.target)) {
            hamburgerBtn.classList.remove('active');
            sidebar.classList.remove('active');
        }
    });

    // Navigation functionality
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetSection = this.getAttribute('data-section');
            
            // Remove active class from all links and sections
            navLinks.forEach(l => l.classList.remove('active'));
            sections.forEach(s => s.classList.remove('active'));
            
            // Add active class to clicked link and corresponding section
            this.classList.add('active');
            document.getElementById(targetSection).classList.add('active');
            
            // Scroll to top
            window.scrollTo(0, 0);
        });
    });

    // Form handling
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            handleFormSubmit(this);
        });
    }
});

/* =====================================================
   SCROLL TO SECTION FUNCTION
   ===================================================== */

function scrollToSection(sectionId) {
    const navLink = document.querySelector(`[data-section="${sectionId}"]`);
    if (navLink) {
        navLink.click();
    }
}

/* =====================================================
   FORM SUBMISSION HANDLER
   ===================================================== */

function handleFormSubmit(form) {
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    
    // Validate form
    if (!data.name || !data.email || !data.service || !data.message) {
        showNotification('Please fill in all required fields.', 'error');
        return;
    }

    // Email validation
    if (!isValidEmail(data.email)) {
        showNotification('Please enter a valid email address.', 'error');
        return;
    }

    // Show success message
    showNotification('Thank you for your message! I\'ll get back to you within 24 hours.', 'success');
    
    // Reset form
    form.reset();
    
    // Log data (in production, you would send this to a server)
    console.log('Form submitted with data:', data);
}

/* =====================================================
   UTILITY FUNCTIONS
   ===================================================== */

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        padding: 16px 24px;
        border-radius: 6px;
        font-size: 14px;
        font-weight: 500;
        z-index: 2000;
        animation: slideIn 0.3s ease;
        backdrop-filter: blur(10px);
        max-width: 400px;
    `;
    
    if (type === 'success') {
        notification.style.backgroundColor = 'rgba(40, 167, 69, 0.95)';
        notification.style.color = '#fff';
        notification.style.borderLeft = '4px solid #28a745';
    } else if (type === 'error') {
        notification.style.backgroundColor = 'rgba(220, 53, 69, 0.95)';
        notification.style.color = '#fff';
        notification.style.borderLeft = '4px solid #dc3545';
    } else {
        notification.style.backgroundColor = 'rgba(3, 102, 214, 0.95)';
        notification.style.color = '#fff';
        notification.style.borderLeft = '4px solid #0366d6';
    }
    
    document.body.appendChild(notification);
    
    // Auto remove after 4 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 4000);
}

/* =====================================================
   SMOOTH SCROLL BEHAVIOR
   ===================================================== */

document.documentElement.style.scrollBehavior = 'smooth';

/* =====================================================
   ANIMATIONS
   ===================================================== */

const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }

    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }

    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateY(10px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);

/* =====================================================
   ACTIVE LINK TRACKING ON SCROLL
   ===================================================== */

window.addEventListener('scroll', function() {
    let current = '';
    const sections = document.querySelectorAll('.section');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('data-section') === current) {
            link.classList.add('active');
        }
    });
});

/* =====================================================
   ENHANCE INTERACTIVE ELEMENTS
   ===================================================== */

// Button ripple effect
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;

        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple');

        this.appendChild(ripple);

        setTimeout(() => ripple.remove(), 600);
    });
});

// Add ripple styles
const rippleStyle = document.createElement('style');
rippleStyle.textContent = `
    .btn {
        position: relative;
        overflow: hidden;
    }

    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.5);
        transform: scale(0);
        animation: ripple-animation 0.6s ease-out;
        pointer-events: none;
    }

    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(rippleStyle);

/* =====================================================
   INTERSECTION OBSERVER FOR ANIMATIONS
   ===================================================== */

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeIn 0.6s ease forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe cards and items
document.querySelectorAll('.service-card, .portfolio-item, .stat').forEach(element => {
    element.style.opacity = '0';
    observer.observe(element);
});

/* =====================================================
   ACCESSIBILITY IMPROVEMENTS
   ===================================================== */

// Keyboard navigation
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        // Could be used to close modals or focus highlights
    }
});

// Focus visible styles
document.addEventListener('keydown', function() {
    document.body.classList.add('keyboard-nav');
});

document.addEventListener('mousedown', function() {
    document.body.classList.remove('keyboard-nav');
});

const a11yStyle = document.createElement('style');
a11yStyle.textContent = `
    .keyboard-nav .nav-link:focus,
    .keyboard-nav .btn:focus,
    .keyboard-nav input:focus,
    .keyboard-nav textarea:focus,
    .keyboard-nav select:focus {
        outline: 2px solid #0366d6;
        outline-offset: 2px;
    }
`;
document.head.appendChild(a11yStyle);
