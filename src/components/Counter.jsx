import React, { useState, useEffect } from 'react';

export default function Counter() {
  // 1. Valeur du compteur (initialisee depuis localStorage ou 0)
  const [count, setCount] = useState(() => {
    const saved = localStorage.getItem('mon_compteur_valeur');
    return saved !== null ? parseInt(saved, 10) : 0;
  });

  // 2. Pas d'incrémentation (1, 2, 5, 10)  
  const [step, setStep] = useState(1);

  // 3. Variables d'état simples : message et nombre total de clics
  const [message, setMessage] = useState('Aucun clic pour le moment');
  const [totalClics, setTotalClics] = useState(0);
  const [limitMessage, setLimitMessage] = useState('');

  // 4. Historique simple (liste d'actions simples)
  const [historique, setHistorique] = useState([]);

  // ============================================================================
  // 🔄 Hook useEffect n°1 : Synchroniser le titre de l'onglet du navigateur
  // ============================================================================
  useEffect(() => {
    document.title = 'Compteur : ' + count;
  }, [count]);

  // ============================================================================
  // 💾 Hook useEffect n°2 : Sauvegarder automatiquement dans le localStorage
  // ============================================================================
  useEffect(() => {
    localStorage.setItem('mon_compteur_valeur', count.toString());
  }, [count]);

  // Gestionnaire d'Incrémentation avec variables simples
  const handleIncrement = () => {
    const nouveauCompte = count + step;
    if (nouveauCompte > 50) {
      setLimitMessage('Seuil maximal de 50 atteint !');
      return;
    }

    setLimitMessage('');
    setCount(nouveauCompte);
    setMessage('Ajout de ' + step);
    setTotalClics(totalClics + 1);

    // Ajout simple dans le tableau avec l'opérateur spread [...]
    const action = '+' + step;
    setHistorique([...historique, action]);
  };

  // Gestionnaire de Décrémentation
  const handleDecrement = () => {
    const nouveauCompte = count - step;
    if (nouveauCompte < -50) {
      setLimitMessage('Seuil minimal de -50 atteint !');
      return;
    }

    setLimitMessage('');
    setCount(nouveauCompte);
    setMessage('Retrait de ' + step);
    setTotalClics(totalClics + 1);

    const action = '-' + step;
    setHistorique([...historique, action]);
  };

  // Gestionnaire de Réinitialisation
  const handleReset = () => {
    setLimitMessage('');
    setCount(0);
    setMessage('Remise a zero');
    setTotalClics(totalClics + 1);
    setHistorique([]);
  };

  // Style dynamique selon le signe du compteur
  const getStyleClass = () => {
    if (count > 0) return 'counter-display positive';
    if (count < 0) return 'counter-display negative';
    return 'counter-display zero';
  };

  return (
    <div className="counter-card">
      <div className={getStyleClass()}>{count}</div>

      {limitMessage && (
        <p role="alert" style={{ color: '#dc2626', fontWeight: 'bold' }}>
          {limitMessage}
        </p>
      )}

      <div className="btn-group">
        <button className="btn btn-dec" onClick={handleDecrement}>
          -{step}
        </button>
        <button className="btn btn-reset" onClick={handleReset}>
          Reset
        </button>
        <button className="btn btn-inc" onClick={handleIncrement}>
          +{step}
        </button>
      </div>

      <div className="step-control">
        <label htmlFor="step-select">Pas d'incrémentation :</label>
        <select
          id="step-select"
          value={step}
          onChange={(e) => setStep(parseInt(e.target.value, 10))}
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="5">5</option>
          <option value="10">10</option>
        </select>
      </div>

      <div
        style={{
          marginTop: '20px',
          textAlign: 'left',
          background: '#f8fafc',
          padding: '14px',
          borderRadius: '8px',
          border: '1px solid #e2e8f0',
          fontSize: '0.9rem'
        }}
      >
        <p style={{ marginBottom: '6px' }}>
          📢 <strong>Dernière action :</strong> {message}
        </p>
        <p style={{ marginBottom: '6px' }}>
          🔢 <strong>Nombre total de clics :</strong> {totalClics}
        </p>
        {historique.length > 0 && (
          <p>
            📜 <strong>Historique simple :</strong> {historique.join(', ')}
          </p>
        )}
      </div>
    </div>
  );
}
