const myCart = [
  {
    id: 1,
    name: "Iphone 17 Pro",
    price: 1500,
    quantity: 1
  },
  {
    id: 2,
    name: "Macbook Pro 2024",
    price: 2500,
    quantity: 1
  },
  {
    id: 3,
    name: "Airpods Pro",
    price: 400,
    quantity: 2
  }
]

const myProducts = () => {
  return new Promise((resolve, reject) => {
    if (myCart.length > 0) {
      myCart.forEach((product, index) => {
        console.log(`${index + 1}` + `${product.name}` + `-` + `$${product.price}` + `-` + `Qty: ${product.quantity}`)
      })
      resolve();
    }
    else {
      reject("Your cart is empty");
    }
  })
}

const createOrder = () => {
  return new Promise((resolve, reject) => {
    const orderId = Math.floor(Math.random() * 10000);
    if (orderId) {
      resolve("Order created successfully. Your order ID is " + orderId);
    }
    reject("Failed to create order");
  })
}

const calculateTotal = () => {
  return new Promise((resolve, reject) => {
    let total = 0;
    if (myCart.length > 0) {
      myCart.forEach((product, index) => {
        total = total + (product.price * product.quantity);
      })
      resolve("Total amount payable is $" + total);
    }
    else {
      reject("Cannot calculate total for empty cart");
    }
  })
}

const processPayment = () => {
  return new Promise ( ( resolve , reject ) => {
    const paymentSuccess = true; 
    if(paymentSuccess){
      resolve("Payment processed successfully");
    }
    else {
      reject("Payment failed");
    }
  })
}

myProducts()
.then ( () => {
  return createOrder();
})
.then ( (orderMssg) => {
  console.log(orderMssg);
  return calculateTotal();
})
.then( (totalMssg) => {
  console.log(totalMssg);
  return processPayment();
})
.then ( (paymentMssg) => {
  console.log(paymentMssg);
})
.catch ( (error) => {
  console.log(error);
})

/*Explanation of the code:
1. We define an array myCart containing products with their id, name, price, and quantity.
2. We create four functions that return Promises:
    - myProducts: Logs the products in the cart.
    - createOrder: Simulates order creation and returns an order ID.
    - calculateTotal: Calculates the total amount payable for the products in the cart.
    - processPayment: Simulates payment processing.
3. We chain these functions using .then() to ensure they execute in sequence.
4. If any function fails, the .catch() block handles the error and logs it.
*/

/*Explanation of Promise chaining:
Promise chaining is a technique used to execute multiple asynchronous operations in a specific sequence. Each operation returns a Promise, and the next operation starts only after the previous one has successfully completed. This is achieved using the .then() method, which allows us to define what should happen after a Promise resolves.
In the provided code, we have four asynchronous functions: myProducts, createOrder, calculateTotal, and processPayment. Each function returns a Promise. We chain these functions together using .then(), ensuring that each function executes only after the previous one has completed successfully. If any function fails (i.e., its Promise is rejected), the .catch() block at the end of the chain handles the error, preventing further execution of the subsequent functions.);
*/

/*Here : myProducts() is called first . It returns a Promise that resolves after logging the products in the cart. Once this Promise resolves, the next .then() block calls createOrder(), which creates an order and returns a Promise with the order ID. This process continues with calculateTotal() and processPayment(), each waiting for the previous operation to complete before executing. If any operation fails, the error is caught in the .catch() block, ensuring proper error handling throughout the chain.

/*why return is used in .then() blocks:
The return statement is used in .then() blocks to ensure that the next .then() in the chain waits for the Promise returned by the current .then() to resolve before executing. When you return a Promise from within a .then() block, it allows for proper chaining of asynchronous operations. This means that the next .then() will only execute after the returned Promise has been resolved, ensuring that each step in the sequence is completed before moving on to the next one. This is crucial for maintaining the correct order of operations, especially when dealing with asynchronous tasks that depend on the results of previous tasks. Without the return statement, the next .then() would execute immediately, potentially leading to unexpected behavior or errors if the previous operation had not yet completed. */