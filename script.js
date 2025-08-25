// Dark mode functionality
const darkModeToggle = document.querySelector('.dark-mode-toggle');
const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

// Tech Flow Animations
function initTechFlow() {
    const techItems = document.querySelectorAll('.tech-item');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                
                // Animate connection lines after item appears
                const connectionLine = entry.target.querySelector('.connection-line');
                if (connectionLine) {
                    setTimeout(() => {
                        connectionLine.style.transform = 'scaleX(1)';
                    }, 300);
                }
            }
        });
    }, {
        threshold: 0.2
    });

    techItems.forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(30px)';
        observer.observe(item);
    });
}

// Staggered reveal for Experience section using IntersectionObserver (DSA-like scheduling)
function initExperienceReveal() {
    const expItems = Array.from(document.querySelectorAll('.experience-section .exp-item'));
    if (!expItems.length) return;

    // Use a priority queue-like stagger: earlier items reveal slightly before later ones
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const idx = expItems.indexOf(entry.target);
                const delay = Math.min(idx * 120, 600); // stagger delay based on index
                setTimeout(() => {
                    entry.target.classList.add('in-view');
                }, delay);

                // once viewed, unobserve to save cycles (like marking nodes visited)
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.18 });

    // prepare items
    expItems.forEach(item => {
        // ensure keyboard focus also triggers the reveal
        item.addEventListener('focus', () => item.classList.add('in-view'));
        observer.observe(item);
    });
}

// Initialize dark mode
function initDarkMode() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark' || (!savedTheme && prefersDarkScheme.matches)) {
        document.body.setAttribute('data-theme', 'dark');
        darkModeToggle.querySelector('.toggle-icon').textContent = '☀️';
    }
}

// Enhanced Dark Mode Toggle
function toggleDarkMode() {
    const isDark = document.body.getAttribute('data-theme') === 'dark';
    
    // Prepare for transition
    document.body.style.transition = 'background-color 0.3s ease-in-out, color 0.3s ease-in-out';
    document.querySelectorAll('.tech-icon img').forEach(img => {
        img.style.transition = 'filter 0.3s ease-in-out';
    });
    
    // Toggle theme
    if (isDark) {
        document.body.removeAttribute('data-theme');
        localStorage.setItem('theme', 'light');
        darkModeToggle.querySelector('.toggle-icon').textContent = '🌙';
    } else {
        document.body.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        darkModeToggle.querySelector('.toggle-icon').textContent = '☀️';
    }
    
    // Animate tech icons
    document.querySelectorAll('.tech-icon').forEach((icon, index) => {
        setTimeout(() => {
            icon.style.transform = 'scale(1.1) rotate(10deg)';
            setTimeout(() => {
                icon.style.transform = 'scale(1) rotate(0deg)';
            }, 300);
        }, index * 50);
    });
}

// retrigger header sheen animation (used when toggling theme)
function retriggerHeaderSheen() {
    const header = document.querySelector('.site-header');
    if (!header) return;
    const before = window.getComputedStyle(header, '::before');
    // restart animation by forcing reflow and toggling a class
    header.classList.remove('sheen-active');
    // force reflow
    void header.offsetWidth;
    header.classList.add('sheen-active');
    setTimeout(() => header.classList.remove('sheen-active'), 1400);
}

// Smooth scrolling for navigation
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

// Add iOS 18-style interactive effects
function initHeadshotEffects() {
    const headshot = document.querySelector('.headshot-container');
    if (!headshot) return;

    // Track mouse movement for the glass effect
    headshot.addEventListener('mousemove', (e) => {
        const rect = headshot.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;

        headshot.style.setProperty('--mouse-x', `${x}%`);
        headshot.style.setProperty('--mouse-y', `${y}%`);

        // Calculate the angle for 3D rotation
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = (e.clientY - rect.top - centerY) / 20;
        const rotateY = -(e.clientX - rect.left - centerX) / 20;

        headshot.style.transform = `
            perspective(1000px)
            rotateX(${rotateX}deg)
            rotateY(${rotateY}deg)
        `;
    });

    // Reset transform on mouse leave
    headshot.addEventListener('mouseleave', () => {
        headshot.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
    });
}

