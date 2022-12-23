import Notiflix from 'notiflix';

const refs = {
  delay: document.querySelector('input[name="delay"]'),
  step: document.querySelector('input[name="step"]'),
  amount: document.querySelector('input[name="amount"]'),
  button: document.querySelector('button[type="submit"]'),
};

refs.button.addEventListener('click', startPromise);

function createPromise(position, delay) {
  
  const promise = new Promise((res, rej) => {
  setTimeout(() => {
    const shouldResolve = Math.random() > 0.3;
    if (shouldResolve) {
      res({position, delay});
      } else {
        rej({position, delay});
      }
  }, delay)
})
  return promise;
};


function startPromise(evt){
  evt.preventDefault();

  let delayEl = Number(refs.delay.value);
  let stepEl = Number(refs.step.value)

  for (let i = 0; i < refs.amount.value; i++) {
    createPromise(i + 1, delayEl + i * stepEl)
      .then(({position, delay}) => {
        Notiflix.Notify.success(
          `✅ Fulfilled promise ${position} in ${delay}ms`
        );
      })
      .catch(({position, delay}) => {
        Notiflix.Notify.failure(
          `❌ Rejected promise ${position} in ${delay}ms`
        );
      })
  }

};



