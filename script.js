// Intersection observer to trigger animations when elements come into view
document.addEventListener('DOMContentLoaded', () => {
  const observerOptions = {
    threshold: 0.2
  };
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
        obs.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe all elements with the fade-up class
  document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));
});