
let orders = []
let customers = [
    {
        "id": 1,
        "name": "Bob BuysALot"
    },
    {
        "id": 2,
        "name": "Sally Cheapskate"
    },
    {
        "id": 3,
        "name": "Troy Thrifty"
    },
    {
        "id": 4,
        "name": "Chad Cheapskate"
    }
]

//async code that handles an order
function handleCustomerOrder(order){
    throw Error("not implemented")
}

//async code that returns list of customers 
function getCustomers(){
    throw Error("not implemented")
}

//async code that returns the list of orders
function getOrders(){
    throw Error("not implemented")
}

module.exports ={
    handleCustomerOrder,
    getCustomers,
    getOrders
}