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

// ============ CONSOLE EASTER EGG ============
console.log(
    '%cHopTab 🚀',
    'font-size: 24px; font-weight: bold; color: #a8453c;'
);

console.log(
    '%cThanks for checking out HopTab! Found a bug? Report it on GitHub.',
    'font-size: 14px; color: #d4a574;'
);

console.log(
    '%cGitHub: https://github.com/Rohan-Shridhar/HopTab',
    'font-size: 12px; color: #e8d4b8;'
);