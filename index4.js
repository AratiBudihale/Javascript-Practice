
console.log('Welcome to index 6');
let myvar;
myvar=String(65);
console.log(myvar,typeof(myvar))

let booleanvar=String(true)
console.log(booleanvar,typeof booleanvar)

let date=String(new Date());
console.log(date,typeof date)

let arr=String([1,2,3,4,5])
console.log(arr.length,typeof arr)

let i=8;
console.log(i.toString());

let stri=Number(true)
console.log(stri,typeof stri)

let str2=Number(3387)
console.log(stri,typeof str2)

let no=parseInt('123.99')
console.log(no,typeof no)

let number=parseFloat('123.99333')
console.log(number.toFixed(3),typeof no)

//Type coercion

let mystr=Number("555")
let mynum=99
console.log(mystr+mynum)
