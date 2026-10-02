# Design tokens - Nova Commerce

> Valeurs relevées à l'œil sur les captures de la maquette. À vérifier et
> remplacer par les valeurs exactes du Figma (Dev Mode, plugin Tokens Studio
> ou clic droit → Copier en tant que → CSS).
> Les noms correspondent aux variables de `css/nova_commerce.css`.

## Couleurs

| Rôle | Variable | Valeur |
|---|---|---|
| Primaire (boutons, lien actif, graphique) | `--primary` | `#2563eb` |
| Primaire léger (fond des icônes) | `--primary-soft` | `#e8efff` |
| Fond de page | `--bg` | `#f5f7fb` |
| Surface (cartes, header) | `--surface` | `#ffffff` |
| Bordures | `--border` | `#e5e9f0` |
| Texte principal | `--text` | `#0f172a` |
| Texte secondaire | `--muted` | `#64748b` |
| Sidebar - fond | `--sidebar-bg` | `#0f1c36` |
| Sidebar - carte d'aide | `--sidebar-card` | `#1a2a4a` |
| Sidebar - texte | `--sidebar-text` | `#aab4c8` |
| Succès (hausse, « Livrée ») | `--green` / `--green-soft` | `#16a34a` / `#ecfdf3` |
| Attention (« En préparation ») | `--orange` / `--orange-soft` | `#c2410c` / `#fff4e5` |
| Erreur (baisse, « Annulée », notif) | `--red` / `--red-soft` | `#dc2626` / `#fef2f2` |

## Espacements

- `4px`, `8px`, `12px`, `16px`, `20px`, `24px`, `28px`
- Padding des cartes : `20px` (`16px` sur mobile)
- Écart entre les cartes / sections : `16px` / `20px`
- Padding du contenu principal : `28px` (desktop), `24px 20px` (tablette), `20px 16px` (mobile)

## Rayons

- Cartes : `--radius: 12px`
- Boutons, champs, liens de nav : `8px`
- Badges : `999px` (pilule)
- Avatars : `50%`

## Typographie

- Police : `Inter`, poids 400 / 500 / 600 / 700
- Base : `14px`
- Titre de page (`h1`) : `26px` / 500 (`22px` sur mobile)
- Titre de carte : `16px` / 600
- Valeur des indicateurs : `22px`
- Libellés, sous-titres : `12-13px`, couleur `--muted`
- En-têtes de tableau, badges, axes : `10-11px`

## Dimensions

- Sidebar : `248px` (desktop), `72px` (tablette), menu coulissant `280px` (mobile)
- Boutons icône : `36px`
- Breakpoints : `1024px` (tablette), `640px` (mobile)
