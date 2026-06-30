// PrismaSalud IPS — main.js
// Aquí puedes agregar interactividad adicional

document.addEventListener('DOMContentLoaded', function () {
  // Smooth scroll para anclas internas
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
});

//para el NAv se vuelva algo invisible al hacer Scroll
window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navbar');

    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});