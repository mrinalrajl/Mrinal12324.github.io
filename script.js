const navLinks = document.querySelectorAll('.nav-link');

// Add click event listener to each navigation link
navLinks.forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent default link behavior
    const targetId = event.target.getAttribute('href');
    const targetElement = document.querySelector(targetId);

    // Scroll to the target element smoothly
    targetElement.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
});

// Animate section fade-in on scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
      // Animate child items with stagger
      if (entry.target.classList.contains('experience-section') || entry.target.classList.contains('projects-section')) {
        const items = entry.target.querySelectorAll('.exp-item, .project-item');
        items.forEach((item, idx) => {
          setTimeout(() => item.classList.add('in-view'), idx * 120);
        });
      }
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('.hero-section, .about-section, .experience-section, .projects-section, .contact-section').forEach(section => {
  observer.observe(section);
});

// Hamburger menu toggle for mobile
const hamburger = document.querySelector('.hamburger');
const mainNav = document.querySelector('.main-nav');
if (hamburger && mainNav) {
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    mainNav.classList.toggle('open');
    const expanded = hamburger.getAttribute('aria-expanded') === 'true';
    hamburger.setAttribute('aria-expanded', !expanded);
  });
  // Close menu on nav link click (mobile)
  mainNav.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      if (mainNav.classList.contains('open')) {
        hamburger.classList.remove('open');
        mainNav.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
      }
    });
  });
}

// Animated hello rotator (like iPhone setup)
(function helloRotator() {
  const hellos = document.querySelectorAll('.hello-rotator .hello-text');
  let idx = 0;
  if (!hellos.length) return;
  hellos[0].classList.add('active');
  setInterval(() => {
    hellos[idx].classList.remove('active');
    hellos[idx].style.display = 'none';
    idx = (idx + 1) % hellos.length;
    hellos[idx].style.display = 'inline';
    hellos[idx].classList.add('active');
  }, 1800);
})();

// Theme switching based on time
function setThemeByTime() {
  const hour = new Date().getHours();
  const isDark = hour >= 19 || hour < 7; // 7pm-7am dark, else light
  document.body.classList.toggle('dark', isDark);
  updateThemeTimer(isDark);
}

function updateThemeTimer(isDark) {
  const now = new Date();
  let nextSwitch;
  if (isDark) {
    // Next switch at 7am
    nextSwitch = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 7, 0, 0, 0);
    if (now.getHours() >= 7) nextSwitch.setDate(nextSwitch.getDate() + 1);
    document.getElementById('theme-label').textContent = 'Light mode in';
  } else {
    // Next switch at 7pm
    nextSwitch = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 19, 0, 0, 0);
    if (now.getHours() >= 19) nextSwitch.setDate(nextSwitch.getDate() + 1);
    document.getElementById('theme-label').textContent = 'Dark mode in';
  }
  const diff = nextSwitch - now;
  const h = Math.floor(diff / 3600000);
  const m = Math.floor((diff % 3600000) / 60000);
  const s = Math.floor((diff % 60000) / 1000);
  document.getElementById('theme-timer').textContent = `${h.toString().padStart(2,'0')}:${m.toString().padStart(2,'0')}:${s.toString().padStart(2,'0')}`;
}

setThemeByTime();
setInterval(() => {
  setThemeByTime();
}, 1000);

// User Guide Modal logic
window.addEventListener('DOMContentLoaded', () => {
  const guide = document.getElementById('user-guide');
  const closeBtn = guide.querySelector('.user-guide-close');
  // Show only for new users (localStorage)
  if (!localStorage.getItem('userGuideSeen')) {
    guide.classList.add('active');
  }
  closeBtn.addEventListener('click', () => {
    guide.classList.remove('active');
    localStorage.setItem('userGuideSeen', '1');
  });
  // Optional: close on outside click
  guide.addEventListener('click', (e) => {
    if (e.target === guide) {
      guide.classList.remove('active');
      localStorage.setItem('userGuideSeen', '1');
    }
  });
});

// Minimal bouncing ball background effect
window.addEventListener('DOMContentLoaded', () => {
  const bg = document.querySelector('.bouncing-ball-bg');
  if (bg && !bg.querySelector('.ball')) {
    const ball = document.createElement('div');
    ball.className = 'ball';
    bg.appendChild(ball);
  }
});
