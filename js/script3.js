document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Récupération des valeurs saisies dans le formulaire
    const nom = document.getElementById("nom").value;
    const prenom = document.getElementById("prenom").value;
    const dateNaissance = document.getElementById("dateNaissance").value;

    // Récupération des préférences sélectionnées
    const preferences = [];
    const checkboxes = document.querySelectorAll("input[type=checkbox]:checked");
    checkboxes.forEach(checkbox => {
      preferences.push(checkbox.value);
    });

    // Affichage des données dans la console (remplacez cela par l'envoi vers un serveur, etc.)
    console.log("Nom:", nom);
    console.log("Prénom:", prenom);
    console.log("Date de naissance:", dateNaissance);
    console.log("Préférences:", preferences);

    // Vous pouvez également effectuer d'autres actions ici, par exemple envoyer les données à un serveur via une requête AJAX, etc.

    // Réinitialisation du formulaire après soumission
    this.reset();
  });