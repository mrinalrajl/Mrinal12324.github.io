// Select all navigation links
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

// Initialize the Three.js scene
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Create the hero section
const heroGeometry = new THREE.BoxGeometry(4, 4, 4);
const heroMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });
const heroMesh = new THREE.Mesh(heroGeometry, heroMaterial);
scene.add(heroMesh);

// Position the camera
camera.position.z = 10;

// Animate the hero section
function animate() {
  requestAnimationFrame(animate);

  heroMesh.rotation.x += 0.05;
  heroMesh.rotation.y += 0.01;

  // Add more complex animations here
  // e.g., morphing, particle effects, lighting changes

  renderer.render(scene, camera);
}

animate();

// Resize the renderer on window resize
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

// Position the camera
camera.position.z = 15;

// Animate the hero section
function animate() {
  requestAnimationFrame(animate);

  heroMesh.rotation.x += 0.20;
  heroMesh.rotation.y += 0.1;

  // Add more complex animations here
  // e.g., morphing, particle effects, lighting changes

  renderer.render(scene, camera);
}

animate();

// Resize the renderer on window resize
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});
