// ============================================================
//  HopTab Landing Page — Script
//  Redesigned to match b-egg.farm editorial aesthetic
// ============================================================

// ---- Navbar: Scroll behaviour ----
const navbar = document.getElementById('navbar');

function updateNavbar() {
    if (window.scrollY > 40) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
}

window.addEventListener('scroll', updateNavbar, { passive: true });
updateNavbar();

// ---- Hamburger Menu ----
const hamburger = document.getElementById('hamburger');
const navLinks  = document.getElementById('navLinks');

if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
        const isOpen = navLinks.classList.toggle('open');
        hamburger.classList.toggle('active', isOpen);
        // Prevent body scroll when menu is open
        document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    // Close on link click
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('open');
            hamburger.classList.remove('active');
            document.body.style.overflow = '';
        });
    });
}

// ---- Smooth Scroll with Navbar Offset ----
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href === '#') return;
        const target = document.querySelector(href);
        if (!target) return;
        e.preventDefault();
        const navHeight = navbar.offsetHeight;
        const offsetTop = target.getBoundingClientRect().top + window.scrollY - navHeight - 16;
        window.scrollTo({ top: offsetTop, behavior: 'smooth' });
    });
});

// ---- Scroll-Triggered Animations ----
const animatables = document.querySelectorAll('[data-animate]');

const animateObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry, i) => {
            if (entry.isIntersecting) {
                // Stagger within same parent
                const siblings = entry.target.parentElement.querySelectorAll('[data-animate]');
                let delay = 0;
                siblings.forEach((sib, idx) => {
                    if (sib === entry.target) delay = idx * 80;
                });
                setTimeout(() => {
                    entry.target.classList.add('visible');
                }, delay);
                animateObserver.unobserve(entry.target);
            }
        });
    },
    { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
);

animatables.forEach(el => animateObserver.observe(el));

// ---- Active Nav Link on Scroll ----
const sections = document.querySelectorAll('section[id]');
const navAnchors = document.querySelectorAll('.nav-links a[href^="#"]');

function setActiveNav() {
    const scrollPos = window.scrollY + navbar.offsetHeight + 80;

    sections.forEach(section => {
        const top    = section.offsetTop;
        const bottom = top + section.offsetHeight;
        const id     = section.getAttribute('id');

        if (scrollPos >= top && scrollPos < bottom) {
            navAnchors.forEach(a => {
                a.classList.toggle('active', a.getAttribute('href') === `#${id}`);
            });
        }
    });
}

window.addEventListener('scroll', setActiveNav, { passive: true });

// ---- Copy Code Button ----
function copyCode(btn) {
    const code = btn.getAttribute('data-code') || btn.previousElementSibling?.textContent;
    if (!code) return;

    navigator.clipboard.writeText(code.trim()).then(() => {
        const icon = btn.querySelector('i');
        btn.classList.add('copied');
        if (icon) {
            icon.className = 'fas fa-check';
        }

        setTimeout(() => {
            btn.classList.remove('copied');
            if (icon) icon.className = 'far fa-copy';
        }, 2000);
    }).catch(() => {
        // Fallback for older browsers
        const textarea = document.createElement('textarea');
        textarea.value = code.trim();
        textarea.style.position = 'fixed';
        textarea.style.opacity = '0';
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);

        const icon = btn.querySelector('i');
        btn.classList.add('copied');
        if (icon) icon.className = 'fas fa-check';
        setTimeout(() => {
            btn.classList.remove('copied');
            if (icon) icon.className = 'far fa-copy';
        }, 2000);
    });
}

// ---- Modal ----
function closeModal() {
    const modal = document.getElementById('successModal');
    if (modal) modal.classList.remove('open');
}

// Close modal on backdrop click
const modal = document.getElementById('successModal');
if (modal) {
    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });
}

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
});

// ---- Console Easter Egg ----
console.log(
    '%c HopTab 🚀 ',
    'font-size: 20px; font-weight: bold; background: #1e2b1e; color: #c8a84b; padding: 8px 16px; border-radius: 4px;'
);
console.log(
    '%cThanks for checking out HopTab! Star it on GitHub → https://github.com/Rohan-Shridhar/HopTab',
    'font-size: 13px; color: #5a7a5a; padding: 4px 0;'
);