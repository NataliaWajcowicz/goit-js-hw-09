const startBtn = document.querySelector("button[data-start]");
const stopBtn = document.querySelector("button[data-stop]");
const body = document.querySelector("body");
let timerId=null;


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function changeColor(){
    const color = getRandomHexColor();
    body.style.backgroundColor = `${color}`;


}

function startClickHandler(){
        timerId = setInterval(()=>{
        changeColor()
    },1000)

}

function stopClickHandler(){
    clearInterval(timerId);

}

startBtn.addEventListener("click", startClickHandler);

stopBtn.addEventListener("click", stopClickHandler);


