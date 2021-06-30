
async function fun()
{
    console.log("Inside fun");
    const response=await fetch('https://api.github.com/users');
    console.log("Before response");
    const users=await response.json();
    console.log("User resolved");
    return users;
}

console.log("Before calling fun");
let a=fun();
console.log("After calling hari");
console.log(a);
a.then(data=>console.log(data))
console.log("Last line");