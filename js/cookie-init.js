try {
  if (localStorage.getItem('cookieConsent') === '1') {
    document.documentElement.classList.add('cookie-hidden');
  }
} catch (e) {}