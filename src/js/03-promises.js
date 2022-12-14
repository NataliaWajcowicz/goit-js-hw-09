const delayInput = document.querySelector("[name=delay]");
const stepInput = document.querySelector("[name=step]");
const amountInput = document.querySelector("[name=amount]");
const btn = document.querySelector("button");
const form = document.querySelector(".form");

form.addEventListener("submit", promiseGenerator);

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
  setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
          if (shouldResolve) {
            resolve({position, delay});
          } else {
            reject({position,delay});
          }
        }, delay)
      })
       
    }



function promiseGenerator(event) {
  event.preventDefault();
  console.clear();


  let userAmount = Number(event.currentTarget.amount.value);
  let delay = Number(event.currentTarget.delay.value);
  let userStep = Number(event.currentTarget.step.value);

  

  for (let position = 1; position <= userAmount; position+=1){
    createPromise(position, delay)
    .then(({ position, delay }) => {
      console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
    console.log(`❌ Rejected promise ${position} in ${delay}ms`);
    
  })
    delay += userStep;
  }

  event.currentTarget.reset();

  btn.setAttribute("disabled", true);

  setInterval(() => {
    btn.removeAttribute("disabled");
  }, 5000);

  


}




 



