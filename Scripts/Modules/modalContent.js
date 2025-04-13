import { createModal } from './modalTemplate.js';
import { openModal } from './modal.js';
import { showAlert } from './alerts.js';

export function openVehicleTypeModal(type) {
    let content = '';
    switch (type) {
        case 'luxury':
            content = `
                <div class="row">
                    <div class="col-md-6">
                        <img src="Images/luxury.jpg" alt="Luxury Car" class="img-fluid rounded">
                    </div>
                    <div class="col-md-6">
                        <h4>Luxury Car Features:</h4>
                        <ul>
                            <li>Premium leather seats</li>
                            <li>Advanced navigation system</li>
                            <li>Premium sound system</li>
                            <li>Climate control</li>
                            <li>Driver assistance features</li>
                        </ul>
                        <p>Daily Rate: $99</p>
                        <button class="btn btn-primary" onclick="openBookingModal()">Book Now</button>
                    </div>
                </div>
            `;
            break;
        case 'compact':
            content = `
                <div class="row">
                    <div class="col-md-6">
                        <img src="Images/compact.jpg" alt="Compact Car" class="img-fluid rounded">
                    </div>
                    <div class="col-md-6">
                        <h4>Compact Car Features:</h4>
                        <ul>
                            <li>Excellent fuel efficiency</li>
                            <li>Easy to park</li>
                            <li>Comfortable for 2-4 passengers</li>
                            <li>Bluetooth connectivity</li>
                            <li>USB charging ports</li>
                        </ul>
                        <p>Daily Rate: $29</p>
                        <button class="btn btn-primary" onclick="openBookingModal()">Book Now</button>
                    </div>
                </div>
            `;
            break;
        case 'convertible':
            content = `
                <div class="row">
                    <div class="col-md-6">
                        <img src="Images/convertible.jpg" alt="Convertible Car" class="img-fluid rounded">
                    </div>
                    <div class="col-md-6">
                        <h4>Convertible Features:</h4>
                        <ul>
                            <li>Retractable roof</li>
                            <li>Premium sound system</li>
                            <li>Leather seats</li>
                            <li>Sport mode driving</li>
                            <li>Wind deflector</li>
                        </ul>
                        <p>Daily Rate: $79</p>
                        <button class="btn btn-primary" onclick="openBookingModal()">Book Now</button>
                    </div>
                </div>
            `;
            break;
        case 'suv':
            content = `
                <div class="row">
                    <div class="col-md-6">
                        <img src="Images/suv.jpg" alt="SUV" class="img-fluid rounded">
                    </div>
                    <div class="col-md-6">
                        <h4>SUV Features:</h4>
                        <ul>
                            <li>Spacious interior</li>
                            <li>Third-row seating</li>
                            <li>Advanced safety features</li>
                            <li>Ample cargo space</li>
                            <li>All-wheel drive capability</li>
                        </ul>
                        <p>Daily Rate: $59</p>
                        <button class="btn btn-primary" onclick="openBookingModal()">Book Now</button>
                    </div>
                </div>
            `;
            break;
        case 'hatchback':
            content = `
                <div class="row">
                    <div class="col-md-6">
                        <img src="Images/hatchback.jpg" alt="Hatchback" class="img-fluid rounded">
                    </div>
                    <div class="col-md-6">
                        <h4>Hatchback Features:</h4>
                        <ul>
                            <li>Excellent fuel efficiency</li>
                            <li>Versatile cargo space</li>
                            <li>Easy urban maneuverability</li>
                            <li>Modern entertainment system</li>
                            <li>Foldable rear seats</li>
                        </ul>
                        <p>Daily Rate: $39</p>
                        <button class="btn btn-primary" onclick="openBookingModal()">Book Now</button>
                    </div>
                </div>
            `;
            break;
        default:
            content = `<p>No details available.</p>`;
    }
    const modalContent = createModal(`Vehicle Type - ${type.charAt(0).toUpperCase() + type.slice(1)}`, content);
    document.body.appendChild(modalContent);
    openModal('genericModal');
}

/**
 * Opens a feature details modal
 * @param {string} feature - Feature type
 */
