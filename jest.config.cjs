module.exports = {
    transform: {
      '^.+\\.js$': 'babel-jest',  // Babel wird verwendet, um JS-Dateien zu transformieren
    },
    testEnvironment: 'node',  // Da du einen Node.js-Server hast, verwenden wir testEnvironment: 'node'
  };
  