// Smooth parallax and subtle 3D tilt for hero and tech icons
function initParallaxAndTilt() {
    const hero = document.querySelector('#hero');
    const techIcons = document.querySelectorAll('.tech-icon');

    // Hero parallax on scroll
    if (hero) {
        window.addEventListener('scroll', () => {
            const rect = hero.getBoundingClientRect();
            const offset = Math.max(-rect.top, 0);
            const depth = Math.min(offset / 20, 40);
            hero.style.transform = `translateZ(0) translateY(${depth * -0.85}px)`;
        }, { passive: true });
    }

    // Efficient mouse-driven tilt for tech icons
    techIcons.forEach(iconWrap => {
        const icon = iconWrap.querySelector('img') || iconWrap;
        let raf = null;
        let last = {x:0, y:0};

        iconWrap.addEventListener('mousemove', (e) => {
            const rect = iconWrap.getBoundingClientRect();
            const px = (e.clientX - rect.left) / rect.width - 0.75;
            const py = (e.clientY - rect.top) / rect.height - 0.15;
            last = {x: px, y: py};
            if (!raf) {
                raf = requestAnimationFrame(() => {
                    const rx = (last.y * 8).toFixed(2);
                    const ry = (last.x * -8).toFixed(2);
                    iconWrap.style.transform = `rotateX(${rx}deg) rotateY(${ry}deg) translateZ(8px)`;
                    raf = null;
                });
            }
        });

        iconWrap.addEventListener('mouseleave', () => {
            if (raf) cancelAnimationFrame(raf);
            raf = requestAnimationFrame(() => {
                iconWrap.style.transform = '';
                raf = null;
            });
        });
    });
}

// Header tint / refraction on scroll for added depth
function initHeaderRefraction() {
    const header = document.querySelector('.site-header');
    if (!header) return;
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    window.addEventListener('scroll', () => {
        if (prefersReduced) return;
        const scroll = Math.min(window.scrollY, 300);
        const alpha = 0.72 - (scroll / 1200); // reduce slightly as user scrolls
        const isDark = document.body.getAttribute('data-theme') === 'dark';
        if (!isDark) {
            header.style.background = `linear-gradient(180deg, rgba(255,255,255,${alpha}), rgba(245,247,251,0.48))`;
            header.style.boxShadow = scroll > 20 ? '0 6px 24px rgba(16,24,40,0.06)' : '';
        } else {
            // dark tint interpolation
            const darkAlpha = 0.5 - (scroll / 1800);
            header.style.background = `linear-gradient(180deg, rgba(18,20,24,${darkAlpha}), rgba(18,20,24,0.36))`;
            header.style.boxShadow = scroll > 20 ? '0 6px 24px rgba(0,0,0,0.28)' : '';
        }
    }, { passive: true });
}

// Active nav link indicator
function updateActiveNavLink() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= sectionTop - 100) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').slice(1) === current) {
                link.classList.add('active');
            }
        });
    });
}

// Dynamic island: show headshot in nav when the gallery (tech stack) is visible
function initDynamicIsland() {
    const gallery = document.querySelector('#gallery');
    const header = document.querySelector('.site-header');
    const islandBtn = document.querySelector('.island');
    const islandImg = document.querySelector('.island-img');
    const islandName = document.querySelector('.island-name');
    if (!gallery || !header || !islandBtn || !islandImg) return;

    // lazily set the headshot src from the main headshot image
    const mainHeadshot = document.querySelector('.headshot-image');
    const imgSrc = mainHeadshot ? mainHeadshot.getAttribute('src') : '';
    if (imgSrc) islandImg.src = imgSrc;

    // Use a scroll-based rAF check so the island becomes visible when
    // the page reaches the Technology Stack and stays visible until
    // the user scrolls back above it.
    let ticking = false;

    function checkIsland() {
        ticking = false;
        const headerHeight = header ? header.offsetHeight || 0 : 0;
        const galleryRect = gallery.getBoundingClientRect();
        const triggerPoint = galleryRect.top + window.scrollY - headerHeight - 24;
        const shouldShow = window.scrollY >= triggerPoint;
        
        // Only toggle classes if state actually changes
        if (shouldShow && !header.classList.contains('island-visible')) {
            requestAnimationFrame(() => {
                header.classList.add('island-visible');
                document.body.classList.add('island-visible');
            });
        } else if (!shouldShow && header.classList.contains('island-visible')) {
            requestAnimationFrame(() => {
                header.classList.remove('island-visible');
                document.body.classList.remove('island-visible');
            });
        }
    }

    window.addEventListener('scroll', () => {
        if (!ticking) {
            ticking = true;
            requestAnimationFrame(checkIsland);
        }
    }, { passive: true });

    // Initial check on load
    checkIsland();
}

