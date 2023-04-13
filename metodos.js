const students=[
    {
    name:'Joe',
    lastname:'lol',
    age:20,
    course:'web'
},
{
    name:'laura',
    lastname:'pie',
    age:19,
    course:'marketing'
},
{
    name:'mick',
    lastname:'Daniel',
    age:22,
    course:'web'
},
{
    name:'paul',
    lastname:'mier',
    age:24,
    course:'programing'
},
{
    name:'Jill',
    lastname:'Doe',
    age:23,
    course:'programing'
},
{
    name:'Juan',
    lastname:'Poe',
    age:18,
    course:'marketing'
}
];


//console.log (students);
///for-----------
/*
for (let i = 0 ; i < students.length; i++){
 console.log(students[i])   
}
*/
//foreach-----------
/*
students.forEach(function(student, index){
    console.log(student)
});*/
/* students.forEach(function(student, index){
    console.log(student);
    console.log (index)
}); */


/*
students.forEach((student)=>{console.log(student.name 
    + " "+ student.lastname)})*/
/*
    const fullnames=[ ]

    students.forEach((student)=>{fullnames.push(student.name 
    + " "+ student.lastname)})

    console.log(fullnames)
    */
   //map--------------------
/*
   students.map (function(student){
    console.log(students)
   })

*/
/*
const result=students.map (function(student){
    
   })
console.log(result)
    */

const result=students.map (function(student){
    console.log(student)
    return"hola"

})
console.log(result)