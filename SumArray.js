const arr=[10,11,12,13];

function SumArr(arr)
{
    return arr.reduce((first,second)=>
        first+second);
}
console.log(SumArr(arr));