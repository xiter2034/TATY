// estrelinhas de fundo
(function () {
  const starsEl = document.getElementById('stars');
  const count = 60;
  for (let i = 0; i < count; i++) {
    const s = document.createElement('div');
    s.className = 'star';
    const size = Math.random() * 2.4 + 1;
    s.style.width = size + 'px';
    s.style.height = size + 'px';
    s.style.left = Math.random() * 100 + '%';
    s.style.top = Math.random() * 100 + '%';
    s.style.animationDelay = Math.random() * 4 + 's';
    starsEl.appendChild(s);
  }
})();

// navegação entre seções
function goTo(n) {
  document.querySelectorAll('.screen').forEach((s) => s.classList.remove('active'));
  document.getElementById('screen-' + n).classList.add('active');
  window.scrollTo({ top: 0, behavior: 'instant' });
}

// timer ao vivo desde 22/12/2025
const START = new Date(2025, 11, 22, 0, 0, 0); // mes 11 = dezembro (0-index)

function updateTimer() {
  const now = new Date();
  let months = (now.getFullYear() - START.getFullYear()) * 12 + (now.getMonth() - START.getMonth());
  let temp = new Date(START);
  temp.setMonth(temp.getMonth() + months);
  if (temp > now) {
    months--;
    temp = new Date(START);
    temp.setMonth(temp.getMonth() + months);
  }
  let diff = now - temp;
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  diff -= days * (1000 * 60 * 60 * 24);
  const hours = Math.floor(diff / (1000 * 60 * 60));
  diff -= hours * (1000 * 60 * 60);
  const mins = Math.floor(diff / (1000 * 60));
  diff -= mins * (1000 * 60);
  const secs = Math.floor(diff / 1000);

  document.getElementById('t-months').textContent = months;
  document.getElementById('t-days').textContent = days;
  document.getElementById('t-hours').textContent = String(hours).padStart(2, '0');
  document.getElementById('t-mins').textContent = String(mins).padStart(2, '0');
  document.getElementById('t-secs').textContent = String(secs).padStart(2, '0');
}

updateTimer();
setInterval(updateTimer, 1000);
