/// HEADER NAME ANIMATION

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


/// NIGHT MODE

var isNightMode = false;

function toggleDayNight() {
    changeBodyColor();
    changeSky()
    changeImagePath();
    changeToggle();
    isNightMode = !isNightMode;
};

function changeImagePath() {
    var icons = document.querySelectorAll('#logo');
    icons.forEach(function(icon) {
        var currentPath = icon.src;
        var basePath = isNightMode ? '/assets/icons-night/' : '/assets/icons-day/';
        var newPath = currentPath.replace(/\/assets\/icons-(day|night)\//, basePath);
        icon.src = newPath; 
})};

function changeBodyColor() {
    var body = document.getElementById("body");
    var color = isNightMode ? "black" : "white";
    body.style.background = color;

    var elementsToChange = document.querySelectorAll("#body *");
    elementsToChange.forEach(function(element) {
        element.style.color = isNightMode ? "white" : "black";
    });
};

function changeToggle() {
    var toggle = document.getElementById("toggle-text");
    toggle.textContent = isNightMode ? "Night" : "Day";

    var toggleBorder = document.getElementById("toggle-border");
    toggleBorder.style.borderColor = isNightMode ? 'white' : 'black';
    toggleBorder.style.background = isNightMode ? 'black' : 'white';
};

function changeSky() {
    var sky = document.getElementById("sky");
    sky.style.background = isNightMode ? 'linear-gradient(to bottom, black, blue, lightblue, white)' : 'linear-gradient(to bottom, white, lightblue, blue, black)';
};


/// COOL PAGE SCROLL


function scrollToBottom() {
    const targetPosition = document.body.scrollHeight - window.innerHeight;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    const duration = 5000; // scroll speed (in milliseconds)
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
