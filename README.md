# AFS M01 - Flask

Projet institutionnel Ask for Success en version Flask uniquement.

## Arborescence
```text
.
|-- app_flask.py
|-- content.py
|-- templates
|   |-- base.html
|   `-- index.html
|-- public
|   |-- images
|   |   |-- partners
|   |   `-- pdf
|   `-- flask
|       |-- css
|       |   `-- site.css
|       `-- js
|           `-- site.js
|-- requirements.txt
`-- README.md
```

## Dependances

- `Flask==3.1.1`

## Lancement (Windows)

```bash
python -m venv .venv
.venv\Scripts\activate
pip install -r requirements.txt
python app_flask.py
```

Puis ouvrir [http://127.0.0.1:5000](http://127.0.0.1:5000).

## Notes

- Les assets statiques sont servis depuis `public/`.
- Le contenu de la page est centralise dans `content.py`.
- Le rendu HTML est dans `templates/`.
