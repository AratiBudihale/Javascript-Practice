//If -else
console.log("This is Demo 1")
const age=45

if(age==19)
{
    console.log("Age is 19");
}
else if(age===65)
{
    console.log("Age is 65")
}
else
{
    console.log("Age is not 19")
}

const doesDrive=true;
if(doesDrive && age>18)
{
    console.log("You can drive");
}
else
{
    console.log("You cannot drive");
}

console.log(age==45)?'Age is  45':'Age is not 45';