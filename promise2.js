
//Pretend that this response is coming from server

const students=[
    { name:"Arati" ,subject:"Javascript"},
    {name:"piya", subject:"ML"}
]


function enrollStudent(student)
{
    return new Promise(function(resolve,reject)
    {
        setTimeout(function(){
            students.push(student);
            console.log("Student have been enrolled");
            const error=false;
            if(!error)
            {
                resolve();
            }
            else
            {
                reject();
            }

    })
   
    },3000);

}

function getStudent()
{
    setTimeout(function()
    {
        console.log(students);
        console.log("Student have been fetch")
    },1000);
}

let newStudent={name:"jiya",subject:"ICS"};
enrollStudent(newStudent).then(function()
{
    getStudent();
}).catch(function()
{
    console.log("Some error occured");
})
//getStudent();
