const spanEl = document.getElementById('remaining-days');

const millisecondsInDay = 1000 * 60 * 60 * 24;
const today = new Date();
const weddingDay = new Date('2023-02-19 GMT-3');
const remainingDays = Math.floor((weddingDay - today) / millisecondsInDay);

spanEl.innerText = Math.floor(remainingDays);