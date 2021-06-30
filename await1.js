

//The keyword await before a function makes the function wait for a promise
//Wait 3 seconds (3000 milliseconds) for this page to change.
//The keyword async before a function makes the function return a promise:
//The await keyword can only be used inside an async function.

async function myDisplay()
 {
  let myPromise = new Promise(function(myResolve, myReject) 
  {
    setTimeout(function() 
    { 
        myResolve("I am Arati !!")

    }, 3000);

  });

  console.log(await myPromise); 
}

myDisplay();
