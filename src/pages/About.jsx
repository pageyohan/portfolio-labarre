// src/pages/About.jsx
import React from 'react';
import './About.css';
import Accordion from '../components/Accordion';

const About = () => {
  const scrollRef = React.useRef(null); // Référence pour le défilement
  const alexandreImage = `${process.env.PUBLIC_URL}/images/alexandre.png`;
  const etoileImage = `${process.env.PUBLIC_URL}/images/etoile.svg`;
  const flecheImage = `${process.env.PUBLIC_URL}/images/flèche.svg`;

  const scrollToSection = () => {
    scrollRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="about-container">
      <div className="about-content">
        <div className="about-text">
          <h1>ALEXANDRE</h1>
          <h1>"LABARBOUIL"</h1>
          <p>
            PASSIONNÉ DE DESIGN GRAPHIQUE ET DE MÉTIERS DES ARTS APPLIQUÉS, JE COLLECTIONNE LES CARTES DE VISITE POUR M'INSPIRER ET JE SUIS CURIEUX DE TOUT CE QUI M'ENTOURE. JOUEUR DE RUGBY, J'AI DÉVELOPPÉ MON ESPRIT D'ÉQUIPE ET MA COHÉSION AVEC LES AUTRES. DYNAMIQUE ET SOCIABLE, J'AIME ÉCHANGER ET PARTAGER MES CONNAISSANCES ET MON EXPÉRIENCE DANS UN ESPRIT D'OUVERTURE ET DE CONVIVIALITÉ. TOUJOURS PRÊT À DÉCOUVRIR DE NOUVELLES CHOSES ET À RELEVER DE NOUVEAUX DÉFIS.
          </p>
        </div>
        <div className="about-images">
          <img src={alexandreImage} alt="Alexandre" className="alexandre-image" />
        </div>
        <img src={etoileImage} alt="Etoile" className="etoile-image" />
      </div>
      <div className="cta-bar">
        <span className="cta-text" onClick={scrollToSection}>SCROLL</span>
        <img src={flecheImage} alt="Flèche" className="cta-icon"  onClick={scrollToSection}/>
      </div>

      <div ref={scrollRef} className="accordion-sections">
        <Accordion title="QUELLES SONT MES COMPÉTENCES PRINCIPALES ?">
          <p>AU COURS DE MES DEUX PREMIÈRES ANNÉES D'ÉTUDES EN DESIGN GRAPHIQUE A LISAA, J'AI DÉVELOPPÉ DE NOMBREUSES COMPÉTENCES EN CRÉATION D'IDENTITÉ VISUELLE, EN ÉDITION ET EN WEBDESIGN. JE CONTINUE D'AMÉLIORER MON PROCESSUS CRÉATIF ET MA FAÇON DE TRAVAILLER POUR RÉPONDRE AU MIEUX AUX EXIGENCES DE CHAQUE PROJET. MA CURIOSITÉ NATURELLE ME POUSSE À M'INTÉRESSER EN PROFONDEUR AU SUJET DE CHAQUE PROJET, AFIN QUE MES RÉALISATIONS CORRESPONDENT PARFAITEMENT À L'UNIVERS ET AUX OBJECTIFS DE CELUI-CI.</p>
        </Accordion>
        <Accordion title="POURQUOI AI-JE CHOISI LE DESIGN GRAPHIQUE ?">
          <p>DEPUIS MON ENFANCE, JE SUIS PASSIONNÉ PAR LES ARTS APPLIQUÉS. AU DÉBUT DE MON ADOLESCENCE, J'AI COMMENCÉ À M'INTÉRESSER AU MONTAGE VIDÉO ET J'AI RÉALISÉ DES VIDÉOS POUR DES YOUTUBEURS AFIN DE GAGNER UN PEU D'ARGENT DE POCHE. PAR LA SUITE, J'AI DÉCOUVERT LE DESIGN GRAPHIQUE ET J'AI COMMENCÉ À CRÉER DES VISUELS POUR DES YOUTUBEURS, CE QUI M'A BEAUCOUP PLU. C'EST ALORS QUE J'AI DÉCIDÉ D'EN FAIRE MON MÉTIER, UN MÉTIER QUI ME PASSIONNE ET M'ÉPANOUIT. DIX ANS PLUS TARD, JE SUIS TOUJOURS AUSSI IMPLIQUÉ DANS LE MONDE DU GRAPHISME ET JE CONTINUE À APPRENDRE ET À ME DÉVELOPPER DANS CE DOMAINE.</p>
        </Accordion>
        <Accordion title="QUELLES SONT MES INSPIRATIONS EN TERME DE DESIGN ?">
          <p>LE MODERNISME ET LE MINIMALISME SONT DES STYLES QUI M'INSPIRENT BEAUCOUP, MAIS J'AIME EXPLORER DIFFÉRENTS STYLES DANS MES CRÉATIONS. CEPENDANT, LORS D'UN DEVOIR D'INFOGRAPHIE, J'AI DÉCOUVERT L'ARTISTE SAUL BASS, QUI M'A PROFONDEMMENT MARQUÉ. DEPUIS, JE M'INSPIRE RÉGULIÈREMENT DE SON TRAVAIL DANS MES CRÉATIONS. J'ADMIRE ÉGALEMENT LES TRAVAUX D'AUTRES ARTISTES TELS QUE PAUL RAND ET APRIL GREIMAN, QUI ONT TOUS DEUX APPORTÉ UNE CONTRIBUTION SIGNIFICATIVE AU MONDE DU DESIGN GRAPHIQUE.</p>
        </Accordion>
        <Accordion title="QUEL EST MON PARCOURS ACADÉMIQUE ?">
          <p>MON PARCOURS ACADÉMIQUE EST ASSEZ TRADITIONNEL, J'AI OBTENU UN BACCALAURÉAT GÉNÉRAL AVEC UNE SPÉCIALISATION EN HISTOIRE-GÉOGRAPHIE, GÉOPOLITIQUE, SCIENCES POLITIQUES ET SCIENCES ÉCONOMIQUES ET SOCIALES. CEPENDANT, JE DOIS ADMETTRE QUE JE N'ÉTAIS PAS UN ÉLÈVE PARTICULIÈREMENT ASSIDU PENDANT MES ANNÉES SCOLAIRES. DEPUIS QUE J'AI TROUVÉ MA VOIE PROFESSIONNELLE, JE SUIS BEAUCOUP PLUS ÉPANOUI ET MOTIVÉ DANS MES ÉTUDES ET MON TRAVAIL. J'AIME CE QUE JE FAIS ET JE SUIS DÉTERMINÉ À DONNER LE MEILLEUR DE MOI-MÊME CHAQUE JOUR POUR PROGRESSER ET DEVENIR MEILLEUR DANS MON DOMAINE.</p>
        </Accordion>
      </div>
    </div>
  );
};

export default About;