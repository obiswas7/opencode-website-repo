/* ==========================================================
   FitClub – theme switcher (dark ⇆ light)
   ========================================================== */

(() => {
  const toggle = document.getElementById('theme-toggle');
  const html = document.documentElement;

  // Determine initial theme from the OS preference
  const prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
  const initialTheme = prefersLight ? 'light' : 'dark';

  // Set the data attribute and update button labeling
  html.setAttribute('data-theme', initialTheme);
  toggle.setAttribute('aria-pressed', !prefersLight); // true = dark mode active
  toggle.textContent = prefersLight ? '🌙 Dark mode' : '☀️ Light mode';

  // Toggle handler
  const toggleTheme = () => {
    const current = html.getAttribute('data-theme');
    const newTheme = current === 'dark' ? 'light' : 'dark';
    html.setAttribute('data-theme', newTheme);
    toggle.setAttribute('aria-pressed', newTheme === 'dark');
    toggle.textContent = newTheme === 'dark' ? '🌙 Dark mode' : '☀️ Light mode';
  };

  // Click event
  toggle.addEventListener('click', toggleTheme);

  // Also works with Enter/Space key (native for <button>)
})();