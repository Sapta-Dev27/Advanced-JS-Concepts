/*
1.Promise : Promise is basicallly an object that represents the eventual completion ( or failure ) of a asynchronous operation and its resulting value.
2.Promises provide a cleaner and more manageable way to handle asynchronous operations compared to traditional callback functions.
3. Promises are a way to handle asynchornous operations in Javascript. Its a way to avoid Callback Hell and Inversion of Control issues associated with callbacks.
4. A Promise is in one of three states:
   -Pending : Initial state , neither fulfilled nor rejected .
   -Fulfilled : Operation completed successfully.
    -Rejected : Operation failed.
5. A promise at first is an empty object. When the asynchronous operation completes, the promise is either resolved (fulfilled) with a resulting
data  or rejected with a reason (error).
*/


/*examples using Promises : How to create Promises ? 



function fetchData() {
  Asychronous Code here that returns a Promise 
}

function processData(){
   Asynchronous Code here that returns a Promise 
}

function displayData(){
   Asynchronous Code here that returns a Promise 
}

Using the Promises :
const promise = fetchData();

Chaining Promises : if the fetchData Promise is fulfilled, processData is called and if the processData Promise is fulfilled, displayData is called.
promise.then( () => processData()).then( () => displayData());

*/

// actual example using Promises :

function fetchData() {
  return new Promise((resolve, reject) => {
    console.log("Fetching data from the server...");
    let error = false;
    if (!error) {
      resolve();
    }
    else {
      reject("Error in fetching data");
    }
  })
}

function processData() {
  return new Promise((resolve, reject) => {
    console.log("Processing the fetched data...");
    let error = false;
    if (!error) {
      resolve();
    }
    else {
      reject("Error in processing data");
    }
  })
}

function displayData() {
  console.log("Displaying the processed data...");
}

fetchData()
  .then(() => processData())
  .then(() => displayData())
  .catch((error) => console.log(error));
