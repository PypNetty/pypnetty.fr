# Project Datasheet System - Guide d'utilisation

## 🎯 Concept

Le système **ProjectDatasheet** transforme la présentation de projets d'un format "portfolio classique" vers un format **"Fiche Technique Industrielle"** (Industrial Spec Sheet).

Au lieu de simples cartes, chaque projet est présenté comme une **documentation technique complète** avec :
- Spécifications détaillées
- Métriques en temps réel
- Historique système (logs)
- Challenges techniques résolus

## 📦 Architecture

```
src/components/ProjectDatasheet.astro  → Composant réutilisable
src/pages/projects.astro              → Page catalogue des projets
```

## 🚀 Ajouter un nouveau projet

### Structure de données

Dans `src/pages/projects.astro`, ajoutez un objet projet dans le tableau :

```typescript
{
  projectId: "KYTENA-SEC-01",        // Identifiant unique
  title: "Kytena Security Platform", // Nom du projet
  description: "...",                 // Description détaillée
  status: "Production",               // Production | Development | Maintenance | Archived
  
  specs: [                            // Stack technique
    { label: "Runtime", value: "Go 1.21" },
    { label: "Database", value: "PostgreSQL" },
    // ... autres specs
  ],
  
  metrics: [                          // Métriques système
    { label: "API Response", value: "< 50ms" },
    { label: "Uptime", value: "99.9%" },
    // ... autres metrics
  ],
  
  systemLogs: [                       // Activité récente (optionnel)
    { date: "2026-01-05", message: "Feature X deployed" },
    // ... autres logs
  ],
  
  challenges: [                       // Problèmes résolus (optionnel)
    {
      problem: "Description du problème",
      solution: "Solution implémentée"
    },
    // ... autres challenges
  ],
  
  link: "/projects/kytena"           // Lien vers détails
}
```

## 🎨 Statuts disponibles

| Status | Couleur | Label | Animation |
|--------|---------|-------|-----------|
| `Production` | 🟢 Emerald | "System Operational" | Pulse |
| `Development` | 🔵 Blue | "In Development" | Pulse |
| `Maintenance` | 🟡 Yellow | "Under Maintenance" | None |
| `Archived` | ⚪ Gray | "Archived" | None |

## 📊 Exemple complet : Project SaaS

```javascript
{
  projectId: "SAAS-MONITOR-01",
  title: "CloudWatch Pro",
  description: "Plateforme de monitoring multi-cloud avec alerting intelligent basé sur IA. Ingestion de métriques en temps réel avec rétention configurable et dashboards personnalisables.",
  status: "Development",
  
  specs: [
    { label: "Backend", value: "Go + gRPC" },
    { label: "Frontend", value: "React + TypeScript" },
    { label: "Database", value: "PostgreSQL + TimescaleDB" },
    { label: "Message Queue", value: "NATS JetStream" },
    { label: "Deployment", value: "Kubernetes + Helm" },
    { label: "Observability", value: "Grafana + Loki" },
  ],
  
  metrics: [
    { label: "Ingestion Rate", value: "100k/s" },
    { label: "API Latency", value: "< 50ms p99" },
    { label: "Users", value: "1,200+" },
    { label: "Availability", value: "99.95%" },
  ],
  
  systemLogs: [
    { date: "2026-01-10", message: "HA Redis cluster deployed" },
    { date: "2026-01-05", message: "Multi-tenancy implementation" },
    { date: "2025-12-28", message: "TimescaleDB migration completed" },
  ],
  
  challenges: [
    {
      problem: "Ingestion de métriques causant des spikes CPU sur la DB",
      solution: "Migration vers TimescaleDB avec compression automatique. CPU usage réduit de 60%."
    },
    {
      problem: "Dashboard rendering lent avec > 10k séries temporelles",
      solution: "Implémentation d'un système de downsampling adaptatif basé sur la plage de temps."
    },
  ],
  
  link: "/projects/cloudwatch-pro"
}
```

## 🎯 Sections optionnelles

### Sans System Logs

Si vous ne voulez pas afficher les logs :

