# AFS M01 Frontend

Frontend Next.js du module M01 "Presentation institutionnelle" pour Ask for Success.

## Arborescence

```text
.
|-- app
|   |-- a-propos
|   |   `-- page.js
|   |-- chiffres-cles
|   |   `-- page.js
|   |-- contact
|   |   `-- page.js
|   |-- equipe
|   |   `-- page.js
|   |-- mission-vision-valeurs
|   |   `-- page.js
|   |-- globals.css
|   |-- layout.js
|   `-- page.js
|-- components
|   |-- ActionCard.js
|   |-- ContactForm.js
|   |-- ContactInfo.js
|   |-- CTASection.js
|   |-- Footer.js
|   |-- HeroSection.js
|   |-- Navbar.js
|   |-- PageHero.js
|   |-- SectionTitle.js
|   |-- StatCard.js
|   |-- TeamCard.js
|   `-- ValueCard.js
|-- data
|   |-- actions.js
|   |-- association.js
|   |-- contact.js
|   |-- navigation.js
|   |-- stats.js
|   `-- team.js
|-- lib
|   `-- content.js
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
- `tailwindcss`
- `postcss`
- `autoprefixer`

## Lancement

```bash
npm install
npm run dev
```

Ensuite ouvrir [http://localhost:3000](http://localhost:3000).

## Notes d'architecture

- `data/` contient uniquement les donnees mockees locales
- `lib/content.js` sert de couche de lecture pour faciliter un futur branchement backend
- les pages `app/` restent legeres et consomment des composants reutilisables
- aucun backend, aucune API et aucune logique Flask n'ont ete ajoutes
