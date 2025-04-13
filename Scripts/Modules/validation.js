export function validateEmail(email) {
    if (!email.includes('@')) {
        return false;
    }

    const [localPart, domain] = email.split('@');

    if (!localPart || !domain) {
        return false;
    }

    if (domain.indexOf('.') === -1) {
        return false;
    }

    if (domain.split('.').pop().length < 2) {
        return false;
    }

    return true;
}

export function validatePhone(phone) {
    const cleanedPhone = String(phone).replace(/[^0-9]/g, ''); // ???? what is this
    return cleanedPhone.length === 10 && !isNaN(Number(cleanedPhone));
}

export function validateBookingForm(formData) {
    const invalidFields = [];
    
    if (!formData.name.trim()) {
        invalidFields.push('name');
    }
    
    if (!validateEmail(formData.email)) {
        invalidFields.push('email');
    }
    
    if (!validatePhone(formData.phone)) {
        invalidFields.push('phone');
    }
    
    if (!formData.vehicleType) {
        invalidFields.push('vehicleType');
    }
    
    if (!formData.pickupDate) {
        invalidFields.push('pickupDate');
    }
    
    if (!formData.returnDate) {
        invalidFields.push('returnDate');
    }
    
    if (!formData.termsAccepted) {
        invalidFields.push('terms');
    }
    
    return {
        isValid: invalidFields.length === 0,
        invalidFields
    };
}
