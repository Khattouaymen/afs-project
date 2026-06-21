# AFS M01 Frontend

Frontend Next.js du module M01 "Presentation institutionnelle" pour Ask for Success.

## Arborescence
```text
.
|-- app
|   |-- globals.css
|   |-- layout.js
|   `-- page.js
|-- components
|   |-- ActionCard.js
|   |-- ContactForm.js
|   |-- ContactInfo.js
|   |-- CTASection.js
|   |-- Footer.js
|   |-- GalleryCard.js
|   |-- HeroSection.js
|   |-- Icons.js
|   |-- ImpactBoard.js
|   |-- ImpactPillarCard.js
|   |-- Navbar.js
|   |-- PageHero.js
|   |-- PartnerLogoCloud.js
|   |-- PartnerMarquee.js
|   |-- Reveal.js
|   |-- SectionTitle.js
|   |-- StatCard.js
|   |-- SummaryIconCard.js
|   |-- TeamCard.js
|   |-- TeamPreviewCard.js
|   |-- TopBar.js
|   `-- ValueCard.js
|-- data
|   |-- actions.js
|   |-- association.js
|   |-- contact.js
|   |-- gallery.js
|   |-- navigation.js
|   |-- partners.js
|   |-- stats.js
|   |-- team.js
|   `-- testimonials.js
|-- lib
|   `-- content.js
|-- public
|   `-- images
|       |-- partners
|       `-- pdf
|-- jsconfig.json
|-- next.config.js
|-- package.json
|-- postcss.config.js
|-- README.md
`-- tailwind.config.js
```

## Dependances

- `next`
- `react`
- `react-dom`
- `framer-motion`
- `clsx`
- `tailwind-merge`
- `tailwindcss`
- `postcss`
- `autoprefixer`

## Lancement

```bash
npm install
npm run dev
```

Ensuite ouvrir [http://localhost:3000](http://localhost:3000).

## Version Flask (frontend conserve)

Une version Flask a ete ajoutee pour servir le meme contenu visuel avec les memes assets (`public/images`).

### Fichiers ajoutes

- `app_flask.py`
- `content.py`
- `templates/base.html`
- `templates/index.html`
- `public/flask/css/site.css`
- `public/flask/js/site.js`
- `requirements.txt`

### Lancement Flask

```bash
python -m venv .venv
.venv\Scripts\activate
pip install -r requirements.txt
python app_flask.py
```

Ensuite ouvrir [http://localhost:5000](http://localhost:5000).

## Notes d'architecture

- `data/` contient uniquement les donnees mockees locales
- `lib/content.js` sert de couche de lecture pour faciliter un futur branchement backend
- les pages `app/` restent legeres et consomment des composants reutilisables
- le frontend Next.js historique reste disponible
- une version Flask server-side est disponible via `app_flask.py`
