const students = [
    {
    name: "Luiz",
    one: 7, 
    two: 8,
},

{
    name: "Gabi",
    one: 5, 
    two: 9,
},

{
    name: "Ana",
    one: 4, 
    two: 3,
},
]


function responseMessage (student) {
    const average = average ((student.one + student.two) /2 )
    

    if (average > 7) {
        alert (` Parabéns ${student.name}, você passou com média ${student.average}`)
    } else {
        alert (` Sinto muito ${student.name}, sua média ficou ${student.average}. Tente novamente!`)
    }
    
    return message
}
