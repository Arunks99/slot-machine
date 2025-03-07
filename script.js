/* script.js */
const products = [
    "🍎 Apple", "🍌 Banana", "🍇 Grapes", "🍉 Watermelon", "🍍 Pineapple",
    "🥑 Avocado", "🥕 Carrot", "🌽 Corn", "🥦 Broccoli", "🍒 Cherry",
    "🥭 Mango", "🍑 Peach", "🍐 Pear", "🍊 Orange", "🍓 Strawberry",
    "🥔 Potato", "🍆 Eggplant", "🧄 Garlic", "🧅 Onion", "🌶️ Chili"
];

const slotDisplay = document.getElementById("slot-display");
const startButton = document.getElementById("start-button");
let isRunning = false;
let interval;

function getRandomSpeed() {
    return Math.random() * (150 - 50) + 50; // Speed varies between 50ms and 150ms
}

function startSlotMachine() {
    if (isRunning) return;
    isRunning = true;
    startButton.disabled = true;
    slotDisplay.textContent = "Starting...";
    
    let index = 0;
    function cycleImages() {
        slotDisplay.textContent = products[index];
        index = (index + 1) % products.length;
        interval = setTimeout(cycleImages, getRandomSpeed());
    }
    cycleImages();
}

function stopSlotMachine() {
    if (!isRunning) return;
    isRunning = false;
    clearTimeout(interval);
    startButton.disabled = false;
}

startButton.addEventListener("click", startSlotMachine);
document.body.addEventListener("click", stopSlotMachine);
document.body.addEventListener("touchstart", stopSlotMachine);
