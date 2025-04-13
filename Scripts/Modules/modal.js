export function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'flex';
        // Force reflow before adding the 'show' class to ensure transition works
        modal.offsetHeight;
        modal.classList.add('show');
    }
}

export function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.remove('show');
        // Wait for the transition to finish before hiding the modal completely
        setTimeout(() => {
            modal.style.display = 'none';
        }, 300); // Should match the transition duration in CSS
    }
}

// Add event listeners to close modals when clicking outside the modal
document.addEventListener('click', function(event) {
    if (event.target.classList.contains('modal')) {
        const modalId = event.target.id;
        closeModal(modalId);
    }
});
