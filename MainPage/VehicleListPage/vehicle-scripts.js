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