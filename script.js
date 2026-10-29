// Check OS preferences on page load and set initial theme
const prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;

const html = document.documentElement;
if (prefersLight) {
  html.setAttribute('data-theme', 'light');
} else {
  // default to dark – no attribute needed if already dark
}

// Theme toggle (only if the button exists on the page)
const toggle = document.getElementById('theme-toggle');
if (toggle) {
  // Set button label and aria‑pressed based on current theme
  const isLight = html.getAttribute('data-theme') === 'light';
  toggle.textContent = isLight ? '☀️ Light mode' : '🌙 Dark mode';
  toggle.setAttribute('aria-pressed', !isLight);

  // Toggle button
  toggle.addEventListener('click', () => {
    const isLight = html.getAttribute('data-theme') === 'light';
    html.setAttribute('data-theme', isLight ? 'dark' : 'light');
    toggle.textContent = isLight ? '🌙 Dark mode' : '☀️ Light mode';
    toggle.setAttribute('aria-pressed', !isLight);
  });
}