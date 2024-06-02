
  
let carts = document.querySelectorAll('.add-cart');



let products = [
    {
        
        Article : 'Croissant au chocolat',
        Poids_Net :  100  ,
        Poids_brut : 120 ,
        Nombre_de_pièces_estimatifs : 12 ,
        Prix : 5 ,
        incart : 0 ,
        tag : 'sucre'



    },
  
    {
            
            Article : 'Croissant aux pistaches',
            Poids_Net :  100  ,
            Poids_brut : 120 ,
            Nombre_de_pièces_estimatifs : 12 ,
            Prix : 6 ,
            incart : 0 ,
            tag : 'pistacheCroiss'



        } ,  {
        
        Article : 'Croissant aux amandes',
        Poids_Net :  100  ,
        Poids_brut : 120 ,
        Nombre_de_pièces_estimatifs : 12 ,
        Prix : 6 ,
        incart : 0,
        tag : 'amande'


    } ,
    
    {
        
        Article : 'Croissant amandes + Chocolat',
        Poids_Net :  100  ,
        Poids_brut : 120 ,
        Nombre_de_pièces_estimatifs : 12 ,
        Prix : 4,
        incart : 0 ,
        tag : 'spécial'



    },
    {
        
        Article : 'Croissant Classique',
        Poids_Net :  100  ,
        Poids_brut : 120 ,
        Nombre_de_pièces_estimatifs : 12 ,
        Prix : 3,
        incart : 0 ,
        tag : 'classique'



    },
    {
        
        Article : "Croissant aux cacahuètes ",
        Poids_Net :  100  ,
        Poids_brut : 120 ,
        Nombre_de_pièces_estimatifs : 12 ,
        Prix : 4 ,
        incart : 0 ,
        tag : 'cacahuète'



    },
  
    

];



for(let i=0;i<carts.length;i++){
    carts[i].addEventListener('click', () => {
    cartNumbers(products[i]) ;
    totalCost (products [i]);
})
}
  


function onloadcartNumbers () {
    let productNumbers = localStorage.getItem('cartNumbers') ;
    if (productNumbers) {
        document.querySelector('.cart span').textContent = productNumbers ;
    }


}
function cartNumbers(product) {
    
    let productNumbers = localStorage.getItem('cartNumbers') ;
    

    productNumbers = parseInt(productNumbers);

    if(productNumbers) {
        localStorage.setItem('cartNumbers', productNumbers + 1);
        document.querySelector('.cart span').textContent = productNumbers + 1 ;
    }
    else {
        localStorage.setItem('cartNumbers',  1);
        document.querySelector('.cart span').textContent = 1 ;
        
    }
    setItems (product) ;
    
}

function setItems (product) 
{ 
    let cartItems = localStorage.getItem('productsIncart');
    cartItems=JSON.parse(cartItems);
    if (cartItems != null){
        if (cartItems [product.Article]==undefined){
            cartItems ={
                ...cartItems ,
                [product.Article] : product
            }
        }
        cartItems[product.Article].incart +=1 ;

    } else {
        product.incart = 1 ;
        cartItems = {
        [product.Article]: product 
        }
    }
    
    localStorage.setItem("productsIncart",JSON.stringify(cartItems));

}

function totalCost (product) {
    let cartCost = localStorage.getItem('totalCost');
    
    if (cartCost != null) {
        cartCost = parseInt(cartCost);
        localStorage.setItem('totalCost' , cartCost + product.Prix);

    } else {
       localStorage.setItem('totalCost' , product.Prix); 
    }
    

}

function displayCart () {
    let cartItems = localStorage.getItem("productsIncart") ;
    cartItems = JSON.parse(cartItems);
    let productContainer = document.querySelector("contenu-panier") ;
    if(productContainer && cartItems) {
        productContainer .innerHTML = '';
        Object.values(cartItems) .map ( item => {
            productContainer.innerHTML += `
            <div class="product">
               <i class="fa-sharp fa-solid fa-xmark"></i>
               <img src="${item.tag}.png">
               <span> ${item.Article} M/span>

            </div>
            `
            
        });
    }
}




onloadcartNumbers();
displayCart() ;

