//scriptAprops
//La méthode element.getBoundingClientRect() permet de retourner un objet DOMRect qui représente la taille d'un élément
//et sa position relative par rapport à la zone d'affichage (viewport) du navigateur.

const productContainers = document.querySelectorAll(".conteneur");
const nxtBtn = document.querySelectorAll(".nxt-btn");
const preBtn = document.querySelectorAll(".pre-btn");

productContainers.forEach((item, i) => {
  let containerDimensions = item.getBoundingClientRect();
  let containerWidth = containerDimensions.width;

  nxtBtn[i].addEventListener("click", () => {
    item.scrollLeft += containerWidth;
  });

  preBtn[i].addEventListener("click", () => {
    item.scrollLeft -= containerWidth;
  });
});
