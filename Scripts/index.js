import { openModal as baseOpenModal, closeModal } from './Modules/modal.js';
import { fadeIn } from './Modules/animation.js';
import { createModal } from './Modules/modalTemplate.js';

// Make openModal and closeModal globally accessible
window.openModal = baseOpenModal;
window.closeModal = closeModal;

// Function to open vehicle type modal
window.openVehicleTypeModal = (type) => {
    let content = '';
    switch (type) {
        case 'luxury':
            content = `<p>Details about Luxury Cars...</p>`;
            break;
        case 'compact':
            content = `<p>Details about Compact Cars...</p>`;
            break;
        case 'convertible':
            content = `<p>Details about Convertibles...</p>`;
            break;
        case 'suv':
            content = `<p>Details about SUVs...</p>`;
            break;
        case 'hatchback':
            content = `<p>Details about Hatchbacks...</p>`;
            break;
        default:
            content = `<p>No details available.</p>`;
    }
    const modalContent = createModal(`Vehicle Type - ${type}`, content);
    document.body.appendChild(modalContent);
    baseOpenModal('genericModal'); // Open the modal
};

// Function to open features modal
window.openFeatureModal = (feature) => {
    let content = '';
    switch (feature) {
        case 'selection':
            content = `<p>Details about Extensive Vehicle Selection...</p>`;
            break;
        case 'booking':
            content = `<p>Details about Effortless Online Booking...</p>`;
            break;
        case 'support':
            content = `<p>Details about Dedicated 24/7 Support...</p>`;
            break;
        default:
            content = `<p>No details available.</p>`;
    }
    const modalContent = createModal(`Feature - ${feature}`, content);
    document.body.appendChild(modalContent);
    baseOpenModal('genericModal'); // Open the modal
};

// Function to open pricing modal
window.openPricingModal = (plan) => {
    let content = '';
    switch (plan) {
        case 'economy':
            content = `<p>Details about Economy Plan...</p>`;
            break;
        case 'standard':
            content = `<p>Details about Standard Plan...</p>`;
            break;
        case 'luxury':
            content = `<p>Details about Luxury Plan...</p>`;
            break;
        default:
            content = `<p>No details available.</p>`;
    }
    const modalContent = createModal(`Pricing - ${plan}`, content);
    document.body.appendChild(modalContent);
    baseOpenModal('genericModal'); // Open the modal
};

// Apply fade-in to all elements with class 'fade-in'
document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.fade-in');
    elements.forEach(element => {
        fadeIn(element);
    });
});
