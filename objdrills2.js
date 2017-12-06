'use strict';

function makeStudentsReport(data) {
  return data.map(student => `${student.name} : ${student.grade}`);
}

const testData = [
  { name: 'Jane Doe', grade: 'A' },
  { name: 'John Dough', grade: 'B' },
  { name: 'Jill Do', grade: 'A' },
];

console.log(makeStudentsReport(testData));

const studentData = [
  {
    name: 'Tim',
    status: 'Current student',
    course: 'Biology',
  },
  {
    name: 'Sue',
    status: 'Withdrawn',
    course: 'Mathematics',
  },
  {
    name: 'Liz',
    status: 'On leave',
    course: 'Computer science',
  },
];

function enrollInSummerSchool(students){
  for (let i = 0; i < students.length; i++){
    students[i].status = 'In Summer School';
  }
  return students;
}

console.log(enrollInSummerSchool(studentData));


const scratchData = [
  { id: 22, foo: 'bar' },
  { id: 28, foo: 'bizz' },
  { id: 19, foo: 'bazz' },
];
  
function findById(items, idNum) {
  let foundId;
  for (let i=0; i < items.length; i++) {
    if (items[i].id === idNum) {
      foundId = items[i];
    }
  }
  return foundId;
} 
console.log(findById(scratchData, 28));  
