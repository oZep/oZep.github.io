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
            }, index * 200); // Adjust timing based on typing speed
        });
    }

    type();

    function resetAnimation() {
        letters.forEach(letter => {
            letter.textContent = '_';
            letter.style.opacity = '0';
        });
        setTimeout(type, 1000); // Start typing after 1 second
    }

    setInterval(resetAnimation, 10000); // Repeat every 40 seconds
});

var isNightMode = false;

function toggleDayNight() {
    isNightMode = !isNightMode;
    changeImagePath();
};

function changeImagePath() {
    var icons = document.querySelectorAll('#logo');
    icons.forEach(function(icon) {
        var currentPath = icon.src;
        var basePath = isNightMode ? '/assets/icons-night/' : '/assets/icons-day/';
        var newPath = currentPath.replace(/\/assets\/icons-(day|night)\//, basePath);
        icon.src = newPath; 
})};