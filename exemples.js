var students = [
  {name: 'Dominique', age: 14, attendedCourses: ['PHP', 'javascript']},
  {name: 'Antonio', age: 25, attendedCourses: ['PHP']},
  {name: 'Othman', status: 'CDI', attendedCourses: []},
  {name: 'Tristan', age: 23, attendedCourses: ['Symfony', 'javascript']},
  {name: 'Nakkib', age: 30, attendedCourses: ['PHP', 'javascript', 'Angular', 'Nodejs']}
];


students.forEach(function(student) {
//console.log(student.name);
})

var studentsFiltered = [];

studentsFiltered = students.filter(function(student) {
//return student.age > 17;
var condition1 = student.name.indexOf('o') != -1;
var condition2 = student.name.indexOf('O') != -1;
return condition1 || condition2
})

studentsFiltered.forEach(function(student) {
console.log(student.name);
})


var name = "Antonio";
//console.log(name.indexOf('tonio'));
//console.log(name.substr(0));
