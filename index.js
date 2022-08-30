// add to cart buttons
let carts = document.querySelectorAll(".add-cart");
 // Products on sales page
let products = [
    {
        name: "Polo Shirt",
        tag: 'poloshirt',
        price: 50,
        inCart: 0
    },
    {
        name: "Graphic Shirt",
        tag: 'blackshirt',
        price: 25,
        inCart: 0
    },
    {
        name: "Graphic Tee ",
        tag: 'blacktee',
        price: 30,
        inCart: 0
    },
    {
        name: "Graphic Tee 2",
        tag: 'greytee',
        price: 20,
        inCart: 0
    }

]
// for loop counts all added to cart products together
for (let i=0; i < carts.length; i++) {
    carts[i].addEventListener("click", () => {
        cartNumbers(products[i]);
        totalCost(products[i]);
    })
}

function onLoadCartNumbers() {
    let productNumbers = localStorage.getItem("cartNumbers");
    if(productNumbers) {
        document.querySelector(".cart span").textContent = productNumbers;
    }
}

function cartNumbers(product) {
    let productNumbers = localStorage.getItem("cartNumbers");
    productNumbers = parseInt(productNumbers);
    if( productNumbers ) {
        localStorage.setItem("cartNumbers", productNumbers + 1);
        document.querySelector(".cart span").textContent = productNumbers + 1;
    } else {
        localStorage.setItem("cartNumbers", 1);
        document.querySelector(".cart span").textContent = 1;
    }
    setItems(product);
    
}

 // allows product that is added to cart to show up as JSON object in local storage
function setItems(product) {
    let cartItems = localStorage.getItem("productsInCart");
    cartItems = JSON.parse(cartItems);
    console.log("my cartItems are", cartItems);

    if(cartItems != null) {

        if(cartItems[product.tag] == undefined ) {
            cartItems = {
                ...cartItems,
                [product.tag]: product
            }
        }
        cartItems[product.tag].inCart += 1;
    } else {
        product.inCart = 1;
        cartItems = {
            [product.tag]: product
        }
    }

    localStorage.setItem("productsInCart", JSON.stringify
    (cartItems));
}

function totalCost(product) {
    // console.log("The product price is", product.price);
    let cartCost = localStorage.getItem("totalCost");
    
    console.log("my cartCost is", cartCost);
    console.log(typeof cartCost);

    if(cartCost != null) {
        cartCost = parseInt(cartCost);
        localStorage.setItem("totalCost", cartCost + product.price);
    } else {
        localStorage.setItem("totalCost", product.price);
    }

    
}

onLoadCartNumbers();