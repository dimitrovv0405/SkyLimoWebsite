let currentIndex = 0;


// SUV Vehicle Navigation
// Function to navigate to the previous vehicle
function previousVehicleSuv() {
    const suvImages = document.querySelectorAll('.vehicle-content-SUV img');

    suvImages[currentIndex].classList.remove('active');
    currentIndex = (currentIndex - 1 + suvImages.length) % suvImages.length;
    suvImages[currentIndex].classList.add('active');
}

// Function to navigate to the next vehicle
function nextVehicleSuv() {
    const suvImages = document.querySelectorAll('.vehicle-content-SUV img');
    
    suvImages[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1 + suvImages.length) % suvImages.length;
    suvImages[currentIndex].classList.add('active');
}


// Limousine Vehicle Navigation
// Function to navigate to the previous vehicle
function previousVehicleLimo() {
    const limoImages = document.querySelectorAll('.vehicle-content-Limousine img');

    limoImages[currentIndex].classList.remove('active');
    currentIndex = (currentIndex - 1 + limoImages.length) % limoImages.length;
    limoImages[currentIndex].classList.add('active');
}

// Function to navigate to the next vehicle
function nextVehicleLimo() {
    const limoImages = document.querySelectorAll('.vehicle-content-Limousine img');
    
    limoImages[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1 + limoImages.length) % limoImages.length;
    limoImages[currentIndex].classList.add('active');
}


// Party Bus Vehicle Navigation
// Function to navigate to the previous vehicle
function previousVehiclePartyBus() {
    const partyBusImages = document.querySelectorAll('.vehicle-content-PartyBus img');

    partyBusImages[currentIndex].classList.remove('active');
    currentIndex = (currentIndex - 1 + partyBusImages.length) % partyBusImages.length;
    partyBusImages[currentIndex].classList.add('active');
}

// Function to navigate to the next vehicle
function nextVehiclePartyBus() {
    const partyBusImages = document.querySelectorAll('.vehicle-content-PartyBus img');
    
    partyBusImages[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1 + partyBusImages.length) % partyBusImages.length;
    partyBusImages[currentIndex].classList.add('active');
}


// Touch Swipe Functionality
function addSwipeSupport(containerSelector, nextFunc, prevFunc) {
    const container = document.querySelector(containerSelector);
    if (!container) return;

    let touchStartX = 0;
    let touchEndX = 0;

    container.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    });

    container.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe(nextFunc, prevFunc);
    });

    function handleSwipe(nextFunc, prevFunc) {
        const swipeThreshold = 50;
        const diff = touchStartX - touchEndX;

        if (diff > swipeThreshold) {
            nextFunc();
        } else if (diff < -swipeThreshold) {
            prevFunc();
        }
    }
}

// Initialize swipe support for all vehicle containers
document.addEventListener('DOMContentLoaded', () => {
    addSwipeSupport('.vehicle-content-SUV', nextVehicleSuv, previousVehicleSuv);
    addSwipeSupport('.vehicle-content-Limousine', nextVehicleLimo, previousVehicleLimo);
    addSwipeSupport('.vehicle-content-PartyBus', nextVehiclePartyBus, previousVehiclePartyBus);
});

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