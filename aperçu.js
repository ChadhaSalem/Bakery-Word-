const notif = document.querySelector(".notif");
const body = document.querySelector("body");
const overlay = document.querySelector("#overlay");
// Récupération de tous les boutons avec la classe "product-btn"
const productBtns = document.querySelectorAll(".fa-eye");

// Parcourir tous les boutons et ajouter un gestionnaire d'événements
productBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    overlay.style.display = "block";

    const titre = document.createElement("h3");
    const hrElement = document.createElement("hr");
    titre.innerText = "Aperçu";

    // Récupération de l'élément parent "article"
    const article = btn.closest(".article");

    // Récupération de l'élément "img" et "p" de l'article
    const articleImg = article.querySelector(".image");
    const articleDescripText = article.querySelector(
      ".description-article"
    ).innerText;

    // Création de l'élément "p" pour la description
    const articleDescrip = document.createElement("p");
    articleImg.style.float = "left";

    articleDescrip.classList.add("description");
    articleDescrip.innerText = articleDescripText;
    articleDescrip.style.position = "relative";

    articleDescrip.style.left = "20px";
    articleDescrip.style.top = "30px";

    // Remplir l'élément "div" avec les informations de l'article

    notif.innerHTML = "";
    notif.appendChild(titre);
    notif.appendChild(hrElement);
    notif.appendChild(articleImg.cloneNode(true));

    notif.appendChild(articleDescrip);

    // Changement de la visibilité de l'élément "div"
    notif.style.display = "block";
  });
});

notif.addEventListener("click", () => {
  notif.style.display = "none";
  overlay.style.display = "none";
});

//Dans ce code, nous avons créé un nouvel élément "p" pour stocker la description de l'article.
// Nous avons également utilisé la propriété "innerText" pour récupérer le texte de la classe "description-article" et l'ajouter à l'élément "p".
//Ensuite, nous avons ajouté cet élément "p" à la notification avec la méthode "appendChild".
