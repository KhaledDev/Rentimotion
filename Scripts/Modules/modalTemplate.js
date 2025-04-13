import { closeModal } from './modal.js';

export function createModal(title, content) {
    // Remove existing modal if it's already in the document
    const existingModal = document.getElementById('genericModal');
    if (existingModal) {
        existingModal.remove();
    }
    
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.id = 'genericModal';

    const modalContent = document.createElement('div');
    modalContent.className = 'modal-content';

    const closeButton = document.createElement('span');
    closeButton.className = 'close';
    closeButton.innerHTML = '&times;';
    closeButton.onclick = () => {
        closeModal('genericModal');
        // Let the transition finish before removing
        setTimeout(() => {
            modal.remove();
        }, 300);
    };

    const titleElement = document.createElement('h2');
    titleElement.textContent = title;

    const contentElement = document.createElement('div');
    contentElement.innerHTML = content;

    modalContent.appendChild(closeButton);
    modalContent.appendChild(titleElement);
    modalContent.appendChild(contentElement);
    modal.appendChild(modalContent);

    return modal;
}
