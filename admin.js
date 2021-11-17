const base_api_url = 'https://60d23844858b410017b2d60b.mockapi.io/'
async function fetchOrders(){
    let response = await fetch(`${base_api_url}/orders`)
    let orders = await response.json()

    let orderUL = document.querySelector("#orders")
    for (let index = 0; index < orders.length; index++) {
        let order = orders[index];
        let li = document.createElement("li")
        li.innerHTML = `
        <li>
            <h3>${order.name}</h3>
            <p><b>${order.price}</b></p>
            <img alt="${order.name}" src="./assets/product.png" />
            
        </li>
        `
        let button = document.createElement("button")
        //<button class="btn btn-secondary" onclick=>Fufill ORder</button>
        fbutton.setAttribute("class", "btn btn-secondary")
        fbutton.addEventListener("click", fufillOrder(order));
        fbutton.textContent = "Fufill Order"
        li.append(fbutton)

        dbutton.setAttribute("class", "btn btn-danger")
        dbutton.addEventListener("click", deleteOrder(order));
        dbutton.textContent = "Delete Order"
        
        orderUL.append(li)
    }
}

async function fufillOrder(order){
    console.log("Order packaged")
    
    await deleteOrder(order)
    alert(`Order #${order.id} fufilled`)

}

async function deleteOrder(order){
    //TODO: implement delete DELETE /orders/id
}

fetchOrders()