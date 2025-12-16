// Optional: Smooth scroll offset for fixed header
const headerHeight = document.querySelector('header').offsetHeight;
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    window.scrollTo({
      top: target.offsetTop - headerHeight,
      behavior: 'smooth'
    });
  });
});
