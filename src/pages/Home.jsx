// src/pages/Home.jsx
import React, { useEffect, useState } from 'react';
import './Home.css';
const etoile = `${process.env.PUBLIC_URL}/images/etoile.svg`;

const Home = () => {
  const mots = [
    "PERTINENTS",
    "COHÉRENTS",
    "UNIQUES",
    "DYNAMIQUES",
    "IMPACTANTS",
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % mots.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    document.body.style.overflow = 'hidden'; // Désactive le scroll

    return () => {
      document.body.style.overflow = ''; // Rétablit le scroll lors du départ
    };
  }, []);

  return (
    <div className="home">
      <div className="star-container">
        <img src={etoile} alt="Étoile" className="star-image" />
      </div>
      <h1 className="main-text">
        DES VISUELS{' '}
        <span className="rolling-word">
          {mots[index]}
        </span>{' '}
        POUR UNE IDENTITÉ QUI VOUS RESSEMBLE
      </h1>
    </div>
  );
};

export default Home;
