const startBtn = document.querySelector("button[data-start]");
const stopBtn = document.querySelector("button[data-stop]");
const body = document.querySelector("body");
let timerId = null;

stopBtn.setAttribute("disabled", true);


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function changeColor(){
    const color = getRandomHexColor();
    body.style.backgroundColor = `${color}`;


}

function startClickHandler(){
    timerId = setInterval(() => {
        changeColor();
    }, 1000);

    startBtn.setAttribute("disabled", true);

    if (stopBtn.hasAttribute("disabled")) {

        stopBtn.removeAttribute("disabled");
    }

}

function stopClickHandler(){
    clearInterval(timerId);
    stopBtn.setAttribute("disabled", true);
    startBtn.removeAttribute("disabled");


}

startBtn.addEventListener("click", startClickHandler);

stopBtn.addEventListener("click", stopClickHandler);


