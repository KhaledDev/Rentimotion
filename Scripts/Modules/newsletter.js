import { validateEmail } from './validation.js';
import { showAlert } from './alerts.js';

export function processNewsletterSignup(email) {
    if (!validateEmail(email)) {
        showAlert('Please enter a valid email address', 'danger');
        return false;
    }
    
    // Here you would typically send the email to your server
    console.log('Processing newsletter signup for:', email);
    
    showAlert(`Thank you for subscribing to our newsletter with email: ${email}`, 'success');
    return true;
}

export function setupNewsletterForms() {
    // Footer newsletter forms
    const newsletterForms = document.querySelectorAll('.newsletter');
    newsletterForms.forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const emailInput = form.querySelector('input[type="email"]');
            if (emailInput) {
                const success = processNewsletterSignup(emailInput.value);
                if (success) {
                    emailInput.value = '';
                }
            }
        });
        
        // Convert button click to form submission
        const subscribeBtn = form.querySelector('button');
        if (subscribeBtn) {
            subscribeBtn.addEventListener('click', (e) => {
                e.preventDefault();
                const formEvent = new Event('submit', { cancelable: true });
                form.dispatchEvent(formEvent);
            });
        }
    });
    
    // Hero section newsletter signup
    const heroEmailInput = document.querySelector('.hero .input-group input[type="email"]');
    const heroSignUpBtn = document.querySelector('.hero .input-group .sign-up');
    
    if (heroEmailInput && heroSignUpBtn) {
        heroSignUpBtn.addEventListener('click', () => {
            const email = heroEmailInput.value;
            const success = processNewsletterSignup(email);
            
            if (success) {
                heroEmailInput.value = '';
                heroEmailInput.classList.remove('is-invalid');
            } else {
                heroEmailInput.classList.add('is-invalid');
            }
        });
    }
}
