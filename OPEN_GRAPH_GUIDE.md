# Guide Open Graph, SEO & RSS

## 🎯 Open Graph Tags Intégrés

Les Open Graph tags sont maintenant automatiquement ajoutés via le composant `SEO.astro` centralisé. Ce composant gère tous les meta tags pour un affichage optimal lors du partage sur les réseaux sociaux (LinkedIn, Twitter, Facebook, etc.).

### Architecture SEO

```
src/components/SEO.astro          → Composant centralisé
src/layouts/Layout.astro          → Importe et utilise SEO.astro
src/layouts/BlogPost.astro        → Passe article={true} à Layout
```

### Configuration automatique

Toutes les pages incluent maintenant :
- **og:title** - Le titre de la page
- **og:description** - La description
- **og:image** - L'image de preview (par défaut `/og-default.png`)
- **og:url** - L'URL canonique
- **twitter:card** - Format carte Twitter avec image large
- **RSS Feed** - Lien automatique dans le `<head>`

### Pour les articles de blog

Le layout `BlogPost.astro` passe automatiquement `article={true}` pour marquer le contenu comme article.

## 📡 RSS Feed

Le flux RSS est disponible à `/rss.xml` et est automatiquement lié dans :
- Le `<head>` de toutes les pages (via SEO.astro)
- Le footer terminal
- Un badge visible sur la page d'accueil

### Contenu du flux RSS

```javascript
Titre: "PypNetty | Platform Engineer & Resilience Architect"
Description: Flux technique sur Kubernetes Bare Metal, Go et infrastructure résiliente
Langue: fr-fr
Articles: Tous les posts non-draft avec titre, date, description et lien
```

## 🖼️ Créer des images Open Graph personnalisées

### Fichiers requis

1. **`/public/og-default.png`** - Image par défaut pour toutes les pages (1200x630px)
2. **`/public/favicon.svg`** - Favicon du site

### Option 1 : Image par défaut globale

Placez votre image par défaut dans `/public/og-default.png` (recommandé : 1200x630px)

Cette image sera utilisée pour :
- La page d'accueil
- Les pages statiques (About, Contact, Projects)
- Tout article qui n'a pas d'image spécifique

### Option 2 : Image par article

1. Ajoutez le champ `image` dans le frontmatter de votre article :

```mdx
---
title: "Mon article"
description: "Description"
pubDate: 2026-01-07
image: "/blog/mon-article-og.jpg"
---
```

2. Placez l'image dans `/public/blog/mon-article-og.jpg`

### Dimensions recommandées

- **Open Graph** : 1200x630px (ratio 1.91:1)
- **Twitter Card** : 1200x675px ou 1200x630px
- **Format** : JPG ou PNG (< 1MB)

## 🎨 Template d'image OG pour PypNetty

Créez vos images avec ces éléments :

```
┌─────────────────────────────────────────────┐
│                                             │
│   [Logo/Emoji]    PYPNETTY                  │
│                                             │
│   Titre de l'article                        │
│   (Maximum 2 lignes)                        │
│                                             │
│   Brief description ou citation clé         │
│                                             │
│   #tag1 #tag2 #tag3                         │
│                                             │
│                       Resilience Architect  │
└─────────────────────────────────────────────┘
```

**Couleurs de la marque :**
- Background : `#1E1E2E` (slate-950)
- Accent : `#10B981` (emerald-500)
- Text : `#F4F4F5` (zinc-100)

## 🔍 Tester vos Open Graph

### LinkedIn
https://www.linkedin.com/post-inspector/

### Twitter/X
https://cards-dev.twitter.com/validator

### Facebook
https://developers.facebook.com/tools/debug/

### Général
https://www.opengraph.xyz/

## ✅ Checklist avant publication

- [ ] Image OG créée (1200x630px)
- [ ] Image placée dans `/public/`
- [ ] Frontmatter mis à jour avec le champ `image`
- [ ] Test avec LinkedIn Post Inspector
- [ ] Test avec Twitter Card Validator
- [ ] Vérification de l'affichage sur mobile

## 🚀 Automatisation future

Pour générer automatiquement des images OG :
- **@vercel/og** : Génération dynamique d'images
- **Puppeteer** : Screenshots automatiques
- **Figma API** : Templates automatisés

## 📝 Exemple complet d'article

```mdx
---
title: "Bare Metal K8s : Pourquoi j'ai quitté le cloud"
description: "Retour d'expérience sur 6 mois d'infrastructure Kubernetes sur hardware physique."
pubDate: 2026-01-15
tags: ["kubernetes", "bare-metal", "infrastructure"]
readingTime: "8 min"
emoji: "🏭"
image: "/blog/bare-metal-k8s-og.jpg"
---

Votre contenu ici...
```

---

**🎯 Résultat attendu :**

Quand quelqu'un partage votre article sur LinkedIn ou Twitter, il apparaîtra avec :
- Une carte visuelle professionnelle
- Le titre et la description
- Votre image custom
- Un CTA implicite pour cliquer

**Impact SEO :** Les Open Graph tags améliorent aussi le référencement en fournissant des métadonnées structurées aux moteurs de recherche.
