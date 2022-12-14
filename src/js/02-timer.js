import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const btn = document.querySelector("[data-start]");
const daysLeft = document.querySelector("[data-days]");
const hoursLeft = document.querySelector("[data-hours]");
const minutesLeft = document.querySelector("[data-minutes]");
const secondsLeft = document.querySelector("[data-seconds]");
const input = document.querySelector("input");
let selectedData;
let timerId;

btn.addEventListener("click", remainingTime);

btn.setAttribute("disabled", true);

console.log(input.attributes)

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}


const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
            btn.removeAttribute("disabled");
            selectedData = selectedDates[0].getTime();
       // }
    }
}

const calendar = new flatpickr("#datetime-picker", options);

function remainingTime() {
    btn.setAttribute("disabled", true);
    input.setAttribute("disabled", true);
    console.log(input.attributes);

    timerId = setInterval(() => {
        const data = Date.now();
        const timeLeft = selectedData - data;
        const { days, hours, minutes, seconds } = convertMs(timeLeft);

        if (timeLeft < 0) {
            clearInterval(timerId);
            return window.alert("Please choose a date in the future");
        }

        updateTimer({ days, hours, minutes, seconds });
    }, 1000);

    
};

function updateTimer({ days, hours, minutes, seconds }) {
    daysLeft.textContent = `${days}`.padStart(2, "0");
    hoursLeft.textContent = `${hours}`.padStart(2,"0");
    minutesLeft.textContent = `${minutes}`.padStart(2, "0");
    secondsLeft.textContent = `${seconds}`.padStart(2, "0");
    
}







