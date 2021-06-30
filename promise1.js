//Promises-
//resolve
//reject
//pending

function fun()
{
    return new Promise(function(resolve,reject)
    {
        setTimeout(()=>
        {
            const error=true;
            if(!error)
            {
                console.log("Function:Your promise has resoleved");
                resolve();
            }
            else
            {
                console.log("Fuction:Your promise is nor resolve");
                reject("Sorry");
            }

        },3000);
    })
}

fun().then(function()
{
    console.log("Thanks for resolving");
}).catch(function(error)
{
    console.log("very bad.Reason"+error)
});