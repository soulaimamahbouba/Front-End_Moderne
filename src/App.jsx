import React, { useState } from 'react';
import Header from './components/Header';
import Counter from './components/Counter';
import AutoTimer from './components/AutoTimer';

export default function App() {
  const [showTimer, setShowTimer] = useState(true);

  return (
    <div className="app-container">
      {/* 1. Composant type recevant des props */}
      <Header
        titre="Mon Super Compteur React"
        sousTitre="Séance 5 : Maîtrise fondamentale des Hooks useState et useEffect"
      />

      {/* 2. Composant Compteur avec état et persistance */}
      <Counter />

      {/* 3. Bouton pour monter / démonter le timer (tester le cleanup de useEffect) */}
      <div style={{ textAlign: 'center', marginTop: '16px' }}>
        <button
          className="btn btn-reset"
          style={{ fontSize: '0.85rem', padding: '6px 12px' }}
          onClick={() => setShowTimer(!showTimer)}
        >
          {showTimer ? 'Masquer le Chronomètre' : 'Afficher le Chronomètre'}
        </button>
      </div>

      {showTimer && <AutoTimer />}
    </div>
  );
}
