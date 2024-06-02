// Récupération du texte envoyé via le paramètre GET
var texte = new URLSearchParams(window.location.search).get("texte");

// Affichage du texte dans le champ de saisie
document.getElementById("outputText").value = texte;
