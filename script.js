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

// Active nav link indicator
function updateActiveNavLink() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= sectionTop - 200) {
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

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    initDarkMode();
    initTechFlow();
    initHeadshotEffects();
    updateActiveNavLink();
    
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