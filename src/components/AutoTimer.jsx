import React, { useState, useEffect } from 'react';

// ==============================================================================
// ⏱️ COMPOSANT AUTOTIMER : MAÎTRISE DU CYCLE DE VIE ET DU NETTOYAGE (CLEANUP)
// ==============================================================================
export default function AutoTimer() {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(true);

  useEffect(() => {
    let intervalId = null;

    if (isRunning) {
      // 1. Démarrage de l'effet de bord
      intervalId = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    }

    // 2. FONCTION DE NETTOYAGE OBLIGATOIRE (Cleanup)
    // S'exécute lorsque isRunning change ou lorsque le composant est détruit
    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [isRunning]); // Se réexécute uniquement si l'état isRunning change

  return (
    <div className="timer-box">
      <span>
        Chronomètre automatique : <strong>{seconds}s</strong>
      </span>
      <button
        className="btn"
        style={{
          padding: '4px 10px',
          fontSize: '0.8rem',
          backgroundColor: isRunning ? '#cbd5e1' : '#10b981',
          color: isRunning ? '#334155' : 'white'
        }}
        onClick={() => setIsRunning(!isRunning)}
      >
        {isRunning ? 'Pause' : 'Démarrer'}
      </button>
    </div>
  );
}
