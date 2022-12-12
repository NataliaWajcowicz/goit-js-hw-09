const delayInput = document.querySelector("[name=delay]");
const stepInput = document.querySelector("[name=step]");
const amountInput = document.querySelector("[name=amount]");
const btn = document.querySelector("button");

const userAmount = parseInt(stepInput.textContent);
const userDelay = parseInt(delayInput.textContent);
const userStep = parseInt(stepInput.textContent);

function createPromise(position, delay) {
  setTimeout(() => {
    for (let i = 1; i <= userAmount; i++) {
      const shouldResolve = Math.random() > 0.3;
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          if (shouldResolve) {
            resolve(`✅ Fulfilled promise ${position} in ${delay}ms`);
          } else {
            reject(`❌ Rejected promise ${position} in ${delay}ms`);
          }
        }, userStep)
      })
        .then(console.log)
        .catch(console.error)
    }
  }, userDelay);  
}





btn.addEventListener("click", (event) => {
  event.preventDefault();
  createPromise(userAmount, userStep);
   
  }
)
 



