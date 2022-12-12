import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const btn = document.querySelector("[data-start]");
const daysLeft = document.querySelector("[data-days]");
const hoursLeft = document.querySelector("[data-hours]");
const minutesLeft = document.querySelector("[data-minutes]");
const secondsLeft = document.querySelector("[data-seconds]");
const spans = document.querySelectorAll(".value");









btn.setAttribute("disabled", true);

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        function remainingTime() {
            const data = new Date();
            const selectedData = selectedDates[0];
            const timeLeft = selectedData.getTime() -data.getTime();
            

            if (timeLeft >= 0) {
                btn.removeAttribute("disabled");
                


                const second = 1000;
                const minute = second * 60;
                const hour = minute * 60;
                const day = hour * 24;



         
                const days = Math.floor(timeLeft / day);
                const hours = Math.floor((timeLeft % day) / hour);
                const minutes = Math.floor(((timeLeft % day) % hour) / minute);
                const seconds = Math.floor((((timeLeft % day) % hour) % minute) / second);

                const timerCounter = { days, hours, minutes, seconds };

               
                daysLeft.textContent= `${days}`.padStart(2,"0");
                hoursLeft.textContent = `${hours}`.padStart(2,"0");;
                minutesLeft.textContent = `${minutes}`.padStart(2,"0");;
                secondsLeft.textContent = `${seconds}`.padStart(2,"0");; 
                            
            
                
            } else {
                window.alert("Please choose a date in the future");
            }
        }

        remainingTime();

        btn.addEventListener("click", ()=>
        setInterval(() => { remainingTime() }, 1000))


        
       
      
        
  },
};

const calendar = new flatpickr("#datetime-picker", options);






