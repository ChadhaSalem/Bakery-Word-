
function onloadcartNumbers () {
    let productNumbers = localStorage.getItem('cartNumbers') ;
    if (productNumbers) {
        document.querySelector('.cart span').textContent = productNumbers ;
    }


}
function displayCart () {
    let cartItems = localStorage.getItem("productsIncart") ;
    cartItems = JSON.parse(cartItems);
    let productContainer = document.querySelector(".product-container") ;
    let cartCost = localStorage.getItem('totalCost')
    console.log(productContainer);
    if(productContainer && cartItems) {
        productContainer .innerHTML = '';
        Object.values(cartItems) .map ( item => {
            productContainer.innerHTML += `
            <div class="product">
               
               
               
               <div class="descrip-img">
                  <img src= "images/${item.tag}.png" >
                  <div class="descrip-article">
                    <h3> ${item.Article}   </h3>
                    <span class="titre-descrip">Poids net :</span>
                    <span> ${item.Poids_Net} g</span>
                    <br />
                    <span class="titre-descrip"> Poids brut: </span>
                    <span>${item.Poids_brut} g </span>
                    <p id="prix">${item.Prix},000 DT </p>
                  </div>  
                  
                </div>
                <div class="plus-moins">
                    <table   >
                        <tr>
                        <td class="cell1"> <button class="plus-btn" id="plus" >
                        <i class="fas fa-plus"></i>
                      </button> </td>
                        <td class="cell2" id="quantity"> 1 </td>
                        <td class="cell3">  <button class="minus-btn" id="minus">
                        <i class="fas fa-minus"></i>
                      </button> </td>
                        </tr>  
                    </table>
                </div>

                <div class="total-article">
                    <p class="prix-total" >${item.incart*item.Prix} ,000DT</p>
                    <a href="">Supprimer</a>
                </div>

            </div>

            </div>
            `;
            
        });

        productContainer.innerHTML += `
            <div class="facture">
                <span class="span1">Total</span>
                <span class="span2">${cartCost},000</span>
                <br />
                <hr />
                <button class="paiement-btn">Paiement</button>
            </div>
        `

        
    }
}


/*let product = JSON.parse(localStorage.getItem(productsIncart));
let cart = JSON.parse(localStorage.getItem(cart));

function remove (productId) {
    let temp =cart.filter(item =>item.id !=productId) ;
    localStorage.setItem("cart",JSON.stringify(temp)) ;




}*/




onloadcartNumbers() ;
displayCart() ;


/*<div class="vider-continuer">
<hr />
<button class="btn-vider-retour">
    <a href="#" class="">Continuer mes achats</a>
</button>

<button class="btn-vider-retour">
    <a href="#">Vider le panier</a>
</button>
</div>*/
