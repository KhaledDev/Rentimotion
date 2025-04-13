/**
 * Main JavaScript file for Rentimotion website
 */

import { openModal, closeModal } from './Modules/modal.js';
import { fadeIn } from './Modules/animation.js';
import { openBookingModal } from './Modules/booking.js';
import { openVehicleTypeModal, openFeatureModal, openPricingModal, requestCallback } from './Modules/modalContent.js';
import { setupNewsletterForms } from './Modules/newsletter.js';
import { showAlert } from './Modules/alerts.js';

// Make functions globally accessible
window.openModal = openModal;
window.closeModal = closeModal;
window.openBookingModal = openBookingModal;
window.openVehicleTypeModal = openVehicleTypeModal;
window.openFeatureModal = openFeatureModal;
window.openPricingModal = openPricingModal;
window.requestCallback = requestCallback;
window.showAlert = showAlert;

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Apply fade-in to all elements with class 'fade-in'
    const elements = document.querySelectorAll('.fade-in');
    elements.forEach(element => {
        fadeIn(element);
    });
    
    // Setup newsletter forms
    setupNewsletterForms();
    
    // "Book Now" button in header
    const bookNowBtn = document.querySelector('.nav-buttons .btn-outline-primary');
    if (bookNowBtn) {
        bookNowBtn.removeAttribute('onclick');
        bookNowBtn.addEventListener('click', () => {
            openBookingModal();
        });
    }
    
    // "Learn More" button in header
    const learnMoreBtn = document.querySelector('.nav-buttons .btn-primary');
    if (learnMoreBtn) {
        learnMoreBtn.addEventListener('click', () => {
            window.scrollTo({
                top: document.getElementById('features').offsetTop,
                behavior: 'smooth'
            });
        });
    }
    
    // Initialize any Bootstrap components that require JavaScript
    initializeBootstrapComponents();
    
    console.log('Rentimotion application initialized');
});

/**
 * Initialize Bootstrap components that require JavaScript
 */
function initializeBootstrapComponents() {
    // Initialize tooltips
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });
    
    // Initialize popovers
    const popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
    popoverTriggerList.map(function (popoverTriggerEl) {
        return new bootstrap.Popover(popoverTriggerEl);
    });
}
