# opencode-website-repo

Fitness Club – One‑Page Website

## Project overview
A single‑page site for a fitness club built with only three files:
- `index.html` – semantic HTML structure
- `style.css` – responsive, dark‑mode‑friendly styling
- `script.js` – tiny theme‑switcher with no dependencies

## Local development
Serve the site on `localhost` so the page can be viewed in a browser. The easiest method uses Python's built‑in HTTP server (no extra installation required).

```powershell
# From the project folder (C:\Users\obhin\Desktop\opencode-website-repo)
python -m http.server 8000
```

Then open <http://localhost:8000> in your browser.

### Alternative (if you have Node.js)
```powershell
npx http-server -p 8000
```

## Interaction
The page includes a **theme toggle** button (🌙 Dark mode / ☀️ Light mode) that:
1. On load checks the OS colour‑scheme preference and sets the initial theme.
2. Switches between light and dark modes when clicked or activated with **Enter/Space** (keyboard accessible).
3. Updates its label and `aria-pressed` attribute to reflect the current mode.
4. The CSS uses a `[data-theme]` attribute on `<html>` to swap colours, backgrounds, and button styles.

## Files
| File | Purpose |
|------|---------|
| `index.html` | Page structure, heading, intro, two sections (Membership Plans, Class Schedule), theme toggle |
| `style.css` | Mobile‑first responsive styling, dark base, light overrides via `[data-theme]`, focus outlines |
| `script.js` | Vanilla JS that sets initial theme from OS preference and handles the toggle |
| `AGENTS.md` | Project constraints and interaction details |
| `.gitignore` | Ignores `.env`, `node_modules/`, `.DS_Store` |

## Constraints
- No external dependencies or CDN.
- Keep all work inside this repository.
- Serve only on localhost; do not commit, push, install packages, or deploy as part of this task.