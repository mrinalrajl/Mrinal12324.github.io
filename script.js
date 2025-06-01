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

// Remove old cursor code if present
const oldDot = document.querySelector('.cursor-dot');
const oldOutline = document.querySelector('.cursor-outline');
if (oldDot) oldDot.remove();
if (oldOutline) oldOutline.remove();

// Remove previous custom cursor if present
const oldCustomCursor = document.querySelector('.custom-cursor');
if (oldCustomCursor) oldCustomCursor.remove();

// Remove MacOS cursor if present
const macCursor = document.querySelector('.macos-cursor');
if (macCursor) macCursor.remove();

// Add custom dot and outline cursor
if (!document.querySelector('.cursor-dot')) {
  const cursorDot = document.createElement('div');
  cursorDot.classList.add('cursor-dot');
  document.body.appendChild(cursorDot);
}
if (!document.querySelector('.cursor-outline')) {
  const cursorOutline = document.createElement('div');
  cursorOutline.classList.add('cursor-outline');
  document.body.appendChild(cursorOutline);
}

let mouseX = 0, mouseY = 0;
let outlineX = 0, outlineY = 0;
const cursorDot = document.querySelector('.cursor-dot');
const cursorOutline = document.querySelector('.cursor-outline');

function animateCursor() {
  outlineX += (mouseX - outlineX) * 0.18;
  outlineY += (mouseY - outlineY) * 0.18;
  cursorDot.style.left = mouseX + 'px';
  cursorDot.style.top = mouseY + 'px';
  cursorOutline.style.left = outlineX + 'px';
  cursorOutline.style.top = outlineY + 'px';
  requestAnimationFrame(animateCursor);
}
animateCursor();

document.addEventListener('mousemove', e => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

// Enlarge cursor on hover for interactive elements
const interactiveSelectors = 'a, button, .btn, .nav-link, .contact-link, .animated-btn';
document.querySelectorAll(interactiveSelectors).forEach(el => {
  el.addEventListener('mouseenter', () => {
    cursorOutline.style.transform = 'translate(-50%, -50%) scale(1.3)';
    cursorOutline.style.borderColor = '#181818';
    cursorDot.style.transform = 'translate(-50%, -50%) scale(1.5)';
    cursorDot.style.background = '#181818';
  });
  el.addEventListener('mouseleave', () => {
    cursorOutline.style.transform = 'translate(-50%, -50%) scale(1)';
    cursorOutline.style.borderColor = '#2f12d3';
    cursorDot.style.transform = 'translate(-50%, -50%) scale(1)';
    cursorDot.style.background = '#2f12d3';
  });
});

// Animated gradient background particles
const colorBg = document.querySelector('.color-bg');
if (colorBg) {
  // Add animated floating blobs
  for (let i = 0; i < 6; i++) {
    const blob = document.createElement('div');
    blob.className = 'bg-blob';
    blob.style.left = Math.random() * 100 + 'vw';
    blob.style.top = Math.random() * 100 + 'vh';
    blob.style.animationDuration = (8 + Math.random() * 8) + 's';
    blob.style.background = `linear-gradient(120deg, #${Math.floor(Math.random()*16777215).toString(16)} 0%, #${Math.floor(Math.random()*16777215).toString(16)} 100%)`;
    colorBg.appendChild(blob);
  }
}

// Animate section fade-in on scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('.vibrant-section').forEach(section => {
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
