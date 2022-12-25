import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const refs = {
  day: document.querySelector('span[data-days]'),
  hours: document.querySelector('span[data-hours]'),
  minutes: document.querySelector('span[data-minutes]'),
  seconds: document.querySelector('span[data-seconds]'),
  start: document.querySelector('button[data-start]'),
  text: document.querySelector('#datetime-picker'),
  timerHtml: document.querySelector('.timer'),
};

const currentTime = Date.now();
let dateCounter = 1000;
let selectedDate = 0;

refs.start.addEventListener('click', selectСurrentВate);

refs.start.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose([selectedDates]) {
    selectedDate = selectedDates.getTime();
    correctDate(selectedDate);
  },
};

flatpickr(refs.text, options);

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;
  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return value.toString().padStart(2, '0');
}

function selectСurrentВate() {
  refs.start.disabled = true;
  refs.text.disabled = true;

  let timer = setInterval(() => {
    let dateTime = selectedDate - currentTime - dateCounter;

    dateCounter += 1000;

    if (dateTime < 1000) {
      clearInterval(timer);
    }

    renderingDom(dateTime);
  }, 1000);
}

function correctDate(selectedDate) {
  const lastDate = selectedDate > currentTime;

  if (!lastDate) {
    Notiflix.Notify.failure('Please choose a date in the future');
    return;
  }
  refs.start.disabled = false;
  return;
}

function renderingDom(time) {
  let { days, hours, minutes, seconds } = convertMs(time);
  refs.day.textContent = addLeadingZero(days);
  refs.hours.textContent = addLeadingZero(hours);
  refs.minutes.textContent = addLeadingZero(minutes);
  refs.seconds.textContent = addLeadingZero(seconds);
}
