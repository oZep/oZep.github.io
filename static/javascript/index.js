document.addEventListener('DOMContentLoaded', function() {
    const letters = document.querySelectorAll('.letter');

    function type() {
        letters.forEach((letter, index) => {
            setTimeout(() => {
                if (index === 4) {
                    letter.innerHTML = '&nbsp;';
                } else {
                    letter.textContent = 'Joey Issa.'[index];
                }
                letter.style.opacity = '1';
            }, index * 100); // Adjust timing based on typing speed
        });
    }

    type();

    function resetAnimation() {
        letters.forEach(letter => {
            letter.textContent = '';
            letter.style.opacity = '0';
        });
        setTimeout(type, 1000); // Start typing after 1 second
    }

    setInterval(resetAnimation, 60000); // Repeat every 90 seconds (1.30 minutes)
});
