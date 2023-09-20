document.addEventListener('DOMContentLoaded', function() {
    const letters = document.querySelectorAll('.letter');

    function type() {
        letters.forEach((letter, index) => {
            setTimeout(() => {
                letter.textContent = 'Joey Issa'[index];
                letter.style.opacity = '1';
            }, index * 100); // Adjust timing based on typing speed
        });
    }

    type();
});
