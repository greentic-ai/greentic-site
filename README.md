
# Greentic.ai — GitHub Pages Site

Static, no-build website for **Greentic Executes Boring**.

## 🚀 Deploy on GitHub Pages (No‑Jekyll, recommended)

1. Create a repo and push these files to the `main` branch.
2. In **Settings → Pages**, set **Source** to “Deploy from a branch”, Branch: `main`, Folder: `/ (root)`.
3. Optional: Edit `CNAME` to your domain (`greentic.ai`) or remove it.
4. Enable HTTPS.

## 📦 Contents

- `index.html`, `pricing.html`, `docs.html`, `security.html`, `careers.html`, `contact.html`, `use-cases.html`, `integrations.html`, `404.html`
- `/assets/img` (logo, SVG), `/css/styles.css`, `/js/main.js` (+ analytics/forms stubs)
- `robots.txt`, `sitemap.xml`, `.nojekyll`, `CNAME`, `LICENSE`, `README.md`

## 🧰 Local development

Open `index.html` directly or run a static server:
```bash
python3 -m http.server 8080
```

## ✉️ Forms

Forms use Formspree by default (`contact.html`). Replace the example endpoint or swap to `mailto:`.

## 🔎 Analytics

`/js/analytics.js` is opt‑in. To enable, set `window.GREENTIC_ANALYTICS = true` in the console or a script and connect your endpoint.

## 🧠 SEO

Each page includes meta tags, OpenGraph, and JSON‑LD (`Organization`, `Product`, `FAQPage`, `BreadcrumbList`). `robots.txt` and `sitemap.xml` included.

## 🛡️ Security

This site is static. Product security posture is outlined on `/security.html`.

---

© Greentic.ai
