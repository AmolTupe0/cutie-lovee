// main.js

// Array of scene texts (admiration only, no proposal)
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
    "Ending with a soft note: You're truly admired. 💫"
];

// DOM elements
const startBtn = document.getElementById('start-btn');
const continueBtn = document.getElementById('continue-btn');
const sceneElement = document.getElementById('scene');
const bgMusic = document.getElementById('bg-music');
const particlesContainer = document.querySelector('.particles');

// Current scene index
let currentScene = 0;

// Function to show next scene
function showNextScene() {
    if (currentScene < scenes.length) {
        sceneElement.innerHTML = scenes[currentScene];
        sceneElement.classList.add('active');
        
        // Hide continue button initially
        continueBtn.classList.add('hidden');
        
        // Show continue button after 3 seconds
        setTimeout(() => {
            continueBtn.textContent = currentScene % 3 === 0 ? 'Feel this 🌸' : currentScene % 3 === 1 ? 'One more line ✨' : 'Continue 💖';
            continueBtn.classList.remove('hidden');
        }, 3000);
        
        currentScene++;
    } else {
        // End of scenes, hide button
        continueBtn.classList.add('hidden');
        // Optional: Loop or add end message
        sceneElement.innerHTML += '<br><br>Feel this warmth anytime. 💖';
    }
}

// Function to create particles
function createParticles() {
    const emojis = ['🌸', '🌹', '✨', '💖'];
    for (let i = 0; i < 20; i++) { // Create 20 particles
        const particle = document.createElement('div');
        particle.classList.add('particle');
        particle.textContent = emojis[Math.floor(Math.random() * emojis.length)];
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.animationDelay = `${Math.random() * 10}s`;
        particle.style.animationDuration = `${15 + Math.random() * 10}s`;
        particlesContainer.appendChild(particle);
    }
}

// Event listener for start button
startBtn.addEventListener('click', () => {
    startBtn.classList.add('hidden');
    bgMusic.play().catch(error => console.log('Music play error:', error)); // Handle autoplay policy
    createParticles(); // Start particles
    showNextScene();
    
    // Optional soft vibration if supported
    if ('vibrate' in navigator) {
        navigator.vibrate(100);
    }
});

// Event listener for continue button
continueBtn.addEventListener('click', () => {
    sceneElement.classList.remove('active');
    setTimeout(showNextScene, 500); // Short delay for transition
    
    // Optional soft vibration
    if ('vibrate' in navigator) {
        navigator.vibrate(50);
    }
});
