document.addEventListener('DOMContentLoaded', () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav');
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  if (burger && nav) {
    burger.addEventListener('click', () => {
      nav.classList.toggle('open');
      burger.setAttribute('aria-expanded', nav.classList.contains('open') ? 'true' : 'false');
    });
    nav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => nav.classList.remove('open'));
    });
  }

  const chips = document.querySelectorAll('.chip');
  chips.forEach(chip => {
    chip.addEventListener('click', () => {
      chips.forEach(item => item.classList.remove('active'));
      chip.classList.add('active');
    });
  });

  const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('name')?.value || 'Cliente';
      const interest = document.getElementById('interest')?.value || 'Cotización';
      const status = document.getElementById('formStatus');
      status.textContent = 'Gracias. Se abrirá tu correo para enviar la consulta.';
      window.location.href = `mailto:ventas@tecnotek.com?subject=${encodeURIComponent('Consulta TECNOTEK - ' + interest)}&body=${encodeURIComponent('Hola TECNOTEK,\n\nMi nombre es ' + name + '.\nNecesito información sobre: ' + interest + '\n\nGracias. ')}`;
    });
  }
});
