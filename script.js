const toggle = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.navigation');
if (toggle && navigation) {
  toggle.addEventListener('click', () => {
    const isOpen = navigation.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(isOpen));
    toggle.setAttribute('aria-label', isOpen ? 'Fechar menu' : 'Abrir menu');
    toggle.textContent = isOpen ? '✕' : '☰';
  });
  navigation.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    navigation.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Abrir menu');
    toggle.textContent = '☰';
  }));
}
const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();
