(function() {
    // https://dashboard.emailjs.com/admin/account
    emailjs.init({
        publicKey: "an6wqncFHl7ze5Gxf",
    });
})();

const msg = document.querySelector('.form-message');

window.onload = function() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        document.querySelector('.loader').classList.add('show');
        // these IDs from the previous steps
        emailjs.sendForm('service_ikck6bb', 'template_83xwz5n', this).then(
            function() {
                document.getElementById('contact-form').reset();
                document.querySelector('.loader').classList.remove('show');
                msg.innerHTML = '';
                msg.innerHTML = '<span class="success-msg">Email Sent!</span>';
                msg.classList.add('show');
                setTimeout(() => msg.classList.remove('show'), 2000);
            },
            (error) => {
                console.log('FAILED...', error);
            });
    });
};

// Toggle menu function
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