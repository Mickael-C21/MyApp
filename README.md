# TP-Web – Calculatrice React

Application web simple réalisée avec React et Vite.  
Cette mini-calculatrice permet d’effectuer des opérations mathématiques via un formulaire en méthode GET.

---

## Fonctionnalités

- Sélection d’une opération :
  - Addition
  - Soustraction
  - Multiplication
  - Division
- Saisie de deux nombres
- Envoi du formulaire en **GET**
- Affichage du résultat sous le formulaire
- Les données sont visibles dans l’URL

Exemple :
```
?option=multiplication&number1=12&number2=5
```

---

## Technologies utilisées

- React
- Vite
- JavaScript (ES6)
- CSS
- Prettier
- pnpm

---

## Installation et lancement

1. Installer les dépendances :

```bash
pnpm install
```

2. Lancer le serveur de développement :

```bash
pnpm dev
```

3. Ouvrir dans le navigateur :

```
http://localhost:5173
```

---

## Formatage du code (Prettier)

Installer Prettier :

```bash
pnpm add -D prettier
```

Formater tout le projet :

```bash
pnpm exec prettier --write .
```

Configuration dans le fichier :
```
.prettierrc.json
```

---

## Structure du projet

```
TP-Web/
│
├── src/
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
│
├── public/
├── package.json
├── .prettierrc.json
└── README.md
```

---

## Objectif du TP

- Utiliser React avec Vite
- Créer un formulaire en méthode GET
- Récupérer les paramètres depuis l’URL
- Afficher dynamiquement un résultat
- Appliquer un style CSS
- Utiliser Prettier pour formater le code

---

## Auteur
Mickaël TSOUMBOU
Projet réalisé dans le cadre du TP-Web.
