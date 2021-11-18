const base_api_url = 'https://60d23844858b410017b2d60b.mockapi.io/'
async function fetchProducts(){
    // GET base_api_url/products
    let response = await fetch(`${base_api_url}/products`)
    
    console.log(response)
    let data = await response.json()
    console.log(data)
    let products = data;

    let productUL = document.querySelector("#products")
    for (let index = 0; index < products.length; index++) {
        let product = products[index];
        let li = document.createElement("li")
        //TODO: fill in with details
        li.innerHTML = `
        <li>
            <h3>Name: ${product.name}</h3>
            <p><b>Price: ${product.price}</b></p>
            <img alt="" src="${product.imageUrl}" />
            
        </li>
        `
        let button = document.createElement("button")
        //<button class="btn btn-secondary" onclick=>Add to Cart</button>
        button.setAttribute("class", "btn btn-secondary")
        button.addEventListener("click", () => oneClickBuy(product));
        button.textContent = "1-Click Buy"
        li.append(button)
        productUL.append(li)
    }
}



async function oneClickBuy(product){
    //TODO: normally put in cart, but reduce scope...
    //TODO: get customerId from cookie
    let order = {...product, customerId: 5}
    //POST /orders
    let response = await fetch(`${base_api_url}/orders`,{
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(order)
    })
    console.log(response)
    let responseData = await response.json();
    alert(`Order #${responseData.id} success`)
}


//when the page is loaded
fetchProducts();