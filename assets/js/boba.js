let hasStartedbobaCounter = false;

function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

function startbobaCounter() {
    const targetNumber = 320;
    const totalDuration = 2700; // Total duration in milliseconds
    const element = document.getElementById('bobaCounter');
    let currentNumber = 0;
    const startTime = Date.now(); // Record the start time
    const updateCounter = () => {
        const currentTime = Date.now();
        const elapsedTime = currentTime - startTime;
        const progress = Math.min(elapsedTime / totalDuration, 1); // Ensure progress does not exceed 1
        currentNumber = Math.floor(easeOutCubic(progress) * targetNumber);

        if (currentNumber < targetNumber) {
            element.textContent = currentNumber;
            setTimeout(updateCounter, 20); // Update every 20ms for smoothness
        } else {
            element.textContent = targetNumber; // Ensure it ends on the exact target number
        }
    };
    // Easing function for a more noticeable deceleration effect
    function easeOutCubic(t) {
        return (--t) * t * t + 1;
    }

    setTimeout(updateCounter, 0);
}

document.addEventListener('scroll', function() {
    const bobaSection = document.getElementById('bobaSection');
    if (isInViewport(bobaSection) && !hasStartedbobaCounter) {
        hasStartedbobaCounter = true;
        startbobaCounter();
    }
});