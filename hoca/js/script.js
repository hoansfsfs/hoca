function moveFishRandomly(fish) {
    const x = Math.random() * (window.innerWidth - 100);
    const y = Math.random() * (window.innerHeight - 100);
    fish.style.transform = `translate(${x}px, ${y}px)`;
}

function startSwimming(fish) {
    setInterval(() => moveFishRandomly(fish), 3000);
}

const fishes = document.querySelectorAll('.fish');
fishes.forEach(fish => startSwimming(fish));

const addFishBtn = document.getElementById('addFishBtn');
addFishBtn.addEventListener('click', () => {
    const pool = document.getElementById('pool');
    const newFish = document.createElement('img');
    newFish.src = 'fish.png';
    newFish.className = 'fish';
    pool.appendChild(newFish);
    startSwimming(newFish);
});

const volumeSlider = document.getElementById('volumeSlider');
const bgMusic = document.getElementById('bgMusic');
if (bgMusic) {
    volumeSlider.addEventListener('input', () => {
        bgMusic.volume = volumeSlider.value;
    });
    addFishBtn.addEventListener('click', () => {
        if (bgMusic.paused) {
            bgMusic.play();
        }
    });
}