
const students=[
    { name:"Arati" ,subject:"Javascript"},
    {name:"piya", subject:"ML"}
]

function enrollStudent(student,callback)
{
    setTimeout(function(){
        students.push(student);
        callback();
    },3000);

}

function getStudent()
{
    setTimeout(function()
    {
        console.log(students);
    },1000);
}

let newStudent={name:"jiya",subject:"ICS"};
enrollStudent(newStudent,getStudent);
//getStudent();
