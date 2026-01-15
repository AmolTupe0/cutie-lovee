const texts = [
  "Hey… 🌙",
  "when i saw you .. my heart get beets faster 💟♥️.",
  "Just something I wanted you to feel.",
  "The calm you bring…",
  "The softness in your presence…",
  "The way you exist without trying…",
  "Everything about you feels special.",
  "Some people feel like home.",
  "And somehow… you feel like that.",
  "This is just admiration.",
  "This is just love. ❤️"
];

let index = 0;

const textEl = document.getElementById("text");
const music = document.getElementById("bgMusic");
const overlay = document.getElementById("overlay");

overlay.addEventListener("click", () => {
  overlay.style.display = "none";
  music.play();
  showText();
});

function showText() {
  textEl.classList.remove("show");

  setTimeout(() => {
    textEl.innerText = texts[index];
    textEl.classList.add("show");
    index++;

    if (index < texts.length) {
      setTimeout(showText, 4000); // scene duration
    }
  }, 800);
}
