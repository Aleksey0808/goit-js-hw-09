const refs = {
    start: document.querySelector("button[data-start]"),
    stop: document.querySelector("button[data-stop]")
}

let colorId = null;

refs.start.addEventListener('click', colorBodyStart);
refs.stop.addEventListener('click', colorBodyStop);

function colorBodyStart() {
    refs.start.setAttribute("disabled", "disabled");
    refs.stop.removeAttribute("disabled", "disabled")
    
   colorId = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
}, 1000);
};

function colorBodyStop() {
    clearInterval(colorId);
    refs.start.removeAttribute("disabled", "disabled");
    refs.stop.setAttribute("disabled", "disabled");
};

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  };