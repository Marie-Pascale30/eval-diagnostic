# Contexte du projet

Ateliers d'intégration HTML/CSS : chaque page reproduit une maquette Figma
(ex. dashboard Nova Commerce). L'objectif pédagogique est de choisir entre
Grid et Flexbox pour chaque bloc et de savoir justifier ce choix.

## Stack

- HTML5 sémantique uniquement
- CSS natif (pas de Bootstrap, Tailwind, etc.)
- JavaScript vanilla, seulement quand le CSS ne suffit pas (ex. menu mobile)
- Police : Inter (Google Fonts)

## Structure de fichiers

- `index.htm` : page d'accueil
- `views/<page>.html` : une page par exercice
- `css/<page>.css` : une feuille par page (ne pas mélanger avec `style.css`)
- `js/<page>.js` : un script par page si besoin
- `icons/` : images et logos

## Règles

- Toujours sémantique (`header`, `nav`, `main`, `aside`, `section`, `article`, `table` pour les données tabulaires)
- Un seul `h1` par page
- Jamais de style inline : tout passe par le fichier CSS
- Couleurs, rayons et tailles : utiliser les variables de `design-tokens.md`, ne pas inventer de nouvelles valeurs
- Icônes : sprite SVG en haut du `body` (`<symbol>` + `<use>`), `stroke="currentColor"`
- Breakpoints : tablette `max-width: 1024px`, mobile `max-width: 640px`
- Composants interactifs accessibles au clavier : vrais `<button>`, `aria-label` sur les boutons icône, `aria-expanded` sur les menus, contenu masqué non focusable (`visibility: hidden`)
- Commenter dans le CSS le choix Grid / Flexbox de chaque bloc :
  - Grid pour les mises en page en 2 dimensions ou à colonnes (layout global, grilles de cartes)
  - Flexbox pour les alignements sur un seul axe (header, barres, contenu d'une carte)

## Méthode de travail

1. Analyser la maquette (desktop, tablette, mobile) et lister les différences entre breakpoints avant de coder
2. Proposer un plan (mode Plan) et attendre la validation
3. Intégrer bloc par bloc
4. Vérifier le rendu aux trois tailles (1280px, 820px, 375px) et l'absence de défilement horizontal
