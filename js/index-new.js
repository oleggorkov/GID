document.addEventListener('DOMContentLoaded', function () {
    var cookie = document.getElementById('cookie');
    var btn = document.getElementById('cookie-btn');

    if (!cookie || !btn) return;

    try {
        if (localStorage.getItem('cookieConsent') === '1') {
            cookie.style.display = 'none';
            return;
        }
    } catch (e) {}

    btn.addEventListener('click', function (e) {
        e.preventDefault();

        try {
            localStorage.setItem('cookieConsent', '1');
        } catch (e) {}

        cookie.classList.add('cookie--closing');
        setTimeout(function () {
            cookie.style.display = 'none';
        }, 300);
    });
});

document.addEventListener('DOMContentLoaded', () => {
  const tariffsBlock = document.querySelector('#tariffs');
  const modalEl      = document.querySelector('#modal-game');

  if (!tariffsBlock || !modalEl || typeof bootstrap === 'undefined') return;

  const modal = new bootstrap.Modal(modalEl, {
    backdrop: true,
    keyboard: true
  });

  let isOpen       = false;
  let lastScrollY  = window.scrollY;
  let scrollingDown = true;

  window.addEventListener('scroll', () => {
    const y = window.scrollY;
    scrollingDown = y > lastScrollY;
    lastScrollY = y;
  }, { passive: true });

  modalEl.addEventListener('hidden.bs.modal', () => {
    isOpen = false;
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !isOpen && scrollingDown) {
        isOpen = true;
        modal.show();
      }
    });
  }, {
    threshold: 0.5
  });

  observer.observe(tariffsBlock);
});
