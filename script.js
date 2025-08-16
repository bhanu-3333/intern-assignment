const hudElements = document.querySelectorAll('.hud, .hud-side');

window.addEventListener('scroll', () => {
  const triggerPoint = window.innerHeight; // after 1 screen height

  if (window.scrollY > triggerPoint) {
    hudElements.forEach(el => el.style.display = 'none');
  } else {
    hudElements.forEach(el => el.style.display = 'block');
  }
});
