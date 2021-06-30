//Without asynchoronous
for(i=0;i<40;i++)
{
    console.log("The index is "+i);
}
console.log("done");


//with asynchronous
setTimeout(()=>
{
    for(i=0;i<40;i++)
    {
        console.log("The index is "+i);
    }   
},1000);

console.log("done");
