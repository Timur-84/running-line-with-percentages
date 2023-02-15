// Вариант 1
// const razmetkaHTML = `<div class="root">
// <div class="text">89%</div>
// <div class="container">
//     <div class="load"></div>
// </div>
// </div>`;

// function createHTML() {
//   document.body.insertAdjacentHTML("beforeend", razmetkaHTML);
// }

// createHTML();

// const dinamicLine = (witdh) => {
//   let count = 0;
//   let intervalId;

//   intervalId = setInterval(function () {
//     const load = document.querySelector(".load");
//     const text = document.querySelector(".text");
//     text.textContent = `${count}%`;
//     load.style.width = `${count}%`;
//     count++;
//     if (count > witdh) {
//       clearInterval(intervalId);
//       return;
//     }
//   }, 30);
// };

// dinamicLine(99);

// Вариант 2

const root = document.createElement("div");
root.setAttribute("class", "root");
const text = document.createElement("div");
text.setAttribute("class", "text");
const container = document.createElement("div");
container.setAttribute("class", "container");
const load = document.createElement("div");
load.setAttribute("class", "load");

const createHTML = () => {
  document.body.appendChild(root);
  root.appendChild(text);
  root.appendChild(container);
  container.appendChild(load);
};

createHTML();

const dinamicLine = (witdh) => {
  let count = 0;
  let intervalId;

  intervalId = setInterval(function () {
    text.textContent = `${count}%`;
    load.style.width = `${count}%`;
    count++;
    if (count > witdh) {
      clearInterval(intervalId);
      return;
    }
  }, 20);
};

dinamicLine(99);
