const myBtn = document.querySelector('.switch input');
const navinfo = document.querySelector('.nav-info');
const heading3 = document.querySelector('.dark-mode h3');
const cards = document.querySelectorAll('.four-cards .card');
const heading1 = document.querySelectorAll('.s-perc h1');
const pages = document.querySelectorAll('.pages .page');
let turn = 0;

myBtn.onclick = () => {
  document.body.classList.toggle('dark-theme');
  navinfo.classList.toggle('light-color');
  heading3.classList.toggle('light-color');

  if (turn == 0) {
    cards.forEach(el => {
      el.classList.replace('bg-color-light', 'bg-color-dark');
    });

    pages.forEach(el => {
      el.classList.replace('bg-color-light', 'bg-color-dark');
    });

    heading1.forEach(el => {
      el.classList.replace('light-color', 'dark-color');
    });

    turn = 1;
  } else {
    cards.forEach(el => {
      el.classList.replace('bg-color-dark', 'bg-color-light');
    });

    pages.forEach(el => {
      el.classList.replace('bg-color-dark', 'bg-color-light');
    });

    turn = 0;
  }
};
