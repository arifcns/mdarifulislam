const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
const navLinks = document.querySelectorAll('.nav a');

menuToggle?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', open);
});

navLinks.forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  menuToggle?.setAttribute('aria-expanded', 'false');
}));

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

const cursor = document.querySelector('.cursor-glow');
window.addEventListener('pointermove', e => {
  cursor.style.left = e.clientX + 'px';
  cursor.style.top = e.clientY + 'px';
});

document.getElementById('year').textContent = new Date().getFullYear();

function downloadCV(e) {
  e.preventDefault();
  alert('Add your CV file as assets/Ariful-Islam-CV.pdf, then change this button link to that file.');
}

const sections = [...document.querySelectorAll('main section[id]')];
const menuItems = [...document.querySelectorAll('.nav a:not(.nav-cta)')];

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    if (window.scrollY >= section.offsetTop - 180) current = section.id;
  });
  menuItems.forEach(item => item.classList.toggle('active', item.getAttribute('href') === '#' + current));
});
