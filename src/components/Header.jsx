import React from 'react';

// ==============================================================================
// 🎯 FONCTION TYPE JAVASCRIPT RETOURNANT DU JSX
// Un composant React n'est rien d'autre qu'une fonction JavaScript ordinaire :
// 1. Elle reçoit des arguments (nommés "props").
// 2. Elle peut exécuter de la logique JavaScript (calculs, variables).
// 3. Elle RETOURNE obligatoirement une description visuelle écrite en JSX.
// ==============================================================================
export default function Header({ titre, sousTitre }) {
  // Logique JavaScript pure
  const dateDuJour = new Date().toLocaleDateString('fr-FR', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  // Ce que la fonction RETOURNE au moteur de rendu React :
  return (
    <header className="header">
      <h1>{titre}</h1>
      <p>{sousTitre}</p>
      <small style={{ color: '#94a3b8', display: 'block', marginTop: '4px' }}>
        📅 {dateDuJour}
      </small>
    </header>
  );
}
