# Composant SEO - Guide d'utilisation

## 📦 Vue d'ensemble

Le composant `SEO.astro` centralise tous les meta tags nécessaires pour :
- Le référencement (SEO)
- Le partage sur réseaux sociaux (Open Graph)
- Les cartes Twitter
- Le flux RSS

## 🚀 Utilisation de base

### Dans Layout.astro (déjà configuré)

```astro
---
import SEO from "../components/SEO.astro";

const { title, description, image, article } = Astro.props;
const canonicalURL = new URL(Astro.url.pathname, Astro.site);
---

<head>
  <SEO
    title={title}
    description={description}
    image={image}
    canonicalURL={canonicalURL}
    type={article ? "article" : "website"}
  />
  <!-- Autres tags -->
</head>
```

### Pour une page personnalisée

```astro
---
import Layout from "../layouts/Layout.astro";
---

<Layout 
  title="Ma page custom"
  description="Description unique pour cette page"
  image="/custom-og-image.jpg"
>
  <!-- Contenu -->
</Layout>
```

## 🎛️ Props disponibles

| Prop | Type | Défaut | Description |
|------|------|--------|-------------|
| `title` | string | "PypNetty \| Platform Engineer..." | Titre de la page |
| `description` | string | "Construction de produits..." | Description meta |
| `image` | string | "/og-default.png" | Chemin de l'image OG |
| `canonicalURL` | URL | `new URL(...)` | URL canonique |
| `type` | "website" \| "article" | "website" | Type de contenu |

## 🎨 Personnalisation par type de page

### Page d'accueil
```astro
<Layout 
  title="PypNetty | Platform Engineer & Resilience Architect"
  description="Kubernetes Bare Metal, Go, Infrastructure résiliente"
/>
```

### Article de blog
```astro
<Layout 
  title={post.data.title}
  description={post.data.description}
  image={post.data.image || "/og-default.png"}
  article={true}
/>
```

### Page About
```astro
<Layout 
  title="À propos | PypNetty"
  description="Mon parcours vers l'infrastructure cloud-native"
  image="/about-og.jpg"
/>
```

## 🔍 Ce qui est inclus automatiquement

### SEO classique
- `<title>` - Titre de la page
- `<meta name="description">` - Description
- `<link rel="canonical">` - URL canonique
- `<meta name="generator">` - Astro

### Open Graph (Facebook, LinkedIn)
- `og:type` - website ou article
- `og:url` - URL de la page
- `og:title` - Titre
- `og:description` - Description
- `og:image` - Image de prévisualisation

### Twitter Cards
- `twitter:card` - Format summary_large_image
- `twitter:title` - Titre
- `twitter:description` - Description
- `twitter:image` - Image

### RSS
- `<link rel="alternate" type="application/rss+xml">` - Lien RSS

## 🎯 Valeurs par défaut

Si aucune prop n'est passée, le composant utilise :

```typescript
{
  title: "PypNetty | Platform Engineer & Resilience Architect",
  description: "Construction de produits cloud-native en Go et partage de parcours DevOps / Bare Metal. Kubernetes sans compromis sur infrastructure physique.",
  image: "/og-default.png",
  canonicalURL: new URL(Astro.url.pathname, Astro.site),
  type: "website"
}
```

## ✅ Checklist d'intégration

- [x] Composant SEO.astro créé
- [x] Intégré dans Layout.astro
- [x] Intégré dans BlogPost.astro
- [x] RSS feed configuré
- [ ] Image `/public/og-default.png` créée (1200x630px)
- [ ] Favicon `/public/favicon.svg` créé
- [ ] Tests avec LinkedIn Post Inspector
- [ ] Tests avec Twitter Card Validator

## 🧪 Tester vos meta tags

### Outils de validation
- **LinkedIn**: https://www.linkedin.com/post-inspector/
- **Twitter**: https://cards-dev.twitter.com/validator
- **Facebook**: https://developers.facebook.com/tools/debug/
- **Open Graph**: https://www.opengraph.xyz/

### Dans le navigateur
1. Ouvrir DevTools (F12)
2. Aller dans l'onglet "Elements" / "Inspector"
3. Chercher `<head>` et vérifier les `<meta>` tags

### Test rapide
```bash
# Voir tous les meta tags Open Graph
curl -s https://pypnetty.com | grep -i "og:"

# Voir le title
curl -s https://pypnetty.com | grep -i "<title>"
```

## 🔧 Maintenance

### Modifier les valeurs par défaut
Éditez `/src/components/SEO.astro` :

```astro
const {
  title = "NOUVEAU TITRE PAR DÉFAUT",
  description = "NOUVELLE DESCRIPTION",
  // ...
} = Astro.props;
```

### Ajouter de nouveaux meta tags
Dans `SEO.astro`, ajoutez simplement les tags souhaités :

```astro
<!-- Schema.org pour Google -->
<meta itemprop="name" content={title} />
<meta itemprop="description" content={description} />
<meta itemprop="image" content={ogImage} />
```

## 📚 Ressources

- [Open Graph Protocol](https://ogp.me/)
- [Twitter Cards](https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/abouts-cards)
- [Astro SEO Guide](https://docs.astro.build/en/guides/integrations-guide/sitemap/)
