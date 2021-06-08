const bgBlur = document.querySelector('.background__blur');
const loadText = document.querySelector('.loading__text');

let load = 0;
let interval = setInterval(blurring, 30);

function scale(number, inMin, inMax, outMin, outMax) {
  return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
}

function blurring() {
  load++;
  if (load > 99) clearInterval(interval);
  loadText.innerText = `${load}%`;
  loadText.style.opacity = scale(load, 0, 100, 1, 0);
  bgBlur.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;
};

