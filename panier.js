const nbArticle = document.getElementById("nbArticles");
const incrementBtn = document.getElementById("incrementBtn");
const decrementBtn = document.getElementById("decrementBtn");

function Augmenter() {
  let currentValue = parseInt(nbArticle.value);
  nbArticle.value = currentValue + 1;
}

function Diminuer() {
  let currentValue = parseInt(nbArticle.value);
  nbArticle.value = currentValue - 1;
}
