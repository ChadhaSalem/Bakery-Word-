const produCtcontainers = [...document.querySelectorAll('.product_container')];
const nxtBtn = [...document.querySelectorAll('.next-btn')];
const pretBtn = [...document.querySelectorAll('.pre-btn')];

produCtcontainers.forEach((item,i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;
    nxtBtn[i].addEventListener('click',()=>{
        item.scrollLeft += containerWidth;
    })
    pretBtn[i].addEventListener('click',()=>{
        item.scrollLeft -= containerWidth;
    })
    
})

var magnifying_area = document.getElementById("magnifying_area");
var magnifying_img = document.getElementById("magnifying_img");

content.addEventListener("mousemove" ,function(event) {
    clientX = event.clientX - magnifying_area.offsetLeft
    clientY = event.clientY - magnifying_area.offsetTop
    mWidth = magnifying_area.offsetWidth
    mHeight = magnifying_area.offsetHeight

    clientX = clientX / mWidth*100
    clientY = clientY / mHeight*100


    magnifying_img.style.transform = 'translate(-'+clientX+'%,-'+clientY+'%) scale(1.5)'

});
content.addEventListener("mouseleave" ,function() {
    magnifying_img.style.transform = 'translate(-50%,-50%) scale(1)'

});



const buttons = document.querySelectorAll(".product-btn");
function showButtons(i) {
    
    buttons[i].style.bottom = "3px";
    buttons[i].style.opacity = "1";
  }
  
  function hideButtons(i) {
    
    buttons[i].style.bottom = "-50px";
    buttons[i].style.opacity = "0";
  }
  
  function changeIcon(i) {
     buttons = buttons[i];
  }
  var heartButtons = document.querySelectorAll(".fa-heart");
  for (var i = 0; i < heartButtons.length; i++) {
    heartButtons[i].addEventListener("click", function () {
      this.classList.toggle("fa-heart");
      this.classList.toggle("fa-times");
    });
  }  

const plusBtn = document.getElementById('plus');
const minusBtn = document.getElementById('minus');
const quantityElement = document.getElementById('quantity');

plusBtn.addEventListener('click', function() {
  let quantity = parseInt(quantityElement.innerHTML);
  quantity += 1;
  quantityElement.innerHTML = quantity.toString();
});

minusBtn.addEventListener('click', function() {
  let quantity = parseInt(quantityElement.innerHTML);
  if (quantity > 1) {
    quantity -= 1;
    quantityElement.innerHTML = quantity.toString();
  }
});

