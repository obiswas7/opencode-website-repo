# AGENTS.md – Fitness Club One‑Page Site

## Project constraints
- **Only three files**: `index.html`, `style.css`, `script.js`. No external dependencies, no CDN.
- **Keep all work inside this repository**. No external installs, no accounts, no deployment.
- **Serve only on localhost** for development view‑testing.
- **No build step required** for the final site, but a minimal build script may be added later.
- **Responsive design**: must work at narrow (mobile) and wide (desktop) browser widths, using a mobile‑first CSS approach.
- **Keyboard accessible**: all interactive elements (theme toggle, focusable headings) reachable via Tab, with visible focus outlines, and operable with Enter/Space.
- **Interaction**: a theme‑switcher that toggles between light and dark colour schemes. The button is focusable, has `aria-pressed` and updates its label accordingly. Clicking or pressing Enter/Space switches the theme; the CSS uses a `[data-theme]` attribute to swap colours.
- **Visual style**: dark‑mode‑friendly default (dark background, light text). A light‑mode alternative is available via the toggle.
- **Semantic HTML**: use proper heading hierarchy (`<h1>`–`<h2>`), sectioning elements (`<header>`, `<main>`, `<section>`), and list markup.

## Interaction detail
The theme‑toggle button (`🌙 Dark mode` / `☀️ Light mode`):
1. On page load the script checks `window.matchMedia('(prefers-color-scheme: light)')` and sets `data-theme` on `<html>` accordingly.
2. Clicking the button (or pressing Enter/Space while focused) flips `data-theme` between `"light"` and `"dark"`.
3. The button’s `aria-pressed` attribute and text content are updated to reflect the current mode.
4. CSS rules under `[data-theme="light"]` and `[data-theme="dark"]` adjust background, text, and button colours.

## Files created by the plan
| File | Purpose |
|------|---------|
| `index.html` | Semantic HTML5 page structure with heading, intro, two sections (Membership Plans, Class Schedule), and the theme‑toggle button. |
| `style.css` | Mobile‑first responsive styling, dark‑mode base, light‑mode overrides via `[data-theme]`, focus outlines for keyboard users, max‑width container. |
| `script.js` | Vanilla JavaScript that sets the initial theme from OS preference and handles the toggle click/keypress. |
| `AGENTS.md` | This file – documents the project constraints and interaction details. |
| `README.md` | Project readme with local‑run instructions. |
| `.gitignore` | Ignores `.env`, `node_modules/`, and `.DS_Store`. |

## Local development
Use a local HTTP server so that the page is served from `localhost`. The simplest method is Python’s built‑in server (no extra installation required):

```powershell
# From the project folder
python -m http.server 8000
```

Then open <http://localhost:8000> in a browser.

If you have Node.js installed, you can also use `npx http-server` (run `npm install -g http-server` once) but the Python one‑liner respects the “no packages” rule.

**Do not commit, push, install packages (beyond what is already present), or deploy** anything as part of this task.

Today's date: Wed Oct 28 2026