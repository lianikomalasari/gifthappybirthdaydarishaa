const slides = [...document.querySelectorAll('.slide')];
let currentSlide = 0;
function showSlide(index) {
  currentSlide = (index + slides.length) % slides.length;
  slides.forEach((slide, i) => slide.classList.toggle('active', i === currentSlide));
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
document.querySelectorAll('.next-btn, .mini-next').forEach(button => button.addEventListener('click', () => showSlide(currentSlide + 1)));
document.querySelectorAll('.back-btn, .mini-prev').forEach(button => button.addEventListener('click', () => showSlide(currentSlide - 1)));
document.querySelector('.finish-btn').addEventListener('click', () => alert('Semoga hari kamu penuh kebahagiaan! ♡'));
