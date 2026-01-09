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