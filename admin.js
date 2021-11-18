const base_api_url = 'https://60d23844858b410017b2d60b.mockapi.io/'
async function fetchOrders(){
    //GET /orders
    let response = await fetch(`${base_api_url}/orders`)
    console.log(response)
    let orders = await response.json()
    console.log(orders)

    let orderUL = document.querySelector("#orders")
    for (let index = 0; index < orders.length; index++) {
        let order = orders[index];
        let li = document.createElement("li")
        //TODO fill in with data
        li.innerHTML = `
        <li>
            <h3>Name: ${order.name}</h3>
            <p><b>Price: ${order.price}</b></p>
            <p><b>Quantity: ${order.quantity}</b></p>
            <img alt="" src="${order.imageUrl}" />
            
        </li>
        `
        let fbutton = document.createElement("button")
        //<button class="btn btn-secondary" onclick=>Fufill ORder</button>
        fbutton.setAttribute("class", "btn btn-secondary")
        fbutton.addEventListener("click", () => fufillOrder(order));
        fbutton.textContent = "Fufill Order"
        li.append(fbutton)

        let dbutton = document.createElement("button")
        dbutton.setAttribute("class", "btn btn-danger")
        dbutton.addEventListener("click", () => deleteOrder(order));
        dbutton.textContent = "Delete Order"
        li.append(dbutton)

        orderUL.append(li)

    }
}

async function fufillOrder(order){
    console.log("Order packaged")

    //TODO: delete order (would probably update instead...)
    alert(`Order #${order.id} fufilled`)

}

async function deleteOrder(order){
    //TODO: implement delete DELETE /orders/id

    let response = await fetch(`${base_api_url}/orders/${order.id}`,{
        method: "DELETE"
    })
    let responseData = await response.json();
    alert("deleted order # ", responseData.id)
}

//whne page is loaded
fetchOrders()