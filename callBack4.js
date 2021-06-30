console.log("Wait 5 seconds (3000 milliseconds) for this page to change")


setTimeout(function()
{
    myFunction("I am Arati");
},5000);

function myFunction(value) {
    console.log(value)
}