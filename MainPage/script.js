let currentIndex = 0;

// Function to navigate to the previous review
function previousReview() {
    const reviews = document.querySelectorAll('.review');

    reviews[currentIndex].classList.remove('active');
    currentIndex = (currentIndex - 1 + reviews.length) % reviews.length;
    reviews[currentIndex].classList.add('active');
}

// Function to navigate to the next review
function nextReview() {
    const reviews = document.querySelectorAll('.review');

    reviews[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % reviews.length;
    reviews[currentIndex].classList.add('active');
}

// Hamburger menu toggle
function toggleMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');

    // Close menu when a link is clicked (for better UX on mobile)
    const links = navLinks.querySelectorAll('a');
    for (let link of links) {
        link.addEventListener('click', closeMenu);

        function closeMenu() {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        }
    }
}