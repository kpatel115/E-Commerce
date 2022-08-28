let carts = document.querySelectorAll(".add-cart");

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
for (let i=0; i < carts.length; i++) {
    carts[i].addEventListener("click", () => {
        cartNumbers();
    })
}

function onLoadCartNumbers() {
    let productNumbers = localStorage.getItem("cartNumbers");

    if(productNumbers) {
        document.querySelector(".cart span").textContent = productNumbers;
    }
}

function cartNumbers() {
    let productNumbers = localStorage.getItem("cartNumbers");


    productNumbers = parseInt(productNumbers);

    if( productNumbers ) {
        localStorage.setItem("cartNumbers", productNumbers + 1);
        document.querySelector(".cart span").textContent = productNumbers + 1;
    } else {
        localStorage.setItem("cartNumbers", 1);
        document.querySelector(".cart span").textContent = 1;
    }

    
}

onLoadCartNumbers();