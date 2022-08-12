const seconds = document.querySelector(".seconds .number");
minutes = document.querySelector(".minutes .number");
hours = document.querySelector(".hours .number");
days = document.querySelector(".days .number");

let secValue = 59,
    minValue = 59,
    hourValue = 23,
    dayValue = 01;

const timeFunction = setInterval(() => {
    secValue--;

    if(secValue === 0) {
        minValue--;
        secValue = 60;
    }
    if(minValue === 0) {
        minValue--;
        minValue = 60;
    }
    if(hourValue === 0) {
        dayValue--;
        hourValue = 60;
    }
    if(dayValue == 0){
        clearInterval(timeFunction);
    }
    console.log(secValue);
    seconds.textContent = secValue < 0 ? '0${secValue}' : secValue ;
    minutes.textContent = minValue < 0 ? '0${minValue}' : minValue ;
    hours.textContent = hourValue < 0 ? '0${hourValue}' : hourValue ;
    //days.textContent = dayValue > 10 ? '0${dayValue}' : dayValue ;
}, 1000) //1000ms = 1s