// Typed.js para o efeito de digitação
// Mantido o efeito para o hero, mas o conteúdo pode ser mais direto para o portfólio pessoal
const typed = new Typed("#typed-text", {
  strings: [
    "Desenvolvedor Full Stack",
    "Especialista em Automações",
    "Criador de Sistemas Web",
    "Construindo o futuro com código."
  ],
  typeSpeed: 50,
  backSpeed: 30,
  loop: true,
  showCursor: true,
  cursorChar: '|',
});

// Scroll suave ao clicar nos links do menu
document.querySelectorAll('.menu a[href^="#"]').forEach(link => {
  link.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    if (href.length > 1 && document.querySelector(href)) {
      e.preventDefault();
      document.querySelector(href).scrollIntoView({ behavior: 'smooth', block: 'start' });

      // Fechar menu mobile se estiver aberto
      const navMenu = document.querySelector('.menu');
      const hamburger = document.getElementById('hamburger-menu');
      if (navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
      }
    }
  });
});

// Destacar seção ativa no menu conforme o scroll
function onScroll() {
  const sections = document.querySelectorAll('main section[id]');
  let scrollPos = window.scrollY || window.pageYOffset;

  sections.forEach(section => {
    // Adicionado um offset de 150px para dar mais espaço para o navbar fixo
    if (
      section.offsetTop <= scrollPos + 150 &&
      (section.offsetTop + section.offsetHeight) > scrollPos + 150
    ) {
      document.querySelectorAll('.menu a').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${section.id}`) {
          link.classList.add('active');
        }
      });
    }
  });
}
window.addEventListener('scroll', onScroll);
onScroll(); // Dispara ao carregar a página para definir o link ativo inicial

// Botão "voltar ao topo"
const backToTop = document.getElementById('back-to-top');
if (backToTop) { // Verifica se o botão existe no HTML
  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      backToTop.classList.add('show');
    } else {
      backToTop.classList.remove('show');
    }
  });
  backToTop.onclick = () => window.scrollTo({ top: 0, behavior: 'smooth' });
}


// ScrollReveal animação em skills e projetos
if (window.ScrollReveal) {
  ScrollReveal().reveal('.skill-card', {
    distance: '40px',
    duration: 900,
    origin: 'bottom',
    interval: 90,
    opacity: 0,
    easing: 'ease-out'
  });

  ScrollReveal().reveal('.project-card', {
    distance: '50px',
    duration: 1000,
    origin: 'bottom',
    interval: 120,
    opacity: 0,
    easing: 'ease-out',
    delay: 200 // Pequeno atraso para não chocar com a animação hero
  });

  // Animação para seções usando a classe 'reveal'
  ScrollReveal().reveal('.reveal', {
    distance: '50px',
    duration: 1200,
    origin: 'bottom',
    opacity: 0,
    easing: 'ease-out',
    viewFactor: 0.2, // O elemento se revela quando 20% dele entra na viewport
    beforeReveal: (domEl) => {
      // Adiciona a classe 'visible' para iniciar a transição CSS
      domEl.classList.add('visible');
    }
  });

}


// Lógica do menu hambúrguer para mobile
document.addEventListener("DOMContentLoaded", () => {
  const hamburgerMenu = document.getElementById('hamburger-menu');
  const navMenu = document.querySelector('.menu');

  if (hamburgerMenu && navMenu) {
    hamburgerMenu.addEventListener('click', () => {
      hamburgerMenu.classList.toggle('active');
      navMenu.classList.toggle('active');
    });
  }
});