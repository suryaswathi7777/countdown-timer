// script.js

document.getElementById('start-button').addEventListener('click', function() {
    const targetDate = document.getElementById('target-date').value;
    const targetTime = document.getElementById('target-time').value;

    if (!targetDate || !targetTime) {
        alert('Please set both the date and time.');
        return;
    }

    const targetDateTime = new Date(`${targetDate}T${targetTime}`);
    const countdownElement = document.getElementById('countdown');

    const updateCountdown = () => {
        const now = new Date();
        const difference = targetDateTime - now;

        if (difference <= 0) {
            clearInterval(timerInterval);
            countdownElement.textContent = 'Time is up!';
            return;
        }

        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        countdownElement.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    };

    const timerInterval = setInterval(updateCountdown, 1000);
    updateCountdown();
});