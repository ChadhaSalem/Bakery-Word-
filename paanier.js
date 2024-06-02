function Ajouter() {
  // Récupération du texte saisi
  var texte = "Jiheen";

  // Redirection vers la page cible en envoyant le texte via un paramètre GET
  window.location.href = "panier.html?texte=" + texte;
}
