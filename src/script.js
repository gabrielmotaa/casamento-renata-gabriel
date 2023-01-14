// movimentação da navbar
const navbar = document.querySelector('nav');

window.onscroll = function () {
  if (window.scrollY < 20) {
    if (navbar.classList.contains('active')) return;
    navbar.classList.remove('nav-moving');
  } else {
    navbar.classList.add('nav-moving');
  }
}

// relógio de countdown
const weddingDate = new Date('2023-02-19T16:00:00-03:00');

function updateCountdown() {
  const remainingDate = weddingDate - new Date();

  const countdownSection = document.querySelector('.countdown-section');

  if (!countdownSection) return;

  if (remainingDate < 0) {
    countdownSection.remove();
    return;
  }

  const countdown = document.querySelector('.countdown-timer');
  const daysBox = countdown.querySelectorAll('.timer-box')[0];
  const hoursBox = countdown.querySelectorAll('.timer-box')[1];
  const minutesBox = countdown.querySelectorAll('.timer-box')[2];

  const remaningSeconds = remainingDate / 1000;
  const remaningMinutes = Math.floor(remaningSeconds / 60);
  const remaningHours = Math.floor(remaningMinutes / 60);
  const remaningDays = Math.floor(remaningHours / 24);

  const days = remaningDays % 365;
  daysBox.querySelector('.value').innerText = days;
  daysBox.querySelector('p').innerText = days > 1 ? 'dias' : 'dia';

  const hours = remaningHours % 60;
  hoursBox.querySelector('.value').innerText = hours;
  hoursBox.querySelector('p').innerText = hours > 1 ? 'horas' : 'hora';

  const minutes = remaningMinutes % 60;
  minutesBox.querySelector('.value').innerText = minutes;
  minutesBox.querySelector('p').innerText = minutes > 1 ? 'minutos' : 'minuto';
}

updateCountdown();
setInterval(updateCountdown, 1000);

// slider de fotos
const slider = document.querySelector(".slider");
let mouseDown = false;
let startX, scrollLeft;

function startDragging(e) {
  slider.style.cursor = 'grabbing';
  mouseDown = true;
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
};

function stopDragging() {
  slider.style.cursor = 'grab';
  mouseDown = false;
}

// evitar quebrar em páginas que não sejam a inicial
if (slider) {
  slider.addEventListener('mousemove', (e) => {
    e.preventDefault();
    if (!mouseDown) return;
    const x = e.pageX - slider.offsetLeft;
    const scroll = x - startX;
    slider.scrollLeft = scrollLeft - scroll;
  });

  slider.addEventListener('mousedown', startDragging, false);
  slider.addEventListener('mouseup', stopDragging, false);
  slider.addEventListener('mouseleave', stopDragging, false);
}


// mobile menu
const menu = document.querySelector('.mobile-menu');
menu.addEventListener('click', () => {
  navbar.classList.toggle('active');
  if (!navbar.classList.contains('nav-moving')) {
    navbar.classList.add('nav-moving');
  } else if (!navbar.classList.contains('active')) {
    navbar.classList.remove('nav-moving');
  }
})

// modal
const giftBoxes = document.querySelectorAll('.gifts div');
const modal = document.querySelector('dialog');
const closeButton = document.querySelector('dialog button');

function modalClick() {
  modal.showModal();
}

function modalClose() {
  modal.close();
}

giftBoxes.forEach(giftBox => giftBox.addEventListener('click', modalClick));
closeButton.addEventListener('click', modalClose);