var listeDer = document.getElementById("trie-prix");
var elements = document.getElementById("article-conteneur").children;

// Ajouter un gestionnaire d'événements onchange à la liste
listeDer.onchange = function () {
  // Inverser l'affichage des éléments DIV
  for (var i = 0; i < elements.length / 2; i++) {
    var temp = elements[i].outerHTML;
    elements[i].outerHTML = elements[elements.length - 1 - i].outerHTML;
    elements[elements.length - 1 - i].outerHTML = temp;
  }
};
