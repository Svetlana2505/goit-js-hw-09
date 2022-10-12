import Notiflix from 'notiflix';

const form = document.querySelector('form');
form.addEventListener('submit', onFormClick);

function onFormClick(event) {
  event.preventDefault();

  let counter = 1;

  const amount = form.elements.amount.value;
  const step = Number(form.elements.step.value);
  let delay = Number(form.elements.delay.value);

  const intervalId = setInterval(() => {
    if (counter > amount) {
      clearInterval(intervalId);
      return;
    }

    createPromise(counter, delay).then(onSuccess).catch(onError);

    counter += 1;
    delay += step;

    event.target.reset();
  }, step);
}

function onSuccess({ position, delay }) {
  Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`, {
    useIcon: false,
  });
}

function onError({ position, delay }) {
  Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`, {
    useIcon: false,
  });
}

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;

    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      }
      reject({ position, delay });
    }, delay);
  });
}
