const btn = document.getElementById('click-me-btn');
const clicksDisplay = document.getElementById('clicks');
let clicks = 0;

btn.addEventListener('click', () => {
    clicks++;
    clicksDisplay.textContent = clicks;
});
