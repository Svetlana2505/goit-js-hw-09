function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const start = document.querySelector('[data-start]');
const stop = document.querySelector('[data-stop]');

start.addEventListener('click', onStartClick);
stop.addEventListener('click', onStopClick);

let time = null;
let starting = false;

function onStartClick() {
  if (starting) {
    return;
  }
  time = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
  starting = true;
}

function onStopClick() {
  starting = false;
  clearInterval(time);
}
