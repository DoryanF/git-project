function loadPage(pageName) {
    fetch(`${pageName}.html`)
      .then(response => response.text())
      .then(content => {
        document.getElementById('content').innerHTML = content;
      })
      .catch(error => {
        console.error('Erreur de chargement de la page :', error);
      });
  }

  // Chargement de la page d'accueil par défaut au chargement de la page
  document.addEventListener('DOMContentLoaded', function() {
    loadPage('accueil');
  });