//Function

function greet(name,thank)
{
   console.log(`Happy Birtthday dear ${name}. Wish you best luck.Stay blessed ${thank}`) 
}
let name='Arati';
let name1='Pooja';

greet(name,'thank you very much')

//Arrow function

const fun=()=> "Hello";
console.log(fun());

const fun1=()=> ({name:'Arati', age:23});
console.log(fun1());



const fun3= (name,ending) => "Good morning " + name+ending;
console.log(fun3('harry','bye'))