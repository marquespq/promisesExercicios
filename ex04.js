/*
Exercise 4

*/
let promise = new Promise((resolve) =>{
  let result = false;
  let delayInMs = 2000;
  setTimeout(() => {
      resolve('Passou')
  }, delayInMs);
}); 
promise.then((check) => console.log(`${check}`)).catch((check) => console.log(`${check}`));

