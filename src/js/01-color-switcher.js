const refs = {
  start: document.querySelector('button[data-start]'),
  stop: document.querySelector('button[data-stop]'),
};

let colorId = null;

refs.start.addEventListener('click', colorBodyStart);
refs.stop.addEventListener('click', colorBodyStop);

function colorBodyStart() {
  disabled(refs.start, refs.stop);

  colorId = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
}

function colorBodyStop() {
  clearInterval(colorId);
  disabled(refs.start, refs.stop);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function disabled(start, stop) {
  if (start.disabled && !stop.disabled) {
    start.disabled = false;
    stop.disabled = true;
  } else {
    start.disabled = true;
    stop.disabled = false;
  }
}
