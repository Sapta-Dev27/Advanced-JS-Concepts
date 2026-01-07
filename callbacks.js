/*callbacks are basically functions which are passed as an argument to another function and are
 executed after some operation has been completed*/
 

function fetchData(callback) {
  console.log("Fetching data from the server...");
  callback();
}

function processData(callback) {
  console.log("Processing the fetched data...");
  callback();
}

function displayData() {
  console.log("Displaying the processed data...");
}

fetchData(() => {
  processData(
    () => {
      displayData();
    }
  )
})


/*
Output:
Fetching data from the server...
Processing the fetched data...
Displaying the processed data...

Explanation:
1. The fetchData function simulates fetching data from a server and takes a callback function as an argument.
2. After fetching the data, it calls the provided callback function.
3. The processData function simulates processing the fetched data and also takes a callback function as an argument.
4. After processing the data, it calls the provided callback function.
5. Finally, the displayData function is called to display the processed data.


This demonstrates the use of callbacks to handle asynchronous operations in JavaScript.
Also this leads to callback hell when there are multiple nested callbacks.
This is knows as "Pyramid of Doom" aka callback hell.

Another Drawback of Callbacks is : Inversion of Control
In inversion of control, the control of the program's flow is handed over to the callback function. This means that once a callback is passed to a function, the original function no longer has control over when or how the callback is executed. This can lead to unexpected behavior, especially if the callback function modifies shared state or relies on certain conditions being met.

In simple terms , it means that when you pass a callback function to another function, you are giving up control over when and how that callback will be executed. The function receiving the callback has the authority to decide when to call it, which can lead to situations where the original function's expectations about the program's flow are not met.
*/

/*To overcome the issues of Callback Hell and Inversion of Control, Promises and async/await were introduced in JavaScript.*/

// Example using Promises to avoid callback hell

function fetchDataPromise() {
  return new Promise((resolve, reject) => {
    console.log("Fetching data from the server...");
    let error = false;
    if(!error){
      resolve();
    }
    else{
      reject("Error in fetching data");
    }
  })
}

function processDataPromise(){
  return new Promise((resolve , reject)=> {
    console.log("Processing the fetched data...");
    let error = false;
    if(!error){
      resolve();
    }
    else {
      reject("Error in processing data");
    }
  })
}

function displayDataPromise(){
  console.log("Displaying the processed data...");
}

fetchDataPromise()
 .then( () => processDataPromise())
 .then( () => displayDataPromise())
 .catch ( (error) => console.log(error) );


 /*Output:
Fetching data from the server...
Processing the fetched data...
Displaying the processed data...

Explanation:
1. The fetchDataPromise function returns a Promise that simulates fetching data from a server.
2. If the data is fetched successfully, the Promise is resolved; otherwise, it is rejected with an error message.
3. The processDataPromise function works similarly, simulating data processing.
4. The displayDataPromise function simply displays the processed data.
5. The fetchDataPromise function is called, and upon successful resolution, it chains the processDataPromise and displayDataPromise functions using .then() methods.
6. If any of the Promises are rejected, the .catch() method handles the error.

This approach avoids callback hell by flattening the structure of asynchronous operations and provides better error handling through the use of Promises.

*/

// Example using async/await to further simplify the code

async function fetchDataAsync() {
  console.log("Fetching data from the server...");
}

async function processDataAsync() {
  console.log("Processing the fetched data...");
}

async function displayDataAsync() {
  console.log("Displaying the processed data...");
}

async function main() {
  try {
    await fetchDataAsync();
    await processDataAsync();
    await displayDataAsync();
  }
  catch(error) {
    console.log(error);
  }
}

main();

/*Output:
Fetching data from the server...
Processing the fetched data...
Displaying the processed data...

Explanation:
1. The fetchDataAsync, processDataAsync, and displayDataAsync functions are defined as async functions.
2. The main function is also defined as an async function, allowing the use of await within it.
3. Inside the main function, each asynchronous operation is awaited sequentially, ensuring that each step completes before moving to the next.
4. A try-catch block is used to handle any potential errors that may occur during the asynchronous operations.

*/