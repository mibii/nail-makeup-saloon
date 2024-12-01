

document.addEventListener('DOMContentLoaded', function() {
    const businessCard = document.querySelector('.business-card');
    const scrollTopBtn = document.getElementById('scrollTopBtn');
    const bookingForm = document.getElementById('bookingForm');
    
    // Business card hover effect
    businessCard.addEventListener('mouseover', function() {
        this.style.transform = 'scale(1.02)';
        this.style.transition = 'transform 0.3s ease';
    });
    
    businessCard.addEventListener('mouseout', function() {
        this.style.transform = 'scale(1)';
    });

    // Scroll to top button visibility
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            scrollTopBtn.style.display = 'block';
        } else {
            scrollTopBtn.style.display = 'none';
        }
    });

    // Form submission handling
    bookingForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Collect form data
        const formData = new FormData(bookingForm);
        const bookingData = {};
        formData.forEach((value, key) => {
            bookingData[key] = value;
        });

        // Here you would typically send the data to a server
        console.log('Booking Data:', bookingData);
        
        // Show success message
        alert('Thank you for booking! We will contact you shortly to confirm your appointment.');
        bookingForm.reset();
    });

    // Phone number formatting
    const phoneInput = document.getElementById('phone');
    phoneInput.addEventListener('input', function(e) {
        let x = e.target.value.replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
        e.target.value = !x[2] ? x[1] : '(' + x[1] + ') ' + x[2] + (x[3] ? '-' + x[3] : '');
    });

    // Set minimum date to today
    const dateInput = document.getElementById('date');
    const today = new Date().toISOString().split('T')[0];
    dateInput.min = today;
});

// Scroll to booking section
function scrollToBooking() {
    const bookingSection = document.getElementById('booking');
    bookingSection.scrollIntoView({ behavior: 'smooth' });
}

// Scroll to top
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}