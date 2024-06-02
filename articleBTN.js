const buttons = document.querySelectorAll(".product-btn");
function showButtons(i) {
  buttons[i].style.bottom = "36px";
  buttons[i].style.opacity = "1";
}

function hideButtons(i) {
  const buttons = document.querySelectorAll(".product-btn");
  buttons[i].style.bottom = "-50px";
  buttons[i].style.opacity = "0";
}
