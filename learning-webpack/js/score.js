const result = require('./students');
const score = [
    {studentRollNumber:1, score:730},
    {studentRollNumber:2, score:560},
    {studentRollNumber:3, score:650},
    {studentRollNumber:4, score:490},
    {studentRollNumber:5, score:487}
]

score.forEach((scr, index) => {
    result[index].score = scr.score;
    result[index].studentRollNumber = scr.studentRollNumber;
})

module.exports = result;
