document.addEventListener('DOMContentLoaded', () => {
    // Check if this is the first visit
    if (!localStorage.getItem('hasVisited')) {
        // Add the initial-load class to trigger animations
        document.body.classList.add('initial-load');
        
        // Store that user has visited
        localStorage.setItem('hasVisited', 'true');
        
        // Remove the class after animations complete
        setTimeout(() => {
            document.body.classList.remove('initial-load');
        }, 4000); // Adjust time based on total animation duration
    }
});
