# Mon Compteur React – Séance 5 : Les Hooks Fondamentaux (useState & useEffect)

Application pratique accompagnant le support de cours de la **Séance 5 (Cours de Jour)**.

---

## 🎯 Objectifs Pédagogiques

1. **Comprendre ce qu'est un composant :** Une fonction JavaScript ordinaire qui prend des props et retourne une description visuelle en JSX.
2. **Maîtriser `useState` :**
   - Pourquoi une variable `let` ne met pas à jour l'écran.
   - Gestion de valeurs scalaires (nombres) et de tableaux (historique des clics avec l'opérateur spread `[...]`).
   - Mises à jour fonctionnelles `setCount(prev => prev + 1)`.
3. **Maîtriser `useEffect` :**
   - Synchronisation du titre de la page (`document.title`) avec `[count]`.
   - Persistance automatique dans le `localStorage`.
   - Gestion d'un chronomètre avec `setInterval` et nettoyage indispensable avec `clearInterval`.

---

## 🚀 Démarrage Rapide

```bash
# 1. Installation
npm install

# 2. Lancement en développement (Vite)
npm run dev
```

Ouvrez ensuite [http://localhost:5173](http://localhost:5173) dans votre navigateur.
