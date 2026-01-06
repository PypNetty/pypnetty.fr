# Portfolio PypNetty

Portfolio personnel et blog créé avec Astro, Tailwind CSS et TypeScript.

## 🚀 Stack technique

- **Framework**: Astro 4.x
- **Styling**: Tailwind CSS 4 avec plugin Typography
- **Content**: Content Collections avec MDX
- **TypeScript**: Configuration stricte
- **Fonts**: Inter (sans-serif) + JetBrains Mono (monospace)

## 🎨 Design

- **Theme**: Dark mode (zinc-950)
- **Accent**: Vert (#10b981)
- **Style**: Minimaliste et épuré
- **Typography**: Excellent contraste et lisibilité

## 📦 Structure du projet

```
portfolio/
├── src/
│   ├── content/
│   │   ├── blog/           # Articles de blog en MDX
│   │   └── config.ts       # Configuration Content Collections
│   ├── layouts/
│   │   ├── Layout.astro    # Layout principal
│   │   └── BlogPost.astro  # Layout pour articles
│   ├── pages/
│   │   ├── index.astro     # Page d'accueil
│   │   ├── about.astro     # À propos
│   │   └── blog/
│   │       ├── index.astro      # Liste des articles
│   │       └── [...slug].astro  # Pages d'articles
│   ├── styles/
│   │   └── global.css      # Styles globaux + config Tailwind
│   └── utils/
│       └── formatDate.ts   # Utilitaires
├── public/                 # Assets statiques
└── astro.config.mjs       # Configuration Astro
```

## 🛠️ Commandes

Toutes les commandes doivent être exécutées depuis le répertoire `portfolio/` :

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `pnpm install`             | Installs dependencies                            |
| `pnpm dev`             | Starts local dev server at `localhost:4321`      |
| `pnpm build`           | Build your production site to `./dist/`          |
| `pnpm preview`         | Preview your build locally, before deploying     |
| `pnpm astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `pnpm astro -- --help` | Get help using the Astro CLI                     |

## 📝 Ajouter un article

1. Créer un fichier `.mdx` dans `src/content/blog/`
2. Ajouter le frontmatter :

```yaml
---
title: "Titre de l'article"
description: "Description courte"
pubDate: 2025-01-05
tags: ["tag1", "tag2"]
readingTime: "5 min"
---
```

3. Écrire le contenu en Markdown/MDX
4. L'article apparaîtra automatiquement sur le blog

## 🌐 Déploiement

Le site est statique et peut être déployé sur :
- Netlify
- Vercel
- GitHub Pages
- CloudFlare Pages
- Tout hébergeur de sites statiques

## 📄 License

Contenu : © 2025 PypNetty. Tous droits réservés.
Code : MIT License
