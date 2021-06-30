const arr=new Array(23,123,21,45,'Orange')
console.log(arr)

const fruit=['orange','Apple','Papaya']
const  mixed=[23,45,'Grapes',[12,34]]
console.log(fruit)
console.log(mixed[3])

console.log(arr.length)
console.log(Array.isArray(arr))

arr[0]='arati'
let arrelement=arr[0]
console.log("element "+arrelement)
console.log(arr)

let marks=[56,77,88,99,44,23]
let marks2=[22,34,22]

marks.push(34)
console.log(marks)

marks.unshift(45)
console.log(marks)
marks.pop()
console.log(marks)
marks.shift()
console.log(marks)
marks.splice(2,2)
console.log(marks)
marks.reverse()
console.log(marks)
marks=marks.concat(marks2)
console.log(marks)

let myobj={
    'First name':'arati',
    channel:'codewithharry',
    islive:true,
    marks:[12,12,12]

}
console.log(myobj)
console.log(myobj.channel)
console.log(myobj['channel'])
console.log(myobj.islive)