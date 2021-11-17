const base_api_url = 'https://60d23844858b410017b2d60b.mockapi.io/'
async function fetchProducts(){
    let response = await fetch(`${base_api_url}/products`)
    let products = await response.json()

    let productUL = document.querySelector("#products")
    for (let index = 0; index < products.length; index++) {
        let product = products[index];
        let li = document.createElement("li")
        li.innerHTML = `
        <li>
            <h3>${product.name}</h3>
            <p><b>${product.price}</b></p>
            <img alt="${product.name}" src="./assets/product.png" />
            
        </li>
        `
        let button = document.createElement("button")
        //<button class="btn btn-secondary" onclick=>Add to Cart</button>
        button.setAttribute("class", "btn btn-secondary")
        button.addEventListener("click", oneClickBuy(product));
        button.textContent = "1-Click Buy"
        li.append(button)
        productUL.append(li)
    }
}

fetchProducts();

async function oneClickBuy(product){
    //TODO: normally put in cart, but reduce scope...
    //TODO: get customerId from cookie
    let order = {...product, customerId: 5}
    let orderResponse = await fetch(`${base_api_url}/orders`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify( order)
    })

    let responseData = await orderResponse.json();
    alert(`Order #${responseData.id} success`)
}