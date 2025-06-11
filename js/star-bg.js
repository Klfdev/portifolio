// Fundo estrelado animado para o portfólio
const canvas = document.getElementById('star-bg');
const ctx = canvas.getContext('2d');
let stars = [];

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

function randomBetween(a, b) {
  return a + Math.random() * (b - a);
}

function createStars(count) {
  stars = [];
  for(let i = 0; i < count; i++) {
    stars.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: randomBetween(0.5, 1.8),
      alpha: randomBetween(0.15, 0.88),
      speed: randomBetween(0.03, 0.12)
    });
  }
}
function animateStars() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for(let star of stars) {
    ctx.save();
    ctx.globalAlpha = star.alpha;
    ctx.beginPath();
    ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
    ctx.fillStyle = '#cdfaff';
    ctx.shadowColor = '#00eaff';
    ctx.shadowBlur = 6;
    ctx.fill();
    ctx.restore();

    // movimento sutil
    star.y += star.speed;
    if(star.y > canvas.height) {
      star.y = 0;
      star.x = Math.random() * canvas.width;
    }
  }
  requestAnimationFrame(animateStars);
}

createStars(window.innerWidth < 600 ? 65 : 140);
window.addEventListener('resize', () => createStars(window.innerWidth < 600 ? 65 : 140));
animateStars();