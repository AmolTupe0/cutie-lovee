// main.js

// Scenes array - crafted for emotional attachment, simple and heartfelt
const scenes = [
    "Hey, this isn't a proposal or anything... just pure admiration for you. 💖",
    "Tumhari smile jaise soft sunrise, dil ko warmth deti hai. 🌅",
    "Every time I think of you, it feels like a gentle hug from afar. 🤗",
    "You're so special, like a dream that makes everything better. ✨",
    "Just wanted to say, your presence brings so much comfort and joy. 🌸",
    "Admiring how strong and beautiful you are, inside out. 💪❤️",
    "This is all about feeling close, no pressure, just warmth. 🌟",
    "You make the world feel softer and more colorful. 🎨",
    "Thank you for being you – that's enough to admire forever. 🌹",
    "And honestly... looking at your photos just melts me every time 💞"
];

// DOM elements
const startBtn     = document.getElementById('start-btn');
const continueBtn  = document.getElementById('continue-btn');
const sceneEl      = document.getElementById('scene');
const endingEl     = document.getElementById('ending');
const bgMusic      = document.getElementById('bg-music');
const particles    = document.querySelector('.particles');

let current = 0;

// Create floating particles - more for beautiful, replayable feel
function createParticles() {
    const emojis = ['🌸','🌹','✨','💖','💫','🌷','❤️','🥰'];
    for (let i = 0; i < 30; i++) { // More particles for immersion
        const p = document.createElement('div');
        p.className = 'particle';
        p.textContent = emojis[Math.floor(Math.random()*emojis.length)];
        p.style.left = Math.random()*100 + '%';
        p.style.animationDelay = Math.random()*12 + 's';
        p.style.animationDuration = (14 + Math.random()*12) + 's';
        particles.appendChild(p);
    }
}

// Show next scene with smooth timing
function showNext() {
    if (current < scenes.length) {
        sceneEl.innerHTML = scenes[current];
        sceneEl.classList.add('active');

        continueBtn.classList.add('hidden');

        setTimeout(() => {
            let txt = current % 3 === 0 ? 'Feel this 🌸' :
                      current % 3 === 1 ? 'One more line ✨' : 'Continue 💖';
            continueBtn.textContent = txt;
            continueBtn.classList.remove('hidden');
        }, 3200);

        current++;
    } else {
        // Transition to ending
        continueBtn.classList.add('hidden');
        sceneEl.classList.remove('active');
        
        setTimeout(() => {
            sceneEl.classList.add('hidden');
            endingEl.classList.remove('hidden');
            setTimeout(() => endingEl.classList.add('active'), 300);

            // Start photo carousel
            startPhotoCarousel();
        }, 800);
    }
}

// Photo carousel - slow and dreamy for attachment
function startPhotoCarousel() {
    const photos = document.querySelectorAll('.photo');
    let idx = 0;
    
    function nextPhoto() {
        photos.forEach(p => p.classList.remove('active'));
        photos[idx].classList.add('active');
        idx = (idx + 1) % photos.length;
    }

    nextPhoto(); // Initial
    setInterval(nextPhoto, 4500); // Slower change for lingering feel
}

// Start event
startBtn.addEventListener('click', () => {
    startBtn.classList.add('hidden');
    bgMusic.play().catch(e => console.log("Audio error:", e));
    createParticles();
    showNext();

    if ('vibrate' in navigator) navigator.vibrate(80);
});

// Continue event
continueBtn.addEventListener('click', () => {
    sceneEl.classList.remove('active');
    setTimeout(showNext, 600);

    if ('vibrate' in navigator) navigator.vibrate(40);
});
