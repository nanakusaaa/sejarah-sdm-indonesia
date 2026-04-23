// FLOATING EMBERS
const container = document.getElementById('embers');
const colors = [
  '#f59e0b',
  '#ea580c',
  '#fde68a',
  '#d97706',
  '#fed7aa',
  '#c2410c',
];
for (let i = 0; i < 45; i++) {
  const ember = document.createElement('div');
  ember.className = 'ember';
  const size = Math.random() * 4 + 2;
  ember.style.width = size + 'px';
  ember.style.height = size + 'px';
  ember.style.left = Math.random() * 100 + 'vw';
  ember.style.background = `radial-gradient(circle, ${
    colors[Math.floor(Math.random() * colors.length)]
  }, transparent)`;
  ember.style.animationDuration = Math.random() * 10 + 8 + 's';
  ember.style.animationDelay = Math.random() * 10 + 's';
  ember.style.opacity = Math.random() * 0.5 + 0.15;
  container.appendChild(ember);
}

// PARALLAX + REVEAL
window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;

  document.querySelector('.cyber-grid').style.transform = `translateY(${
    scrollY * 0.12
  }px)`;

  document.querySelectorAll('.hex-pattern').forEach((el, i) => {
    const dir = i % 2 === 0 ? 1 : -1;
    el.style.transform = `translateY(${scrollY * 0.06 * dir}px)`;
  });

  document.querySelectorAll('.reveal').forEach((el) => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.88) {
      el.classList.add('visible');
    }
  });
});

window.dispatchEvent(new Event('scroll'));