```javascript
systemLogs: []  // Ou omettez la propriété
```

### Sans Challenges

Si vous ne voulez pas afficher les challenges :

```javascript
challenges: []  // Ou omettez la propriété
```

### Configuration minimale

```javascript
{
  projectId: "MIN-PROJ-01",
  title: "Minimum Project",
  description: "Description simple",
  status: "Production",
  specs: [
    { label: "Tech", value: "Go" }
  ],
  metrics: [
    { label: "Status", value: "Active" }
  ],
  link: "#"
}
```

## 🎨 Personnalisation du design

### Modifier les couleurs de statut

Dans `ProjectDatasheet.astro`, modifiez l'objet `statusConfig` :

```typescript
const statusConfig = {
  Production: { color: "emerald", label: "Système Opérationnel", pulse: true },
  // Ajoutez vos propres statuts
  Beta: { color: "purple", label: "Version Bêta", pulse: true },
};
```

### Ajouter des specs personnalisées

Vous pouvez ajouter autant de specs que nécessaire. Elles s'afficheront automatiquement en grille responsive.

### Personnaliser les metrics

Les metrics s'affichent dans la sidebar droite. Format recommandé :
- **Label court** (< 15 caractères)
- **Value expressive** avec unité ou emoji

Exemples :
```javascript
{ label: "⚡ Response", value: "12ms avg" }
{ label: "🔒 Security", value: "A+ Rating" }
{ label: "📦 Deploys", value: "247 this month" }
```

## 📐 Layout & Responsive

Le composant utilise une grille 3 colonnes :

```
Desktop (lg+):
┌─────────────────────────────────────┬───────────┐
│   Description + Specs + Challenges  │  Metrics  │
│          (2/3 width)                │  + Logs   │
│                                     │  (1/3)    │
└─────────────────────────────────────┴───────────┘

Mobile:
┌──────────────────┐
│   Description    │
│   Specs          │
│   Challenges     │
├──────────────────┤
│   Metrics        │
│   Logs           │
└──────────────────┘
```

## 🔗 Liens vers détails

Configurez le lien du CTA selon votre structure :

```javascript
// Lien vers page dédiée
link: "/projects/metal-farm"

// Lien vers repo GitHub
link: "https://github.com/pypnetty/metal-farm"

// Lien vers documentation
link: "https://docs.pypnetty.com/metal-farm"

// Pas de lien (affichera # par défaut)
link: "#"
```

## 💡 Bonnes pratiques

### Description

- **Longueur** : 2-4 phrases
- **Focus** : Objectif technique, pas marketing
- **Ton** : Factuel, précis, engineering-first

✅ Bon : "Élimination de la couche hyperviseur pour latence déterministe"
❌ Éviter : "La meilleure solution du marché"

### Specs

- **6-9 specs** recommandés
- Labels courts et clairs
- Valeurs précises (noms de technos exacts)

### Metrics

- **4-6 metrics** recommandés
- Valeurs réelles si possible (pas de "TBD")
- Unités explicites (ms, %, k/s)

### Challenges

- **2-4 challenges** recommandés
- Format : Problème concret → Solution technique
- Inclure des métriques si possible (ex: "réduit de 40%")

### System Logs

- **3-5 logs** maximum
- Format date : YYYY-MM-DD
- Messages courts et factuels
- Du plus récent au plus ancien

## 🎯 Exemple de page Projects complète

Voir le fichier `src/pages/projects.astro` pour un exemple complet avec :
- Header de page professionnel
- Barre de titre avec indicateur
- Multiple datasheets
- Call-to-action vers blog et RSS

## 🚀 Évolutions futures

Idées pour enrichir le système :

1. **Badges de certification**
   - ISO compliance
   - Security ratings
   - Performance benchmarks

2. **Graphiques inline**
   - Mini charts dans les metrics
   - Sparklines de performance

3. **Export PDF**
   - Générer un PDF de la datasheet
   - Format imprimable pour présentation

4. **Statut en temps réel**
   - Fetch depuis API externe
   - Status badges dynamiques

5. **Comparaison de projets**
   - Table comparative
   - Benchmarks côte à côte
