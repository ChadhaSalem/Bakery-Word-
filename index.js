//

/////

let i = -1;
let sourceImg = [
  "images/chocolats.jpg",
  "images/maca.jpg",
  "images/ImageIndex.jpg",
];
let expression = document.querySelector(".first-title");
let caroussel = document.getElementById("caroussel");
let carouselImg = document.getElementById("carousel-img");
let parag = document.querySelector(".first-parag");
let link = document.querySelector(".first-link");

document.getElementById("d").addEventListener("click", function () {
  if (i < sourceImg.length - 1) {
    caroussel.style.transition = "all 0.7s ease";
    carouselImg.style.opacity = 0;
    setTimeout(function () {
      carouselImg.src = sourceImg[++i];
      carouselImg.style.opacity = 1;
      switch (i) {
        case 2:
          expression.innerHTML =
            "Découvrez l'univers sucré de notre pâtisserie artisanale";
          expression.style.bottom = "150px";
          expression.style.width = "600px";
          expression.style.height = "80px";

          break;
        case 0:
          expression.innerHTML =
            "Des chocolats fins et délicats, faits avec des ingrédients de qualité pour une expérience gustative exceptionnelle";
          expression.style.width = "760px";
          parag.style.left = "380px";
          parag.style.top = "290px";
          expression.style.left = "260px";
          link.style.left = "380px";
          expression.style.top = "170px";
          expression.style.height = "100px";

          break;
        case 1:
          expression.innerHTML =
            "Nos macarons, un voyage gustatif aux saveurs intenses pour vos papilles";
          expression.style.width = "400px";
          expression.style.height = "150px";
          expression.style.bottom = "250px";
          expression.style.left = "30px";
          parag.style.left = "30px";
          parag.style.top = "330px";
          link.style.left = "30px";
          link.style.top = "360px";

          break;
      }
    }, 700); // 700ms = temps de transition CSS
  } else {
    //carouselImg.src= "images/ImageIndex.jpg";
    carouselImg.src = sourceImg[2];
    i = -1;
  }
});

////

document.getElementById("g").addEventListener("click", function () {
  if (i <= sourceImg.length - 1 && i > 0) {
    caroussel.style.transition = "all 0.7s ease";
    carouselImg.style.opacity = 0;
    setTimeout(function () {
      carouselImg.src = sourceImg[--i];
      carouselImg.style.opacity = 1;
    }, 700); // 700ms = temps de transition CSS
  } else {
    //carouselImg.src= "images/ImageIndex.jpg";
    carouselImg.src = sourceImg[2];

    i = -1;
  }
});

let secondBtn = document.getElementById("second-Btn");
let thirdBtn = document.getElementById("thirdBtn");
let typeAvis = document.querySelector(".type-avis");
let nomClient = document.querySelector(".nom-client");
let commentaire = document.querySelector(".commentaire");

document.getElementById("first-btn").addEventListener("click", function () {
  document.getElementById("first-btn").style.transition = "all 0.7s ease";
  document.getElementById("first-btn").style.opacity = 0.7;

  setTimeout(function () {
    document.getElementById("first-btn").className = "fas fa-circle fa-1x";
    typeAvis.innerHTML = "Avis concernant Cupcake";
    nomClient.innerHTML = "Trabelsi Jihen";
    commentaire.innerHTML =
      "J'adore les cupcakes ! Ils sont délicieux, amusants à manger et parfaits pour toutes les occasions.";
    document.getElementById("third-btn").className = "far fa-circle";
    document.getElementById("second-btn").className = "far fa-circle";
  }, 700); // 700ms = temps de transition CSS
});

document.getElementById("second-btn").addEventListener("click", function () {
  document.getElementById("second-btn").className = "fas fa-circle fa-1x";

  document.getElementById("second-btn").style.transition = "all 0.7s ease";
  document.getElementById("second-btn").style.opacity = 0.7;

  setTimeout(function () {
    typeAvis.innerHTML = "Avis concernant Macarons";
    nomClient.innerHTML = "Guesmi Oumaima";
    commentaire.innerHTML =
      "Les macarons étaient incroyablement délicieux et la présentation était magnifique. Je les recommande vivement !";
    document.getElementById("third-btn").className = "far fa-circle";
    document.getElementById("first-btn").className = "far fa-circle";
  }, 700); // 700ms = temps de transition CSS
});

document.getElementById("third-btn").addEventListener("click", function () {
  document.getElementById("third-btn").className = "fas fa-circle fa-1x";

  document.getElementById("third-btn").style.transition = "all 0.7s ease";
  document.getElementById("third-btn").style.opacity = 0.7;

  setTimeout(function () {
    typeAvis.innerHTML = "Avis concernant Chocolat";
    nomClient.innerHTML = "Salem Chadha";
    commentaire.innerHTML =
      "Ces chocolats sont absolument délicieux ! Chaque bouchée est une explosion de saveurs et de textures.";
    document.getElementById("second-btn").className = "far fa-circle";
    document.getElementById("first-btn").className = "far fa-circle";
  }, 700); // 700ms = temps de transition CSS
});
