//For loop

let i=0;
for(i=0;i<10;i++)
{
    console.log(i)
}

//while loop
console.log("While loop execution")
let k=0;
while(k<10)
{
    console.log(k+1);
    k++;
}

//do while
console.log("Do while loop execution")
let j=0;
do{
    console.log(j+1);
    if(j===5)
    {
        break;
    }

    j+=1;
}while(j<10)


//continue
console.log("continue execution")
let b=0;
do{
    if(b==5)
    {
        b+=1;
        continue;
    }
    console.log(b);
    b=b+1;
}while(b<10)

//for each
console.log("For each loop")
let arr=[11,12,13,14,15]
arr.forEach(function(element)
{
    console.log(element);
})

arr.forEach(function(element,index,array)
{
    console.log(element,index,array)
})
 

//object
let obj=
{
    name:'Arati',
    Address:'Pune',
    marks:[11,12,13,14,15]
}
for(let key in obj)
{
    console.log(`The ${key} of object is ${obj[key]} `);
}