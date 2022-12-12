const delayInput = document.querySelector("[name=delay]");
const stepInput = document.querySelector("[name=step]");
const amountInput = document.querySelector("[name=amount]");
const btn = document.querySelector("button");

const userAmount = parseInt(stepInput.textContent);
const userDelay = parseInt(delayInput.textContent);
const userStep = parseInt(stepInput.textContent);

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve,reject)=>{
  if (shouldResolve) {
     resolve(`✅ Fulfilled promise ${position} in ${delay}ms`);  
    } else {
     reject(`❌ Rejected promise ${position} in ${delay}ms`);
  }
  }).then(console.log).catch(console.error)
  
}

function createLoop()  {
  for (let i = 2; i <= userAmount; i++) {
    createPromise(i, userStep)
  }
}


btn.addEventListener("click", () => {
  createPromise(1, userDelay);
  createLoop();
  
  }
)




