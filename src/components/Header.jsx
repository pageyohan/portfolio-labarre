import React from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Fonction pour déterminer si c'est une page de ProjectDetail
  const isProjectDetailPage = location.pathname.startsWith('/project/');

  // Déterminez le nom de la page en fonction du chemin
  const getPageName = (path) => {
    switch (path) {
      case '/':
        return 'Accueil';
      case '/projects':
        return 'Projets';
      case '/about':
        return 'À propos';
      case '/contact':
        return 'Contact';
      default:
        return '';
    }
  };

  const pageName = getPageName(location.pathname);

  // Fonction pour envelopper chaque lettre dans un span
  const wrapWithSpan = (text) => (
    text.split('').map((char, index) => (
      <span key={index}>
        {char === ' ' ? '\u00A0' : char}
      </span>
    ))
  );

  return (
    <header className="header">
      <div className="logo-container">
        {isProjectDetailPage ? (
          <img
            src="/images/flèche.svg"
            alt="Retour"
            className="back-arrow"
            onClick={() => navigate(-1)}
          />
        ) : (
          <>
            <img src="/images/logo.svg" alt="Logo" className="header-logo" />
            <span className="page-name">{pageName}</span>
          </>
        )}
      </div>
      <nav>
        <ul className="nav-list">
          <li><NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>{wrapWithSpan('Accueil')}</NavLink></li>
          <li><NavLink to="/projects" className={({ isActive }) => (isActive ? "active" : "")}>{wrapWithSpan('Projets')}</NavLink></li>
          <li><NavLink to="/about" className={({ isActive }) => (isActive ? "active" : "")}>{wrapWithSpan('À propos')}</NavLink></li>
          <li><NavLink to="/contact" className={({ isActive }) => (isActive ? "active" : "")}>{wrapWithSpan('Contact')}</NavLink></li>
        </ul>
      </nav>
      <div className="header-bar"></div>
    </header>
  );
};

export default Header;