// Trigger floating animations in About after the intro completes
function initAboutFloating() {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;
    const introInner = document.querySelector('.about-intro-inner');
    const floatCards = document.querySelectorAll('.float-card');
    if (!introInner || !floatCards.length) return;

    // After the intro animation duration, add the animate class to float-cards
    const introDuration = 900; // matches CSS animation time in ms
    setTimeout(() => {
        floatCards.forEach((c, i) => {
            // staggered start for lively motion
            setTimeout(() => c.classList.add('animate'), i * 180);
        });
    }, introDuration + 120);
}

// One-time Siri intro overlay: plays on first user interaction
function initSiriOverlay() {
    const overlay = document.querySelector('.siri-overlay');
    if (!overlay) return;
    const played = localStorage.getItem('siri_intro_played');

    function playOnce() {
        if (played) return;
        // Add active class and handle cleanup after animation
        overlay.classList.add('is-active');
        // Wait for the full animation sequence (1600ms) plus a small buffer
        setTimeout(() => {
            overlay.classList.remove('is-active');
            // Fade out backdrop blur gradually
            overlay.style.transition = 'backdrop-filter 400ms ease-out';
            overlay.style.backdropFilter = 'blur(0px)';
        }, 1650);
        localStorage.setItem('siri_intro_played', '1');
        // Clean up listeners
        window.removeEventListener('pointerdown', playOnce);
        window.removeEventListener('keydown', playOnce);
    }

    // Wait for the user's first pointer or keyboard interaction
    if (!played) {
        window.addEventListener('pointerdown', playOnce, { once: true });
        window.addEventListener('keydown', playOnce, { once: true });
    }
}

// Section style controls (Experience & Projects)
function initSectionStyleControls() {
    const controls = document.querySelectorAll('.section-style-controls');
    if (!controls.length) return;

    controls.forEach(ctrl => {
        const target = ctrl.dataset.target;
        const buttons = ctrl.querySelectorAll('.style-btn');
        const sectionEl = document.querySelector(`.${target}-section`);
        if (!sectionEl) return;

        // Load saved preference
        const saved = localStorage.getItem(`view-${target}`);
        if (saved) {
            sectionEl.classList.remove(...Array.from(sectionEl.classList).filter(c => c.startsWith('view-')));
            sectionEl.classList.add(`view-${saved}`);
            buttons.forEach(b => b.setAttribute('aria-pressed', b.dataset.style === saved ? 'true' : 'false'));
        }

        buttons.forEach(btn => {
            btn.addEventListener('click', () => {
                const style = btn.dataset.style;
                // reset aria
                buttons.forEach(b => b.setAttribute('aria-pressed', 'false'));
                btn.setAttribute('aria-pressed', 'true');

                // remove previous view-* classes
                sectionEl.classList.remove(...Array.from(sectionEl.classList).filter(c => c.startsWith('view-')));
                sectionEl.classList.add(`view-${style}`);
                localStorage.setItem(`view-${target}`, style);
            });
        });
    });
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    initDarkMode();
    initTechFlow();
    initHeadshotEffects();
    initExperienceReveal();
    initParallaxAndTilt();
    initHeaderRefraction();
    updateActiveNavLink();
    // trigger header sheen on initial load for subtle polish
    retriggerHeaderSheen();
    // start dynamic island observer
    initDynamicIsland();
    // start About floating animations
    initAboutFloating();
    // initialize Siri one-time overlay
    initSiriOverlay();
    // initialize section style controls
    initSectionStyleControls();
    
    // Add hover effects for connection lines
    document.querySelectorAll('.tech-item').forEach(item => {
        item.addEventListener('mouseenter', () => {
            const column = item.closest('.flow-column');
            if (column) {
                const columnItems = column.querySelectorAll('.tech-item');
                columnItems.forEach(colItem => {
                    if (colItem !== item) {
                        colItem.style.opacity = '0.7';
                    }
                });
            }
        });
        
        item.addEventListener('mouseleave', () => {
            const column = item.closest('.flow-column');
            if (column) {
                const columnItems = column.querySelectorAll('.tech-item');
                columnItems.forEach(colItem => {
                    colItem.style.opacity = '1';
                });
            }
        });
    });
});

// Event listeners
darkModeToggle.addEventListener('click', toggleDarkMode);
darkModeToggle.addEventListener('click', retriggerHeaderSheen);

// Handle system dark mode changes
prefersDarkScheme.addEventListener('change', (e) => {
    if (!localStorage.getItem('theme')) {
        if (e.matches) {
            document.body.setAttribute('data-theme', 'dark');
            darkModeToggle.querySelector('.toggle-icon').textContent = '☀️';
        } else {
            document.body.removeAttribute('data-theme');
            darkModeToggle.querySelector('.toggle-icon').textContent = '🌙';
        }
    }
});