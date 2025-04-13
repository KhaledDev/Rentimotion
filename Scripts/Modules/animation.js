export function fadeIn(element, duration = 500) {
    element.style.opacity = 0;
    element.style.display = 'block';

    let start = null;

    function animation(currentTime) {
        if (!start) start = currentTime;
        let progress = currentTime - start;
        element.style.opacity = +progress / duration;

        if (progress < duration) {
            window.requestAnimationFrame(animation);
        }
    }

    window.requestAnimationFrame(animation);
}

// Apply fade-in to all elements with class 'fade-in'
document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.fade-in');
    elements.forEach(element => {
        fadeIn(element);
    });
});
