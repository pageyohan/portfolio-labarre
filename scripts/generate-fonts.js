const fs = require('fs');
const path = require('path');

// Dossier où les polices sont stockées
const fontsDir = path.join(__dirname, '../src/fonts/projets');

// Dossier où le fichier CSS sera généré
const outputDir = path.join(__dirname, '../src/fonts');
const outputFile = path.join(outputDir, 'fonts.css');

// Fonction pour créer la règle @font-face
const createFontFace = (filePath) => {
  const fontName = path.basename(filePath, path.extname(filePath)).toLowerCase().replace(/\s+/g, '-');
  const fontExtension = path.extname(filePath).slice(1);

  // Détermine le format correct pour chaque extension
  let format;
  switch (fontExtension) {
    case 'ttf':
      format = 'truetype';
      break;
    case 'otf':
      format = 'opentype';
      break;
    case 'woff':
    case 'woff2':
      format = fontExtension; // "woff" et "woff2" restent les mêmes
      break;
    default:
      format = ''; // Si un format non supporté est détecté
  }

  return `
@font-face {
  font-family: '${fontName}';
  src: url('./projets/${path.basename(filePath)}') format('${format}');
  font-weight: normal;
  font-style: normal;
}
`;
};

// Lire les fichiers dans le dossier des polices
const fontFiles = fs.readdirSync(fontsDir).filter(file => /\.(ttf|otf|woff|woff2)$/.test(file));

// Générer le contenu CSS pour toutes les polices
const cssContent = fontFiles.map(file => createFontFace(file)).join('\n');

// Écrire le contenu CSS dans le fichier
fs.writeFileSync(outputFile, cssContent);

console.log('Font CSS generated successfully');