export function openFeatureModal(feature) {
    let content = '';
    switch (feature) {
        case 'selection':
            content = `
                <div class="row">
                    <div class="col-md-6">
                        <img src="Images/selection.jpg" alt="Vehicle Selection" class="img-fluid rounded">
                    </div>
                    <div class="col-md-6">
                        <h4>Extensive Vehicle Selection</h4>
                        <p>Our fleet includes a wide variety of vehicles to match any requirement:</p>
                        <ul>
                            <li>Luxury sedans and sports cars</li>
                            <li>Compact and economy cars</li>
                            <li>Convertibles for scenic drives</li>
                            <li>SUVs for family trips and adventures</li>
                            <li>Hatchbacks for urban commuting</li>
                        </ul>
                        <p>All vehicles are regularly maintained and cleaned to ensure your safety and comfort.</p>
                        <button class="btn btn-primary" onclick="openBookingModal()">Book Your Preferred Vehicle</button>
                    </div>
                </div>
            `;
            break;
        case 'booking':
            content = `
                <div class="row">
                    <div class="col-md-6">
                        <img src="Images/online-booking.jpg" alt="Online Booking" class="img-fluid rounded">
                    </div>
                    <div class="col-md-6">
                        <h4>Effortless Online Booking</h4>
                        <p>Our streamlined booking process ensures you can reserve your vehicle in minutes:</p>
                        <ol>
                            <li>Choose your preferred vehicle type</li>
                            <li>Select pickup and return dates</li>
                            <li>Provide your basic information</li>
                            <li>Confirm your booking</li>
                            <li>Receive instant confirmation</li>
                        </ol>
                        <p>No hidden fees, no complicated forms - just simple, straightforward booking.</p>
                        <button class="btn btn-primary" onclick="openBookingModal()">Try Our Easy Booking System</button>
                    </div>
                </div>
            `;
            break;
        case 'support':
            content = `
                <div class="row">
                    <div class="col-md-6">
                        <img src="Images/support.jpg" alt="24/7 Support" class="img-fluid rounded">
                    </div>
                    <div class="col-md-6">
                        <h4>Dedicated 24/7 Support</h4>
                        <p>Our customer service team is available around the clock to assist you with:</p>
                        <ul>
                            <li>Emergency roadside assistance</li>
                            <li>Booking modifications</li>
                            <li>Technical support for vehicle features</li>
                            <li>Lost and found services</li>
                            <li>General inquiries and concerns</li>
                        </ul>
                        <p>Contact us anytime via phone, email, or live chat for immediate assistance.</p>
                        <div class="d-flex gap-2">
                            <button class="btn btn-primary" onclick="showAlert('Our support team will contact you shortly!', 'info')">Request Callback</button>
                            <button class="btn btn-outline-primary" onclick="window.location.href='#contact-us'">View Contact Details</button>
                        </div>
                    </div>
                </div>
            `;
            break;
        default:
            content = `<p>No details available.</p>`;
    }
    const modalContent = createModal(`Feature - ${feature.charAt(0).toUpperCase() + feature.slice(1)}`, content);
    document.body.appendChild(modalContent);
    openModal('genericModal');
}

/**
 * Opens a pricing plan details modal
 * @param {string} plan - Pricing plan
 */
