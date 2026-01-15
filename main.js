let index = 0;
const screens = document.querySelectorAll(".screen");
const music = document.getElementById("bgMusic");

function startExperience() {
  music.play();
  next();
}

function next() {
  screens[index].classList.remove("active");
  index++;
  if (screens[index]) {
    screens[index].classList.add("active");
  }
}

/* Tap reveal */
document.querySelectorAll(".tap").forEach(el => {
  el.addEventListener("click", () => {
    el.innerText = el.dataset.text;
    el.style.background = "rgba(255,77,136,0.25)";
  });
});

/* Meter animation */
let percent = 0;
const counter = document.getElementById("count");
const fill = document.querySelector(".fill");

let meter = setInterval(() => {
  if (percent < 120) {
    percent++;
    counter.innerText = percent + "%";
    fill.style.width = percent + "%";
  } else {
    clearInterval(meter);
  }
}, 30);
