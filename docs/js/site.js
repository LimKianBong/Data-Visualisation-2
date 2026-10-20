(function () {
  'use strict';

  const progress = document.getElementById('reading-progress');
  const backToTop = document.getElementById('floating-top');
  const navToggle = document.getElementById('nav-toggle');
  const nav = document.getElementById('site-nav');
  const navLinks = Array.from(document.querySelectorAll('.site-nav a'));
  const chapters = ['australia', 'collections', 'international', 'takeaways']
    .map(id => document.getElementById(id)).filter(Boolean);

  let framePending = false;
  function updateScrollState() {
    const maxScroll = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
    const progressPercent = Math.max(0, Math.min(100, window.scrollY / maxScroll * 100));
    progress.style.width = progressPercent + '%';
    backToTop.classList.toggle('is-visible', window.scrollY > 700);
    framePending = false;
  }

  window.addEventListener('scroll', () => {
    if (!framePending) {
      framePending = true;
      requestAnimationFrame(updateScrollState);
    }
  }, {passive: true});
  window.addEventListener('resize', updateScrollState);
  window.addEventListener('load', updateScrollState);
  updateScrollState();

  navToggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const activeId = entry.target.id;
        navLinks.forEach(link => {
          const active = link.getAttribute('href') === '#' + activeId;
          link.classList.toggle('active', active);
          if (active) link.setAttribute('aria-current', 'location');
          else link.removeAttribute('aria-current');
        });
      });
    }, {rootMargin: '-22% 0px -60% 0px', threshold: 0});
    chapters.forEach(chapter => observer.observe(chapter));
  }
})();
