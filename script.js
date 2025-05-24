// Navegación suave entre secciones
document.querySelectorAll('.nav-btn').forEach(btn => {
  btn.addEventListener('click', function(e) {
    e.preventDefault();
    const id = this.getAttribute('href').substring(1);
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Abrir página de login simulada en otra pestaña
function openLogin() {
  window.open('login.html', '_blank');
}

// Si quieres, puedes crear login.html con el mismo estilo visual.
