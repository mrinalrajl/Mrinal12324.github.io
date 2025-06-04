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

// Add smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', () => {
  // Observe sections for animation
  document.querySelectorAll('.hero-section, .about-section, .experience-section, .projects-section, .contact-section').forEach(section => {
    observer.observe(section);
  });

  // Add click event listener to each navigation link
  document.querySelectorAll('.site-nav a').forEach(link => {
    link.addEventListener('click', (event) => {
      event.preventDefault(); // Prevent default link behavior
      const targetId = link.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        // Scroll to the target element smoothly
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // Minimal bouncing ball background effect
  const bg = document.querySelector('.bouncing-ball-bg');
  if (bg && !bg.querySelector('.ball')) {
    const ball = document.createElement('div');
    ball.className = 'ball';
    bg.appendChild(ball);
  }

  // Animate hero on load
  document.querySelector('.apple-hero')?.classList.add('in-view');

  // Apple Logo Easter Egg
  // Create the Apple logo element
  const appleEasterEgg = document.createElement('div');
  appleEasterEgg.className = 'apple-easter-egg';
  appleEasterEgg.innerHTML = `
    <svg viewBox="0 0 170 170" xmlns="http://www.w3.org/2000/svg">
      <path d="M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.2-2.12-9.97-3.17-14.34-3.17-4.58 0-9.49 1.05-14.75 3.17-5.26 2.13-9.5 3.24-12.74 3.35-4.93 0.21-9.84-1.96-14.75-6.52-3.13-2.73-7.05-7.41-11.73-14.04-5.03-7.08-9.17-15.29-12.41-24.65-3.47-10.11-5.21-19.9-5.21-29.38 0-10.86 2.35-20.22 7.04-28.07 3.69-6.29 8.6-11.26 14.75-14.92 6.14-3.66 12.79-5.53 19.94-5.74 3.91 0 9.05 1.21 15.43 3.59 6.36 2.39 10.45 3.6 12.24 3.6 1.34 0 5.88-1.42 13.57-4.24 7.28-2.62 13.41-3.7 18.44-3.28 13.63 1.1 23.87 6.47 30.68 16.14-12.19 7.39-18.22 17.73-18.1 31 0.11 10.34 3.86 18.94 11.23 25.77 3.34 3.17 7.07 5.62 11.22 7.36-0.9 2.61-1.85 5.11-2.86 7.51zM119.11 7.24c0 8.1-2.96 15.67-8.86 22.67-7.12 8.32-15.73 13.13-25.14 12.38-0.12-0.97-0.19-1.99-0.19-3.07 0-7.78 3.39-16.1 9.4-22.91 3-3.45 6.82-6.31 11.45-8.6 4.62-2.25 8.99-3.5 13.13-3.71 0.12 1.08 0.18 2.17 0.18 3.24z"/>
    </svg>
  `;
  document.body.appendChild(appleEasterEgg);

  // Position the Apple logo randomly
  function positionAppleLogo() {
    const x = Math.floor(Math.random() * (window.innerWidth - 100));
    const y = Math.floor(Math.random() * (window.innerHeight - 100));
    appleEasterEgg.style.left = x + 'px';
    appleEasterEgg.style.top = y + 'px';
  }

  // Secret key combination to show the Apple logo (press 'a' + 'p' + 'p' + 'l' + 'e')
  let keySequence = '';
  const secretCode = 'apple';
  
  document.addEventListener('keydown', (e) => {
    keySequence += e.key.toLowerCase();
    
    // Keep only the last 5 characters
    if (keySequence.length > 5) {
      keySequence = keySequence.slice(-5);
    }
    
    // Check if the sequence matches the secret code
    if (keySequence === secretCode) {
      positionAppleLogo();
      appleEasterEgg.classList.add('visible');
      
      // Hide after 10 seconds
      setTimeout(() => {
        appleEasterEgg.classList.remove('visible');
      }, 10000);
      
      // Reset the sequence
      keySequence = '';
    }
  });

  // Alternative trigger: Double-click in a corner
  const cornerSize = 50;
  document.addEventListener('dblclick', (e) => {
    // Check if click is in any corner
    const isTopLeft = e.clientX < cornerSize && e.clientY < cornerSize;
    const isTopRight = e.clientX > window.innerWidth - cornerSize && e.clientY < cornerSize;
    const isBottomLeft = e.clientX < cornerSize && e.clientY > window.innerHeight - cornerSize;
    const isBottomRight = e.clientX > window.innerWidth - cornerSize && e.clientY > window.innerHeight - cornerSize;
    
    if (isTopLeft || isTopRight || isBottomLeft || isBottomRight) {
      positionAppleLogo();
      appleEasterEgg.classList.add('visible');
      
      // Hide after 10 seconds
      setTimeout(() => {
        appleEasterEgg.classList.remove('visible');
      }, 10000);
    }
  });
});

// Scroll animation function
function animateAppleSections() {
  const sections = document.querySelectorAll('.apple-section');
  const cards = document.querySelectorAll('.exp-item, .project-item');
  const trigger = window.innerHeight * 0.92;
  
  sections.forEach(section => {
    const rect = section.getBoundingClientRect();
    if (rect.top < trigger) section.classList.add('in-view');
  });
  
  // Staggered animation for cards
  let delay = 0;
  cards.forEach(card => {
    const rect = card.getBoundingClientRect();
    if (rect.top < trigger) {
      setTimeout(() => card.classList.add('in-view'), delay);
      delay += 120;
    }
  });
}

window.addEventListener('scroll', animateAppleSections);
window.addEventListener('DOMContentLoaded', animateAppleSections);

// --- Dots and Lines UI: OS Icon Dots ---
const osIcons = [
  'fa-windows',
  'fa-apple',
  'fa-linux',
  'fa-android',
  'fa-chrome',
  'fa-firefox',
  'fa-ubuntu',
  'fa-redhat',
  'fa-freebsd',
  'fa-raspberry-pi',
  'fa-centos',
  'fa-fedora',
  'fa-android',
  'fa-apple',
  'fa-windows',
];

function getRandomOSIcons(count) {
  const icons = [...osIcons];
  const result = [];
  for (let i = 0; i < count; i++) {
    if (icons.length === 0) break;
    const idx = Math.floor(Math.random() * icons.length);
    result.push(icons.splice(idx, 1)[0]);
  }
  return result;
}

function updateSectionSeparators() {
  const separators = document.querySelectorAll('.section-separator');
  separators.forEach(sep => {
    sep.innerHTML = '';
    const line1 = document.createElement('div');
    line1.className = 'line';
    sep.appendChild(line1);
    const dot = document.createElement('span');
    dot.className = 'dot os-dot';
    const icon = document.createElement('i');
    const iconClass = getRandomOSIcons(1)[0];
    icon.className = `fab ${iconClass}`;
    dot.appendChild(icon);
    sep.appendChild(dot);
    const line2 = document.createElement('div');
    line2.className = 'line';
    sep.appendChild(line2);
  });
}

document.addEventListener('DOMContentLoaded', updateSectionSeparators);