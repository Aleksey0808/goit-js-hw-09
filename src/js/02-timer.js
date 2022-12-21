import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const refs = {
    day: document.querySelector('span[data-days]'),
    hours: document.querySelector('span[data-hours]'),
    minutes: document.querySelector('span[data-minutes]'),
    seconds: document.querySelector('span[data-seconds]'),
    start: document.querySelector('button[data-start]'),
    text: document.querySelector('#datetime-picker')
};

refs.start.addEventListener('click', selectСurrentВate)

refs.start.disabled = true;

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
      console.log(selectedDates[0]);
      if (selectedDates[0] < new Date()) {
        alert("Please choose a date in the future");
        refs.start.disabled = true;
      } else {
        refs.start.disabled = false;
      }
    },
  };

flatpickr(refs.text, options);

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
  
  console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
  console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
  console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}

  function addLeadingZero(value) {
    return value.toString().padStart(2,'0');
  }


  function selectСurrentВate() {
   let timer = setInterval(() => {
    const currentTime = new Date(refs.text.value) - new Date();

    refs.start.disabled = true;

    if (currentTime >= 0) {
        let timeObject = convertMs(currentTime);
        refs.day.textContent = addLeadingZero(timeObject.days);
        refs.hours.textContent = addLeadingZero(timeObject.hours);
        refs.minutes.textContent = addLeadingZero(timeObject.minutes);
        refs.seconds.textContent = addLeadingZero(timeObject.seconds);
    }
    
    const timeDay = currentTime.getDay()
    const timeHours = currentTime.getHours();
    const timeMinutes = currentTime.getMinutes();
    const timeSeconds = currentTime.getSeconds();
    const totalTime = `Поточний час: ${timeHours.toString().padStart(2,'0')} : ${timeMinutes.toString().padStart(2,'0')} : ${timeSeconds.toString().padStart(2,'0')}`

    
}, 1000)
  }
