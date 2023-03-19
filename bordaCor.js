const foto = document.querySelector('.foto');
let angle = 0;

setInterval(() => {
  angle += 10;
  foto.style.transform = `rotate(${angle}deg)`;
}, 100);
