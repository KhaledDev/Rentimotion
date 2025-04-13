import { createModal } from './modalTemplate.js';
import { validateBookingForm } from './validation.js';
import { showAlert } from './alerts.js';
import { openModal, closeModal } from './modal.js';

export function openBookingModal() {
    const content = `
        <form id="bookingForm" class="needs-validation" novalidate>
            <div class="mb-3">
                <label for="name" class="form-label">Full Name</label>
                <input type="text" class="form-control" id="name" required>
                <div class="invalid-feedback">Please provide your name.</div>
            </div>
            <div class="mb-3">
                <label for="email" class="form-label">Email Address</label>
                <input type="email" class="form-control" id="email" required>
                <div class="invalid-feedback">Please provide a valid email.</div>
            </div>
            <div class="mb-3">
                <label for="phone" class="form-label">Phone Number</label>
                <input type="tel" class="form-control" id="phone" required>
                <div class="invalid-feedback">Please provide a valid 10-digit phone number.</div>
            </div>
            <div class="mb-3">
                <label for="vehicleType" class="form-label">Vehicle Type</label>
                <select class="form-select" id="vehicleType" required>
                    <option value="">Choose a vehicle type</option>
                    <option value="luxury">Luxury</option>
                    <option value="compact">Compact</option>
                    <option value="convertible">Convertible</option>
                    <option value="suv">SUV</option>
                    <option value="hatchback">Hatchback</option>
                </select>
                <div class="invalid-feedback">Please select a vehicle type.</div>
            </div>
            <div class="mb-3">
                <label for="pickupDate" class="form-label">Pickup Date</label>
                <input type="date" class="form-control" id="pickupDate" required>
                <div class="invalid-feedback">Please provide a pickup date.</div>
            </div>
            <div class="mb-3">
                <label for="returnDate" class="form-label">Return Date</label>
                <input type="date" class="form-control" id="returnDate" required>
                <div class="invalid-feedback">Please provide a return date.</div>
            </div>
            <div class="form-check mb-3">
                <input class="form-check-input" type="checkbox" id="terms" required>
                <label class="form-check-label" for="terms">
                    I agree to the Terms and Conditions
                </label>
                <div class="invalid-feedback">You must agree to the terms and conditions.</div>
            </div>
            <button type="submit" class="btn btn-primary w-100">Submit Booking Request</button>
        </form>
    `;
    
    const modalContent = createModal('Book Your Vehicle', content);
    document.body.appendChild(modalContent);
    openModal('genericModal');
    
    // Add event listener to form after it's added to DOM
    setTimeout(() => {
        const form = document.getElementById('bookingForm');
        if (form) {
            form.addEventListener('submit', handleBookingSubmit);
            
            // Add validation for date fields
            const pickupDate = document.getElementById('pickupDate');
            const returnDate = document.getElementById('returnDate');
            
            if (pickupDate && returnDate) {
                // Set minimum date to today
                const today = new Date().toISOString().split('T')[0];
                pickupDate.setAttribute('min', today);
                
                // When pickup date changes, update return date minimum
                pickupDate.addEventListener('change', () => {
                    returnDate.setAttribute('min', pickupDate.value);
                    if (returnDate.value && returnDate.value < pickupDate.value) {
                        returnDate.value = pickupDate.value;
                    }
                });
            }
        }
    }, 100);
}

function handleBookingSubmit(event) {
    event.preventDefault();
    
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        vehicleType: document.getElementById('vehicleType').value,
        pickupDate: document.getElementById('pickupDate').value,
        returnDate: document.getElementById('returnDate').value,
        termsAccepted: document.getElementById('terms').checked
    };
    
    // Validate form data
    const validation = validateBookingForm(formData);
    
    // Mark invalid fields
    document.querySelectorAll('.is-invalid').forEach(el => el.classList.remove('is-invalid'));
    
    if (!validation.isValid) {
        validation.invalidFields.forEach(field => {
            document.getElementById(field).classList.add('is-invalid');
        });
        return;
    }
    
    // Process valid booking data
    processBookingData(formData);
    
    // Close the modal
    closeModal('genericModal');
}

function processBookingData(data) {
    console.log('Processing booking data:', data);
    
    // Calculate rental duration
    const pickupDate = new Date(data.pickupDate);
    const returnDate = new Date(data.returnDate);
    const rentalDays = Math.ceil((returnDate - pickupDate) / (1000 * 60 * 60 * 24));
    
    // Get daily rate based on vehicle type
    const dailyRate = getVehicleDailyRate(data.vehicleType);
    const estimatedCost = dailyRate * rentalDays;
    
    // Show success message with booking details
    showAlert(`
        <h4>Booking Request Successful!</h4>
        <p>Thank you, ${data.name}! Your ${data.vehicleType} car has been booked from ${data.pickupDate} to ${data.returnDate}.</p>
        <p>Rental Duration: ${rentalDays} days</p>
        <p>Estimated Cost: $${estimatedCost}</p>
        <p>We'll contact you shortly at ${data.email} with confirmation details.</p>
    `, 'success');
}

function getVehicleDailyRate(vehicleType) {
    const rates = {
        luxury: 99,
        compact: 29,
        convertible: 79,
        suv: 59,
        hatchback: 39
    };
    
    return rates[vehicleType] || 49; // Default to standard rate
}
