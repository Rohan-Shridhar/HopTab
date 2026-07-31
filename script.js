// ============ HAMBURGER MENU ============
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
        hamburger.classList.toggle('active');
    });
}

// Close menu when clicking on a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.style.display = 'none';
        hamburger.classList.remove('active');
    });
});

// ============ BUG REPORT FORM ============
const bugForm = document.getElementById('bugForm');

if (bugForm) {
    bugForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        // Get form data
        const formData = {
            title: document.getElementById('bug-title').value,
            description: document.getElementById('bug-desc').value,
            steps: document.getElementById('bug-steps').value,
            email: document.getElementById('bug-email').value,
            timestamp: new Date().toLocaleString()
        };

        // Log to console (you can replace this with actual API call)
        console.log('Bug Report Submitted:', formData);

        // Show success modal
        showModal();

        // Reset form
        bugForm.reset();

        // Optional: Send to backend
        try {
            // Example: Send to your backend
            // await fetch('/api/bug-report', {
            //     method: 'POST',
            //     headers: {
            //         'Content-Type': 'application/json',
            //     },
            //     body: JSON.stringify(formData)
            // });
        } catch (error) {
            console.error('Error submitting bug report:', error);
        }
    });
}

// ============ MODAL FUNCTIONS ============
const modal = document.getElementById('successModal');
const modalClose = document.querySelector('.modal-close');

function showModal() {
    if (modal) {
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }
}

function closeModal() {
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

// Close modal when clicking close button
if (modalClose) {
    modalClose.addEventListener('click', closeModal);
}

// Close modal when clicking outside of it
window.addEventListener('click', (event) => {
    if (modal && event.target === modal) {
        closeModal();
    }
});

// Close modal with Escape key
document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && modal && modal.style.display === 'block') {
        closeModal();
    }
});

// ============ SMOOTH SCROLL ENHANCEMENTS ============
// Offset scroll for fixed navbar
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            const offsetTop = target.offsetTop - 80; // navbar height
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ============ SCROLL ANIMATIONS ============
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'slideUp 0.6s ease forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe feature cards
document.querySelectorAll('.feature-card').forEach((card, index) => {
    card.style.opacity = '0';
    card.style.animationDelay = `${index * 0.1}s`;
    observer.observe(card);
});

// Observe contact cards
document.querySelectorAll('.contact-card').forEach((card, index) => {
    card.style.opacity = '0';
    card.style.animationDelay = `${index * 0.1}s`;
    observer.observe(card);
});

// Observe step cards
document.querySelectorAll('.step').forEach((step, index) => {
    step.style.opacity = '0';
    step.style.animationDelay = `${index * 0.1}s`;
    observer.observe(step);
});

// ============ PARALLAX EFFECT ============
window.addEventListener('scroll', () => {
    const parallaxElements = document.querySelectorAll('[data-parallax]');
    parallaxElements.forEach(element => {
        const scrollPosition = window.pageYOffset;
        element.style.transform = `translateY(${scrollPosition * 0.5}px)`;
    });
});

// ============ FORM VALIDATION ============
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

const emailInput = document.getElementById('bug-email');
if (emailInput) {
    emailInput.addEventListener('blur', () => {
        if (emailInput.value && !validateEmail(emailInput.value)) {
            emailInput.style.borderColor = '#a8453c';
            emailInput.style.boxShadow = '0 0 0 3px rgba(168, 69, 60, 0.1)';
        } else {
            emailInput.style.borderColor = '#ddd';
            emailInput.style.boxShadow = 'none';
        }
    });
}

// ============ ACTIVE NAV LINK ============
window.addEventListener('scroll', () => {
    let current = '';
    
    document.querySelectorAll('section').forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    document.querySelectorAll('.nav-links a').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// ============ COPY TO CLIPBOARD ============
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        alert('Copied to clipboard!');
    }).catch(() => {
        alert('Failed to copy');
    });
}

// Make code blocks clickable to copy
document.querySelectorAll('code').forEach(codeBlock => {
    codeBlock.style.cursor = 'pointer';
    codeBlock.addEventListener('click', () => {
        copyToClipboard(codeBlock.textContent);
    });
});

// ============ PAGE LOAD ANIMATION ============
window.addEventListener('load', () => {
    document.body.style.opacity = '1';
});

document.body.style.opacity = '0';
document.body.style.transition = 'opacity 0.3s ease';

// ============ KEYBOARD SHORTCUTS ============
document.addEventListener('keydown', (e) => {
    // Alt + B for bug report
    if (e.altKey && e.key === 'b') {
        e.preventDefault();
        document.getElementById('bug-report').scrollIntoView({ behavior: 'smooth' });
    }

    // Alt + D for demo
    if (e.altKey && e.key === 'd') {
        e.preventDefault();
        document.getElementById('demo').scrollIntoView({ behavior: 'smooth' });
    }

    // Alt + G for GitHub
    if (e.altKey && e.key === 'g') {
        e.preventDefault();
        window.open('https://github.com/Rohan-Shridhar/HopTab', '_blank');
    }
});

// ============ THEME DETECTION ============
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');

function updateTheme(isDark) {
    // This allows for future dark mode support
    if (isDark) {
        document.documentElement.style.setProperty('--text-dark', '#f5e6d3');
        document.documentElement.style.setProperty('--text-light', '#2a1810');
    } else {
        document.documentElement.style.setProperty('--text-dark', '#3a2817');
        document.documentElement.style.setProperty('--text-light', '#f5e6d3');
    }
}

prefersDark.addEventListener('change', (e) => {
    updateTheme(e.matches);
});

// ============ PERFORMANCE OPTIMIZATION ============
// Lazy load images
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                }
                observer.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// ============ CONSOLE EASTER EGG ============
console.log(
    '%cHopTab 🚀',
    'font-size: 24px; font-weight: bold; color: #a8453c;'
);
console.log(
    '%cThanks for checking out HopTab! Found a bug? Report it on our website or GitHub.',
    'font-size: 14px; color: #d4a574;'
);
console.log(
    '%cGitHub: https://github.com/Rohan-Shridhar/HopTab',
    'font-size: 12px; color: #e8d4b8;'
);
