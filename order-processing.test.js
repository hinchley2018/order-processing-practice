const orderUtilities = require('./order-processing')
//first promise in chain
let customer1Order = {
    customerId: 1,
    products: [
        {
            "id": 2,
            "description": "Computers",
            "price": "$67.42"
        },
        {
            "id": 3,
            "description": "Garden",
            "price": "$90.68"
        },
    ],
    paymentInfo: {
        authorizedCharge: 158.10,
        currency: 'USD',
        cardNumber: "You Wish",
        expirationDate: "12/25/2040"
    },
    shippingDetails: {
        address: "1234 Can't Find Me Drive",
        zipCode: 12345
    }
}
orderUtilities.handleCustomerOrder(customer1Order)
console.log(orderUtilities.getOrders())

//we can handle any number of orders now
let customer4Order = {
    customerId: 4,
    products: [
        {
            "id": 9,
            "description": "Music",
            "price": "$59.79"
        },
        {
            "id": 10,
            "description": "Sports",
            "price": "$41.16"
        }
    ],
    paymentInfo: {
        authorizedCharge: 100.95,
        currency: 'USD',
        cardNumber: "Really...",
        expirationDate: "12/25/1978"
    },
    shippingDetails: {
        address: "4321 circle",
        zipCode: 54321
    }
}
//this one should fail
orderUtilities.handleCustomerOrder(customer4Order)
console.log(orderUtilities.getOrders())

orderUtilities.getCustomers()