export function openPricingModal(plan) {
    let content = '';
    let dailyRate = 0;
    
    switch (plan) {
        case 'economy':
            dailyRate = 29;
            content = `
                <div class="row">
                    <div class="col-md-6">
                        <h4>Economy Plan Details</h4>
                        <p>Perfect for budget-conscious travelers who need basic transportation.</p>
                        <ul>
                            <li><strong>Daily Rate:</strong> $29</li>
                            <li><strong>Weekly Rate:</strong> $174 (Save $29)</li>
                            <li><strong>Monthly Rate:</strong> $725 (Save $145)</li>
                        </ul>
                        <h5>What's Included:</h5>
                        <ul>
                            <li>Compact or economy cars</li>
                            <li>Unlimited mileage</li>
                            <li>Basic insurance coverage</li>
                            <li>24/7 roadside assistance</li>
                        </ul>
                    </div>
                    <div class="col-md-6">
                        <div class="card bg-light p-3 mb-3">
                            <h5>Sample Cost Calculator</h5>
                            <div class="mb-3">
                                <label for="economyDays" class="form-label">Number of Days:</label>
                                <input type="number" class="form-control" id="economyDays" min="1" value="1">
                            </div>
                            <div class="alert alert-primary">
                                <span>Estimated Cost: $<span id="economyCost">${dailyRate}</span></span>
                            </div>
                        </div>
                        <button class="btn btn-primary w-100" onclick="openBookingModal()">Book Economy Plan</button>
                    </div>
                </div>
            `;
            break;
        case 'standard':
            dailyRate = 49;
            content = `
                <div class="row">
                    <div class="col-md-6">
                        <h4>Standard Plan Details</h4>
                        <p>Our most popular option, balancing comfort with value.</p>
                        <ul>
                            <li><strong>Daily Rate:</strong> $49</li>
                            <li><strong>Weekly Rate:</strong> $294 (Save $49)</li>
                            <li><strong>Monthly Rate:</strong> $1,225 (Save $245)</li>
                        </ul>
                        <h5>What's Included:</h5>
                        <ul>
                            <li>Mid-size sedans or small SUVs</li>
                            <li>Unlimited mileage</li>
                            <li>Comprehensive insurance</li>
                            <li>24/7 roadside assistance</li>
                            <li>Free GPS navigation</li>
                        </ul>
                    </div>
                    <div class="col-md-6">
                        <div class="card bg-light p-3 mb-3">
                            <h5>Sample Cost Calculator</h5>
                            <div class="mb-3">
                                <label for="standardDays" class="form-label">Number of Days:</label>
                                <input type="number" class="form-control" id="standardDays" min="1" value="1">
                            </div>
                            <div class="alert alert-primary">
                                <span>Estimated Cost: $<span id="standardCost">${dailyRate}</span></span>
                            </div>
                        </div>
                        <button class="btn btn-primary w-100" onclick="openBookingModal()">Book Standard Plan</button>
                    </div>
                </div>
            `;
            break;
        case 'luxury':
            dailyRate = 99;
            content = `
                <div class="row">
                    <div class="col-md-6">
                        <h4>Luxury Plan Details</h4>
                        <p>Premium experience for those who demand the very best.</p>
                        <ul>
                            <li><strong>Daily Rate:</strong> $99</li>
                            <li><strong>Weekly Rate:</strong> $594 (Save $99)</li>
                            <li><strong>Monthly Rate:</strong> $2,475 (Save $495)</li>
                        </ul>
                        <h5>What's Included:</h5>
                        <ul>
                            <li>Luxury sedans, sports cars or premium SUVs</li>
                            <li>Unlimited mileage</li>
                            <li>Premium insurance with zero deductible</li>
                            <li>Priority 24/7 roadside assistance</li>
                            <li>Free GPS navigation</li>
                            <li>Concierge service</li>
                            <li>Airport pickup/dropoff included</li>
                        </ul>
                    </div>
                    <div class="col-md-6">
                        <div class="card bg-light p-3 mb-3">
                            <h5>Sample Cost Calculator</h5>
                            <div class="mb-3">
                                <label for="luxuryDays" class="form-label">Number of Days:</label>
                                <input type="number" class="form-control" id="luxuryDays" min="1" value="1">
                            </div>
                            <div class="alert alert-primary">
                                <span>Estimated Cost: $<span id="luxuryCost">${dailyRate}</span></span>
                            </div>
                        </div>
                        <button class="btn btn-primary w-100" onclick="openBookingModal()">Book Luxury Plan</button>
                    </div>
                </div>
            `;
            break;
        default:
            content = `<p>No details available.</p>`;
    }
    
    const modalContent = createModal(`${plan.charAt(0).toUpperCase() + plan.slice(1)} Plan`, content);
    document.body.appendChild(modalContent);
    openModal('genericModal');
    
    // Add event listener for cost calculators
    setTimeout(() => {
        const daysInput = document.getElementById(`${plan}Days`);
        const costOutput = document.getElementById(`${plan}Cost`);
        
        if (daysInput && costOutput) {
            daysInput.addEventListener('input', () => {
                const days = parseInt(daysInput.value) || 1;
                costOutput.textContent = (dailyRate * days).toFixed(0);
            });
        }
    }, 100);
}

/**
 * Request a callback from support
 */
export function requestCallback() {
    showAlert('Our support team will contact you shortly!', 'info');
}
