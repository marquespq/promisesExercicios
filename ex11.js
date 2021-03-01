/**
 * 
 * EXERCISE 1
 * 
 * @param {Promise} promise 
 * @param {function} asyncTransformer 
 */
function flatMapPromise(promise, asyncTransformer){
    return new Promise((resolve, reject) => {
      promise
        .then(result => resolve(asyncTransformer(result)))
        .catch(e => reject(e))
    });
  }

  console.log(flatMapPromise(ae, top))