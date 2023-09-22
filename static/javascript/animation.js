function scrollToBottom() {
    const targetPosition = document.body.scrollHeight - window.innerHeight;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    const duration = 2000; // Adjust this to control the scroll speed (in milliseconds)
    let start = null;

    function animateScroll(timestamp) {
        if (!start) start = timestamp;
        const progress = timestamp - start;
        window.scrollTo(0, easeInOutCubic(progress, startPosition, distance, duration));
        if (progress < duration) {
            requestAnimationFrame(animateScroll);
        }
    }

    function easeInOutCubic(t, b, c, d) {
        t /= d/2;
        if (t < 1) return c/2*t*t*t + b;
        t -= 2;
        return c/2*(t*t*t + 2) + b;
    }

    requestAnimationFrame(animateScroll);
}

function scrollToTop() {
    const targetPosition = 0;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    const duration = 2000; // Adjust this to control the scroll speed (in milliseconds)
    let start = null;

    function animateScroll(timestamp) {
        if (!start) start = timestamp;
        const progress = timestamp - start;
        window.scrollTo(0, easeInOutCubic(progress, startPosition, distance, duration));
        if (progress < duration) {
            requestAnimationFrame(animateScroll);
        }
    }

    function easeInOutCubic(t, b, c, d) {
        t /= d/2;
        if (t < 1) return c/2*t*t*t + b;
        t -= 2;
        return c/2*(t*t*t + 2) + b;
    }

    requestAnimationFrame(animateScroll);
}

document.getElementById('arrow-down').addEventListener('click', scrollToBottom);
document.getElementById('arrow-up').addEventListener('click', scrollToTop);
